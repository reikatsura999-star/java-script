function sayHello() {
    console.time("f1");
    console.info('Info Time Terkini dari F1 >>');
    console.timeLog("f1");
    alert('Hello Selamat Datang');
    let nama = prompt("Nama Siapa?");
    confirm(nama + " Klik Button ")
    console.log(nama + " Telah Klik Button");
    console.count("submited"); 
    console.timeEnd("f1");
}

// NB From Me : 
                 //  console.time = fungsinya untuk memulai menghitung berapa waktu yg akan berjalan
                // console.info = fungsinya untuk menampilakn informasi log ke consol
                // console.time = untuk menampilkan waktu yg telah berlalu sejak di mulai tanpa menghentikan timer.
                // alert = berfungsi untuk menampilkan notif ke pengguna.
                // let nama = prompt untuk menanyakan nama lewat notif
                // confirm = untuk memberikan notif bahwa pengguna dng nama tertentu telah menekan tombol
                // consol.log = menampilkan di consol bahwa peengguna telah menekan tombol
                // console count = untuk melihat berapaka kali tombol sabmit ti klik
                // console.timeEnd = berfungsi untuk mengakhiri timer menampilkan durasi sejak di mulai