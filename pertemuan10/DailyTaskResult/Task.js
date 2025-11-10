//tugas harian-latihan mandiri-study case
const angka = [1,2,3,4,5,6]
const tampilkan = [a,b,c,d] = angka
console.log(tampilkan)



const mobil = {merek: 'avanza',tahun: 2010}
const {merek,tahun} = mobil
console.log(`mobil dengan merek:${merek},keluaran tahun ${tahun}`)




const angka1 = [1,2,3,4,5]
const angka2 =[...angka1,6,7,8,9,10]
console.table(angka2)


function jumlahkan(...v){
   return v.reduce((total,item)=> total + item,0) 
}


const nilai = [1,2,3,4,5]
const array = jumlahkan(...nilai)

console.log(`ini hasil dari seluru angka:`,array)


//===========================================================================================//
//Evaluasi Harian
//===========================================================================================//

let siswa = {
    nama : 'Rina',
    umur : 17,
    kelas : "xii",
    jurusan : 'ipa'
};
let tambahan = {...siswa,nilai : 10}

let {nama,kelas} = siswa


function jumlahkan(...angka){
    return angka.reduce((total,item)=> total + item,0)
}

let totalnilai = jumlahkan(80,90,85,89)
console.log(totalnilai)

//========================================================================================//
//study case 

//====================================== EASY =============================================//

let nama1 = ['budi','santoso','bambang']
let [nam1,nam2,nam3] = nama1
console.log(nam1,nam3)

//===================


let biodata = {
    namaa :'siti',
    umur : 17,
    kota : 'bandung',
}
let {namaa,umur,kota} = biodata
console.log(nama,umur)

//=====================

let buah1 = ['jeruk','mangga','rambutan']
let buah2 = [...buah1,'durian','manggis','melon']
console.table(buah2)


//=====================

let brand = ['oppo','realme','samsung','tekno','redmi']
let [x,y, ...z] = brand

console.log(x)//ini item-1
console.log(y)//ini item-2
console.log(z)//ini item sisanya

//=====================

let bio = {
    nama : 'andi',
    alamat : {
        jalan : 'mawar',
        ibukota : 'jakarta',
    }
}
let {alamat:{ibukota}} = bio

console.log(`ini ibukota:${ibukota} `)

//======================

let datapribadi = {
    nama : 'rina',
    umur : 25,
}

datapribadi = [stasus] = 'aktif'
console.log(datapribadi)

//======================

function gabungan(...angka){
    return angka.reduce((a,b)=> a + b,0)
}

let datanilai = gabungan(10,20,30,40,50)
console.log(`ini adalah hasil setelah di jumlahkan ${datanilai}`)

//====================================MEDIUM============================================//

let produk = [
    {nama:'laptop',harga:9000},
    {nama:'mouse',harga:150}
]

let [produk1,produk2] = produk
let {nama:namprod1,harga:harga1} = produk1
let {nama:namprod2,harga:harga2} = produk2

console.log(namprod1,harga1)

//===========================

let biodata2 = {
    nama: 'ahmad',
    umur: 25,
    email: "ahmad@gmail.com"
}

let updatedata = {
    ...biodata2,
    email:"mamad2@gmail.com"
}
console.table(updatedata)

//===========================
function prosesData([pertama, kedua, ...sisa]) {
  console.log("Pertama:", pertama);
  console.log("Kedua:", kedua);
  console.log("Sisa:", sisa);
}

prosesData([10, 20, 30, 40, 50]);

//============================