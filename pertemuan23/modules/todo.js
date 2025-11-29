// Modul todo.js: Menangani operasi pada item to-do
// Import modul storage untuk menyimpan/muat data
import { saveTasks, loadTasks } from './storage.js';

// Array untuk menyimpan daftar task (dimuat dari localStorage saat mulai)
let tasks = loadTasks();

// Fungsi untuk menambah task baru
export function addTask(text) {
    if (text.trim() === '') {
        alert('Task tidak boleh kosong!'); // Pesan sederhana jika kosong
        return null;
    }
    const newTask = { id: Date.now(), text: text.trim(), completed: false }; // Buat task baru
    tasks.push(newTask); // Tambah ke array
    saveTasks(tasks); // Simpan ke localStorage
    return newTask; // Kembalikan task untuk ditampilkan
}

// Fungsi untuk menandai task sebagai selesai
export function toggleComplete(id) {
    const task = tasks.find(t => t.id === id); // Cari task berdasarkan ID
    if (task) {
        task.completed = !task.completed; // Balik status selesai
        saveTasks(tasks); // Simpan perubahan
    }
}


// Fungsi untuk menghapus task
export function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id); // Hapus task dari array
    saveTasks(tasks); // Simpan perubahan
}


// Fungsi untuk mengedit teks task
export function editTask(id, newText) {
    const task = tasks.find(t => t.id === id); // Cari task berdasarkan ID
    if (task && newText.trim() !== '') {
        task.text = newText.trim(); // Update teks
        saveTasks(tasks); // Simpan perubahan
    }
}

// Fungsi untuk mendapatkan semua tasks
export function getTasks() {
    return tasks;
}

// Fungsi untuk filter tasks berdasarkan status
export function getFilteredTasks(filter) {
    if (filter === 'completed') {
        return tasks.filter(t => t.completed); // Hanya yang selesai
    } else if (filter === 'pending') {
        return tasks.filter(t => !t.completed); // Hanya yang belum selesai
    }
    return tasks; // Semua tasks
}