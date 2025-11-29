// app.js: Logika utama aplikasi to-do list
// Import modul-modul yang diperlukan
import { addTask, toggleComplete, deleteTask, editTask, getTasks, getFilteredTasks } from './todo.js';

// Ambil elemen HTML yang diperlukan
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const filterAll = document.getElementById('filter-all');
const filterCompleted = document.getElementById('filter-completed');
const filterPending = document.getElementById('filter-pending');

// Variabel untuk menyimhapusan filter aktif
let currentFilter = 'all';

// Fungsi untuk menampilkan tasks berdasarkan filter
function renderTasks() {
    taskList.innerHTML = ''; // Kosongkan list dulu
    const tasksToShow = getFilteredTasks(currentFilter); // Ambil tasks yang difilter
    tasksToShow.forEach(task => {
        // Buat elemen li untuk setiap task
        const li = document.createElement('li');
        li.className = 'task-item';
        if (task.completed) li.classList.add('completed'); // Tambah class 'completed' untuk coretan

        // Tambah teks task (dengan kemampuan edit)
        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = task.text;
        span.onclick = () => startEdit(span, task.id); // Klik untuk edit
        li.appendChild(span);

        // Tombol untuk tandai selesai
        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.textContent = task.completed ? 'Batal' : 'Selesai';
        completeBtn.onclick = () => {
            toggleComplete(task.id); // Panggil fungsi toggle
            renderTasks(); // Refresh tampilan
        };
        li.appendChild(completeBtn);

        // Tombol untuk hapus
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Hapus';
        deleteBtn.onclick = () => {
            deleteTask(task.id); // Panggil fungsi hapus
            renderTasks(); // Refresh tampilan
        };
        li.appendChild(deleteBtn);

        taskList.appendChild(li); // Tambah li ke list
    });
}

// Fungsi untuk mulai edit task (inline)
function startEdit(span, id) {
    span.classList.add('editing'); // Tambah class editing
    const input = document.createElement('input'); // Buat input untuk edit
    input.type = 'text';
    input.value = span.textContent;
    input.onblur = () => finishEdit(input, span, id); // Simpan saat klik luar
    input.onkeydown = (e) => {
        if (e.key === 'Enter') finishEdit(input, span, id); // Simpan saat tekan Enter
    };
    span.innerHTML = ''; // Kosongkan span
    span.appendChild(input); // Tambah input
    input.focus(); // Fokus ke input
}

// Fungsi untuk selesai edit
function finishEdit(input, span, id) {
    const newText = input.value;
    editTask(id, newText); // Update task
    span.classList.remove('editing'); // Hapus class editing
    renderTasks(); // Refresh tampilan
}

// Fungsi untuk update filter aktif
function setFilter(filter) {
    currentFilter = filter;
    // Update tombol aktif
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`filter-${filter}`).classList.add('active');
    renderTasks(); // Refresh tampilan
}

// Event listener untuk tombol tambah
addBtn.addEventListener('click', () => {
    const text = taskInput.value; // Ambil teks dari input
    addTask(text); // Tambah task
    taskInput.value = ''; // Kosongkan input
    renderTasks(); // Refresh tampilan
});

// Event listener untuk filter
filterAll.addEventListener('click', () => setFilter('all'));
filterCompleted.addEventListener('click', () => setFilter('completed'));
filterPending.addEventListener('click', () => setFilter('pending'));

// Jalankan render pertama kali saat halaman load
renderTasks();