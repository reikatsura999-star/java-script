// Modul storage.js: Menangani penyimpanan data ke localStorage
// localStorage adalah tempat penyimpanan sederhana di browser untuk data permanen

// Fungsi untuk menyimpan daftar task ke localStorage
export function saveTasks(tasks) {
    try {
        // Ubah array tasks menjadi string JSON dan simpan
        localStorage.setItem('todoTasks', JSON.stringify(tasks));
    } catch (error) {
        // Jika localStorage gagal (misalnya penuh), beri pesan sederhana
        console.log('Gagal menyimpan data ke localStorage:', error);
    }
}

// Fungsi untuk mengambil daftar task dari localStorage
export function loadTasks() {
    try {
        // Ambil data dari localStorage, jika tidak ada, kembalikan array kosong
        const tasks = localStorage.getItem('todoTasks');
        return tasks ? JSON.parse(tasks) : [];
    } catch (error) {
        // Jika gagal (misalnya data rusak), kembalikan array kosong
        console.log('Gagal memuat data dari localStorage:', error);
        return [];
    }
}