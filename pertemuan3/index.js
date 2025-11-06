// struktur percabangan

//EXAMPLE OF SWITCH 

function listMenu() {
    
    if( confirm("Anda mau makan ?")){
        ////confirm akan menampilkan tombol ok dan cancel 
        let menu = prompt('Menu Nomer Berapa anda Pilih ? \n Pilih Menu di Bawah ini: \n 1. Mie Ayam : Rp15.000 \n 2. Bakso : Rp.10.000 \n 3. Soto : Rp5.000')//\n befungsi untuk membuat baris baru

        switch (menu) {
            case "1":
                console.log("Anda Pilih Mie Ayam : Rp15.000");
                break;
                //break berfungsi untuk memberhentikan proses setelah case yg sesuai di temukan
            case "2":
                console.log("Anda Pilih Bakso : Rp.10.000");
                break;
            case "3":
                console.log("Anda Pilih Soto : Rp5.000");
                break;
            default:
                console.log("Menu Tidak Tersedia");
                break;
                //default akan berjalan jika tidak ada case yg seseuai
        }
    }    
}


function menu(){
    if (confirm("mau") ){
         let menu = prompt("silahkan pilih nomer di bawah ini \n 1.bakso babi:5.000 \n 2.soto sapi:3.000 \n 3.mie ayam:50.000");

    switch (menu) {
        case"1":
              console.log("anda pilih menu 1.bakso babi harga RP.5000")
            break;
        case"2":
              console.log("anda pilih menu 2.soto sapi harga Rp.3000")
              break;
        case"3":
              console.log("anda pilih menu 3.mie ayam Rp.50.000")
              break;   
          default:
            break;
    }
 }
   
}


function pilihrole(){
    if(confirm("apakah kamu yakin untuk bergabung di tim ini")) 
    role = prompt ("masukan role anda : \n1.jungler \n 2.goldliner  \n 3.expline \n 4.midliner \n 5.roamer");
    
    switch (role) {
        case"1":
            console.log("kamu memillih role jungler.selamat datang");
            alert("selamat kamu  di terima sebagai jungler di tim ini")
            break;
        case"2":
            console.log("kamu memilih role goldline.selamat datang"); 
             alert("selamat kamu  di terima sebagai goldliner di tim ini")   
            break;
         case"3":
            console.log("kamu memilih role expline.selamat datang");   
             alert("selamat kamu  di terima sebagai expliner di tim  ini")
            break;
        case"4":
            console.log("kamu memilih role midline.selamat datang");   
             alert("selamat kamu  di terima sebagai midliner di tim ini")
            break;   
        case"5":
            console.log("kamu memilih role roamer.selamat datang");
             alert("selamat kamu  di terima sebagai roamer di tim ini")
            break;
        default:
            break;
    }
    if(!role){
        alert("anda belum memilih role");
    }
}




 //EXAMPLE FOR IF, ELSE IF, ELSE 
function pilihMinuman() {
    // Meminta input dari pengguna
    let pilihan = prompt("Pilih minuman:\n1. Teh\n2. Kopi\n3. Jus\n4. Air Mineral");

    // Mengecek apakah input kosong
    if (!pilihan) {
        alert("Kamu belum memilih minuman.");
    }

    // Mengecek pilihan minuman berdasarkan angka
    else if (pilihan == "1") {
        alert("Kamu memilih Teh");
    } 
    else if (pilihan == "2") {
        alert("Kamu memilih Kopi");
    } 
    else if (pilihan == "3") {
        alert("Kamu memilih Jus");
    } 
    else if (pilihan == "4") {
        alert("Kamu memilih Air Mineral");
    } 

    // Jika input tidak sesuai pilihan yang tersedia
    else {
        alert("Pilihan tidak tersedia. Silakan pilih angka 1–4.");
    }
}


function cekAksesPengguna() {
    // Meminta input status pengguna dari pengguna
    let statusPengguna = prompt("Masukkan status pengguna Anda (aktif / nonaktif / banned)");

    // Meminta input level akses dari pengguna
    let levelAkses = prompt("Masukkan level akses Anda (admin / moderator / pengguna)");

    // Mengecek apakah status pengguna adalah 'aktif'
    if (statusPengguna === 'aktif') {
        console.log(" Pengguna aktif terdeteksi");

        // Jika level akses adalah admin
        if (levelAkses === 'admin') {
            console.log(" Akses diberikan: Admin memiliki semua hak akses");
        }
        // Jika level akses adalah moderator
        else if (levelAkses === 'moderator') {
            console.log(" Akses diberikan: Moderator memiliki akses terbatas");
        }
        // Jika level akses bukan admin atau moderator
        else {
            console.log(" Akses diberikan: Pengguna biasa dengan akses standar");
        }
    }

    // Jika status pengguna adalah 'nonaktif'
    else if (statusPengguna === 'nonaktif') {
        console.log(" Pengguna tidak aktif, akses dibatasi");

        if (levelAkses === 'admin') {
            console.log(" Namun Admin masih bisa mengakses data");
        } else if (levelAkses === 'moderator') {
            console.log(" Moderator tidak bisa mengakses data");
        } else {
            console.log(" Pengguna biasa tidak bisa mengakses data");
        }
    }

    // Jika status pengguna adalah 'banned'
    else if (statusPengguna === 'banned') {
        console.log("Pengguna diblokir");

        if (levelAkses === 'admin') {
            console.log("Admin juga tidak bisa mengakses");
        } else if (levelAkses === 'moderator') {
            console.log("Moderator tidak bisa mengakses");
        } else {
            console.log("Pengguna biasa sangat dibatasi");
        }
    }

    // Jika status pengguna tidak dikenali
    else {
        console.log("❌ Status pengguna tidak dikenali, akses ditolak");
    }
}


//contoh percabangan "login"

function login1(){
    let email = prompt ("masukan email anda")
    let pw = prompt ("masukan password")

    if(!email || !pw){
        alert("email dan password masih kosong");
        console.log("login gagal");
    } else if(email == "mau@gmail.com" && pw == 123){
        confirm("apakah anda sudah yakin benar");
        alert("selamat anda telah berhasil login");
        console.log("login berhasil")
    } else{
        alert("anda di tolak");
        console.log("login gagal");
    }
}

// contoh for loop

for (let recal= 5;recal >=1; recal--){
    console.log("kembali ke bash detik ke-" +recal);
}