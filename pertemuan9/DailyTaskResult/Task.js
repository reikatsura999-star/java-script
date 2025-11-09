

let buku = {
    judul: 'automatic habits',
    pengarang: 'james clear',
    tahunterbit: '16 oktober 2016',
}


buku.tahunterbit = '2006'
buku.penerbit = 'nicolas'



for (let property in buku) {
    console.log(`${property} : ${buku[property]}`)
}



let bukufavorit = {
    judul: "clean code",
    penulis: "robert c. Martin",
    tahun: "2008",
};

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
bukufavorit.kategori = 'pemrograman'
buku.tahun = '2010'
delete buku.penulis

for (let property in bukufavorit) {
    console.log(`${property} : ${bukufavorit[property]}`)
}


console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

//==============================================================================================//
//latihan study case
//==============================================================================================//

// easy

let dataNamaSantri = ['ahmad', 'luqman', 'fauzi', 'raihan']

dataNamaSantri.push('musa')
dataNamaSantri.shift()
dataNamaSantri.splice(1, 1,)
console.log(`${dataNamaSantri}`)
console.log(dataNamaSantri.length)
//===========================================================================================
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
//===========================================================================================
//medium

let nilaiSiswa = [85, 92, 76, 90, 100, 67, 88]


nilaiSiswa.forEach((nilai, index) => {
    console.log(`siswa ke- ${index} : ${nilai}`)
})


let nilaibonus = nilaiSiswa.map((v) => {
    return v + 5
})

let Siswalulus = nilaibonus.filter((v) => {
    return v >= 90
})

let total = nilaibonus.reduce((acc, val) => {
    return acc + val
})

let ratarata = (total / nilaibonus.length).toFixed(1);

let topnilai = nilaiSiswa.find(nilai => nilai === 100)

console.log(`data setelah di tambah "${nilaibonus}"`)
console.log(`data nilai siswa yg lulus "${Siswalulus}"`)
console.log(`data nilai bonus setelah di jumlah "${total}"`)
console.log(`rata-rata nilai terakhir ${ratarata}`)
console.log(`data nilai tertinggi "${topnilai}"`)

//===================================================================================//
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
//====================================================================================//

const dataSantri = [
    { nama: "Ahmad", nilai: 90, aktif: true },
    { nama: "Luqman", nilai: 75, aktif: true },
    { nama: "Fauzi", nilai: 60, aktif: false },
    { nama: "Zain", nilai: 95, aktif: true }
];


const santriAktif = dataSantri.filter(nama => nama.aktif);


const santriBonus = santriAktif.map(santri => ({ ...santri, nilai: santri.nilai + 5 }));//...s arinya salin


const nilaiaktif = santriBonus.reduce((acc, val) => {
    return acc + val.nilai;
}, 0);


let rataRata = (nilaiaktif / santriBonus.length).toFixed(1)



console.log("daftar santri aktif:", santriAktif);
console.log(santriBonus);
console.log(`hasil dari penjumlahan seluruh nilai : "${nilaiaktif}"`)
console.log(`ini hasil rata-rata nilai santri aktif "${rataRata}"`);




const nilaiTertinggi = dataSantri.reduce((a, b) => a.nilai > b.nilai ? a : b);

const nilaiTerendah = dataSantri.reduce((a, b) => a.nilai < b.nilai ? a : b)

const jumlahAktif = dataSantri.filter((s) => s.aktif).length

const santrilulus = dataSantri.filter((s) => s.nilai >= 85).map((s) => s.nama)

console.log(`nilai tertinggi :`, nilaiTertinggi)
console.log(`nilai terendah :`, nilaiTerendah)
console.log(`jumlah antri yg aktif :`, santriAktif);
console.log(`santri lulus : ${santrilulus}`)


const santriList = [
    { nama: "Ahmad", program: "Fullstack", nilai: 97, aktif: true },
    { nama: "Zain", program: "Frontend", nilai: 95, aktif: true },
    { nama: "Luqman", program: "Backend", nilai: 92, aktif: true },
    { nama: "Fauzi", program: "Mobile", nilai: 89, aktif: false },
    { nama: "Rayhan", program: "UI/UX", nilai: 87, aktif: true },
    { nama: "Ilham", program: "Fullstack", nilai: 85, aktif: true },
    { nama: "Rizky", program: "Frontend", nilai: 83, aktif: true },
    { nama: "Hafiz", program: "Backend", nilai: 81, aktif: false },
    { nama: "Taufik", program: "Mobile", nilai: 79, aktif: true },
    { nama: "Raka", program: "UI/UX", nilai: 77, aktif: true },
    { nama: "Dimas", program: "Fullstack", nilai: 75, aktif: true },
    { nama: "Fikri", program: "Frontend", nilai: 73, aktif: false },
    { nama: "Bagas", program: "Backend", nilai: 71, aktif: true },
    { nama: "Yoga", program: "Mobile", nilai: 69, aktif: true },
    { nama: "Arif", program: "UI/UX", nilai: 67, aktif: false },
    { nama: "Salman", program: "Fullstack", nilai: 65, aktif: true },
    { nama: "Naufal", program: "Frontend", nilai: 63, aktif: true },
    { nama: "Farhan", program: "Backend", nilai: 61, aktif: false },
    { nama: "Iqbal", program: "Mobile", nilai: 59, aktif: true },
    { nama: "Reza", program: "UI/UX", nilai: 57, aktif: true }
];

const urutanNilai = [...santriList].sort((a,b)=> b.nilai - a.nilai)

const top5 = urutanNilai.slice(0,5)

top5.map((s,i)=>{
    console.log(`#${i+1}-${s.nama}-${s.program}-${s.nilai} poin -${s.aktif}`)
})

const ratatop5 = top5.reduce((acc,val)=> acc + val.nilai ,0) /top5.length

console.log(`ini urutan nilai tertinggi -  terendah `,urutanNilai);
console.log(`ini adalah nilai top 5 tertinggi :`,top5)
console.log(`ini adalah hasil dari rata-rata nilai top 5:`,ratatop5)


const santriLulus = santriList.filter(s=> s.nilai >= 85)
console.log(`ini adalah list santri yg lulus:`,santriLulus);

const rataRata2 = santriList.reduce((acc,s)=> acc + s.nilai , 0)/santriList.length;
console.log(rataRata2)

const kehadiranter = santriList.reduce((acc,s)=> s.nilai > acc.nilai ? acc : s)
console.log(kehadiranter)

const aktif = santriList.filter((s)=> s.aktif).length

const top3 = urutanNilai.slice(0,3)

top3.map((s,i)=>{
    console.log(`#${i+1}-${s.nama}-${s.program}-${s.nilai}poin -${s.aktif}`)
})