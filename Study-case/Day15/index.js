// const user = {
//     nama: "yudi",
//     role: "marketer",
//     level: 3
// }
// localStorage.setItem("user", JSON.stringify(user))//menyimpan data di lokal dalam bentuk json

// let ambilData = JSON.parse(localStorage.getItem("user"))//get item untuk mengambil data dari lokal
// console.log(ambilData.nama);

// //=======================================================

// const tasks = ["makan", "minum", "tidur"]
// localStorage.setItem("tasks", JSON.stringify(tasks))//menyimpan


// //menghapus data 
// const ambilData1 = JSON.parse(localStorage.getItem("tasks"))//mengambil dan di ubah jadi objek
// console.log(tasks);
// ambilData1.splice(1, 1);//menghapus salah salah satu data 
// localStorage.setItem("tasks", JSON.stringify(tasks))// setelah di hapus data baru di simpan di lokal
// console.log(`setelah di splice`, ambilData1);


// //menambah data baru
// let ambilData2 = JSON.parse(localStorage.getItem("tasks"))//ambil data dari lokal
// tasks[0] = 'jajan' // menambah data baru di index pertama
// localStorage.setItem("tasks", JSON.stringify(tasks)) // di simpan di lokal kembali
// console.log(tasks);



// //menambah nama dan waktu
// function absen(nama) {
//     let absensi = JSON.parse(localStorage.getItem("absesnsi")) || []//ambil data dari lokal / membuat array baru
//     absensi.push({//menambahkan 
//         nama,
//         waktu: new Date().toISOString()
//     });
//     localStorage.setItem("absensi", JSON.stringify(absensi))
//     console.table(absensi);
// }
// absen("rafi")


// //dati di filter
// let absensi2 = JSON.parse(localStorage.getItem("absensi"))//ambil data dari lokal
// let hariIni = absensi2.filter(a => a.nama === "rafi")//data di filter  
// console.log(hariIni);


// //mencari data 
// let absensi3 = JSON.parse(localStorage.getItem("absensi"))
// let found = absensi3.find(a => a.nama == "rafi")
// console.log(found);

// //kurangi untuk total pertemuan
// let absensi4 = JSON.parse(localStorage.getItem("absensi"))

// let total = absensi4.reduce((acc, cur) => {
//     acc[cur.nama] = (acc[cur.nama] || 0) + 1
//     return acc;
// }, {})

// console.log(total);

// //penggunaan di aplikasi mini todo
// function loadtodo() {
//   return JSON.parse(localStorage.getItem("todo")) || []; // tambahkan return dan fallback array kosong
// }

// function savetodo(list) {
//   localStorage.setItem("todo", JSON.stringify(list)); // simpan list, bukan text
// }

// function todo(text) {
//   const list = loadtodo(); // ambil list dari localStorage
//   list.push({ text, done: false }); // tambahkan item baru
//   savetodo(list); // simpan kembali list yang sudah diperbarui
// }

// todo("belajar tentang callback");

// //panggil balik dan gabungkan dengan penyimpanan lokal

// function validasi(data,callback){
//     if(!data.nama) return console.log("data tidak valid");
//     callback(data) // => pindah ke param objek,simpan kelas
// }

// function simpanKelas(objek){
//  let daftar = JSON.parse(localStorage.getItem("daftar") || [])//ambil data lokal / buat array baru 
//  daftar.push(objek)
//  localStorage.setItem("daftar",JSON.stringify(daftar)) // data di simpan di lokal
//  console.log("data berhasil di simpan");
 
// }

// validasi({nama : "rayhan",nilai :85},simpanKelas) // => function validasi (data,callback)


// //absensi santri (manipulasi json lengkap)
// function tambahkanAbsensi(nama,callback){
//  const absensi5 = JSON.parse(localStorage.getItem("absensi5") || [])
//  const data = {
//     id : absensi5.length + 1,
//     nama,
//     waktu : new Date().toISOString()
//  }
//  callback(absensi5,data)
// }

// function simpanan(absensiBaru,dataBaru){
//     absensiBaru.push(dataBaru)
//     localStorage.setItem("absensi5",JSON.stringify(absensiBaru))
//     console.log("absensi masuk :",dataBaru);
    
// // }

// tambahkanAbsensi("hasnuan",simpanan)

//=========================== soal-study-case =========================

/* 1.call back funtion adalah fungsi yg kirim ke funsi lain sabagai argumen ,lalu di panggil kembali setelah eksekusi tertentu selesai.
contoh:*/


function validasi(nama,callback){
 console.log("ini adalah:",nama);
 callback();
}

function kandang(){
 console.log("dia tinggal di kandang");
}

validasi("ayam",kandang);


//=========================== no.2
function sapaUser(ucapan,callback){
   let a = callback("hallo santri")
   return a
    
}
function habisSapa(param){
    return param  
}


console.log(sapaUser("selamat datang",habisSapa));

//===================================== no.3

function tambahAngka(angka1,angka2,callback){
    return callback(angka1,angka2); // => fn tambah
}

function tambah(a,b){
    return a + b
}

console.log(tambahAngka(1,5,tambah)); // => fn tambah angka

//==================================== no.4
// karena lokal storange hanya bisa membaca data json yg berbentuk string
// dan tidak bisa menyimpan objek javascript



//==================================== no.5

let data = {
    nama : "agung",
    umur : 23,
    alamat : "bandung"
}
localStorage.setItem("data",JSON.stringify(data))
console.log(data);

//===================================== no.6

const ambill = JSON.parse(localStorage.getItem("data"))
console.log("ini hasilnya ketika di ambil dari lokal",ambill);

//===================================== no.7

const angka = [1,2,3,4,5,6,7,8,9,10]
localStorage.setItem("angka",JSON.stringify(angka))

//===================================== no.8

const ambilAngka = JSON.parse(localStorage.getItem("angka"))
console.log("ini hasilnya",ambilAngka);

//===================================== no.9
//json adalah data dalam bentuk string yg bisa di kirim ke aplikasi lain,karena untuk mengirim data tidak bisa langsung pakai objek js.

//===================================== no.10

let dataNama = [{nama : "fadil", kelas : 12, nilai : 99 }]
localStorage.setItem("dataNama",JSON.stringify(dataNama))

//===================================== no.11

function prosesInput(input,callback){
   console.log( callback(input));
   
}

function validasiData(data){
  return data ? "data ok" : "data tidak valid"
}

prosesInput("hai",validasiData)
prosesInput("",validasiData)

//==================================== no.12

function tampilkanWaktu(){
    console.log("detik-1");
    
    setTimeout(()=>{
        console.log("detik ke-2 akan segera di mulai");
    },2000)
    console.log("detik-2");
    
}

tampilkanWaktu()

//=================================== no.13
function prosesArray(arr,callback){
    for(let i = 0;i < 10;i++){
        console.log(callback(arr[i]));
        
    }
}

function kali(nilai){
    return nilai * 2
}

prosesArray([1,2,3,4,5,6,7,8,9,10],kali)

//================================= no.14

let simpanan = {
    nama : 'yanto',
    umur : 34,
    alamat : "jakarta selatan",
    hobi : "memasak"
}
localStorage.setItem("simpanan",JSON.stringify(simpanan))//menyimpan data ke lokal

const ambilData = JSON.parse(localStorage.getItem("simpanan"))//mengambil data lokal
delete ambilData.umur;//menghapus umur

localStorage.setItem("simpanan",JSON.stringify(simpanan))// simpan ke lokal lagi
console.log(ambilData);

//================================= no.15

const semuaKey = Object.keys(localStorage(simpanan))
console.log(semuaKey);
