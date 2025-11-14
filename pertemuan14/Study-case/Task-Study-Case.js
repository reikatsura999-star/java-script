//============================================ no.1
const bio = {nama : "ahmad",umur : 23, alamat:"jakarta",hobi : "berenang"}
const jhon = JSON.stringify(bio)
console.log(jhon)

//============================================= no.2

const json = '{"nama" :"amin", "umur" : 35}'
const obj = JSON.parse(json)
console.log(obj);

//============================================== no.3

const angka = ([1,2,3,4]);
const konversi = JSON.stringify(angka)
console.log(konversi);

//============================================== no.4

const siswa = '{"nama" : "ali","kota" : "yogyakarta"}'

const objJson = JSON.parse(siswa)
console.log(objJson.kota);

//=============================================== no.5

const Data = JSON.parse('{"sekolah":{"kelas":{"jumlah_Siswa" : 39}}}');
console.log(Data.sekolah.kelas.jumlah_Siswa);

//=============================================== no.6
const data2 = '{"x" : 50}'
try{
  JSON.parse(data2) //try akan menjalan kode di dalam nya jika gak valid akan masuk ke catch
  console.log("data json valid");
}catch {
    console.log("data json tidak valid");
}

//================================================ no.7
localStorage.setItem("retrun" ,JSON.stringify({level :15,gold :1500}))
console.log(localStorage);

const game = localStorage.getItem("retrun");//ngambil data dari local
const saved = JSON.parse(game);//setelah di ambil data di rubah json ke objek
console.log(saved.level);
console.log(saved.gold); 

//================================================== no.8

const hewan = [
  {nama : "hiu",jenis :"ikan"},{nama : "elang",jenis : "burung"}
]
const jsonHewan = JSON.stringify(hewan)
console.log(jsonHewan);

//=================================================== no.9

const warna = ('["kuning","merah","hijau"]')
const jsonWarna = JSON.parse(warna)
console.log(jsonWarna[0])

//================================================== no.10

const data3 = '{"judul": "Buku", "tahun": }'

//================================================== no.11

let hobi = '["main Bola","baca Buku","Olahraga"]'
let objHobi = JSON.parse(hobi)
console.log(objHobi[2]);

//================================================== no.12

let nama = '[{"nama":"andi","nilai":100 },{"nama":"bowo","nilai":97},{"nama":"kumar","nilai":87}]'

let objNama = JSON.parse(nama)
console.log(objNama[2].nilai);

//================================================== no.13

let jsonMakanan = '[{ "nama": "Nasi Goreng", "kalori": 500 }, { "nama": "Sate Ayam", "kalori": 350 },{ "nama": "Gado-Gado", "kalori": 250 }]'

let objMakanan = JSON.parse(jsonMakanan)
if (objMakanan[0].kalori == 500){
  console.log("kalori :500");
} else if(objMakanan[0].kalori < 500){
  console.log('hasil tidak di temuakan');
}
 
//================================================== no.14

let jsonNilai = '[{"nama":"marry","nilai": 100}]'
let objNilai = JSON.parse(jsonNilai)

if (objNilai[0].nilai > 75) {
  console.log('Lulus');
} else if(objNilai[0].nilai < 75){
  console.log('gagal');
}

//=================================================== no.15

let jasonAngka = '[20,30,40,65,78]'
let objAngka = JSON.parse(jasonAngka)

let jumlah = objAngka[0] + objAngka[1] + objAngka[2] + objAngka [3] / objAngka[4]
console.log(jumlah);
