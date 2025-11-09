//===========================================================//
//tugas mandiri//                                               
//==========================================================//                                
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



//mengkalikan setiap value/item
let angka = data.map((v, i, a) => {
    return v * 5
})

console.log(angka)

//memfilter angka genap
let angkagenap = data.filter((v, i, a) => {
    return v % 2 == 0
})

console.log(angkagenap);
//mengabungkan semua data
let gabungan = data.reduce((acc, val) => {
    return acc + val
})

console.log(gabungan)

//mencari nilai yg melebihi 8
let lebihdari = data.find((v, i, a) => {
    return v > 8
})

console.log(lebihdari)

//=======================================================//
// EVALUSI HARIAN //
//=======================================================//

const nilaisiswa = [60, 75, 80, 55, 90, 45]

let nilai = nilaisiswa.filter((v, i, a) => {
    return v >= 70
})

// console.table(nilai)

let nilai1 = nilaisiswa.map((v, i, a) => {
    if (v >= 70) {
        return v + 'lulus'
    } else if (v < 70) {
        return v + 'gagal'
    }
}
)

let lulus = nilai1.filter((v) => {
    return v.includes("lulus")
})

// console.log(lulus)

let gagal = nilai1.filter((v) => {
    return v.includes('gagal')
})

// console.table(gagal)

let totalgabungan = nilaisiswa.reduce((acc, val) => {
    return acc + val
})

// console.log(total)

const hasil = {
    dataawal: nilaisiswa,
    setelahfilter1: lulus,
    setelahfilter2: gagal,
    total: totalgabungan,
};

console.log(hasil)


//===========================================================//
//tugas study cash//
//===========================================================//

//essy

let barang = ['laptop','hp','headset','mouse','flashdisk']
console.log(barang[3])
console.log(barang);

// push = menambahkan terakhir
let sayur = ['tomat','kangkun','kubis','timun']
sayur.push('bawang')
console.log(sayur)

// pop = menghapus terakhir
let nama = ['yanto','juned','harist','rudi','tri','agus']

let hapusnama = nama.pop()
console.log(hapusnama);

//forEach = mengkalikan
let nomor = [1,2,3,4,5,6,7,8,9]
nomor.forEach((no)=>{
    console.log(no * 5)
})

//include = cek ada tidak
let tempat = ['masjid','dapur','asrama','kelas','halaman']
console.log(tempat.includes('masjid'))
console.log(tempat.includes('gereja'))

//unshift = masukan nilai di urutan pertama
let merek = ['asus','axio','lenovo','macbook']
merek.unshift('msi')
console.log(merek)

//shift = hapus urutan pertama
let list = ['nama','alamat','email','kontak']
let hapusshift = list.shift()
console.log(hapusshift)

//index.off cek urutan ke berapa
let negara = ['malaysia','indonesia','brunei','singapure']
console.log(negara.indexOf('singapure'));
console.log(negara.indexOf('indonesia'))

//map = mengembalikan hasil
let angkabaru = [2,4,6,8,10]
let angkamodif = angkabaru.map( num=> num * 5)
console.log(angkamodif
)

//filter = memfilter sesuatu
let umur = [10,12,15,17,18,20,21,25,17,27,30]
let dewasa = umur.filter(min=> min > 17)
console.log(dewasa)

//find = cari nama + nilai
let nilaiujian = [
{nama : 'jaya', nilai : 100},
{nama : 'yaru', nilai :  90},
{nama : 'maman', nilai : 80}
];

let topstudent = nilaiujian.find(student => student.nilai > 80 );
console.log(topstudent)













//hard