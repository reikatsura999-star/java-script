//study case pertemuan 11/batch22
const mahasiswa = {
    alice: { math: 85, english: 90, science: 88 }, 
    bob: { math: 78, english: 85, science: 82 },
    carol: { math: 92, english: 89, science: 94 }
};

//ekstrak nama
const mataPelajaran = Object.keys(mahasiswa);//alice,bob,carol = object.keys
console.log(mataPelajaran)

//hitung rata-rata lebih cocok buat pelajaran yg suka beruabah seperti nambah pelajaran baru
for (const [nama,nilai] of Object.entries(mahasiswa)){
     const array = Object.values(nilai)
     const total = array.reduce((total,nilai)=>total + nilai,0);
     const ratarata = total /array.length

     console.log(`nama ${nama} - ratarata ${ratarata.toFixed(2)}`)
}


console.log('\n')


// sama kaya yg kedua cuma beda sintak
for (const [nama,{math,english,science}] of Object.entries(mahasiswa)){
    const total = math + english + science;
    const ratarata = total /3;

    console.log(`nama: ${nama} math:${math} english:${english} science:${science} ratarata:${ratarata.toFixed(2)}`)
}

const dataTambahan = { ...mahasiswa,david: { math: 88, english: 91, science: 85 } };
console.table(dataTambahan)

//========================================

const playlist = [
    { judul: "Al-Fatihah", qari: "Mishary Rashid", durasi: 42, juz: 1 },
    { judul: "Al-Baqarah", qari: "Abdul Rahman As-Sudais", durasi: 7380, juz: 1 },
    { judul: "Ar-Rahman", qari: "Saad Al-Ghamdi", durasi: 810, juz: 27 },
    { judul: "Al-Mulk", qari: "Maher Al Muaiqly", durasi: 540, juz: 29 }
];

//menampilkan property dgn juz1
const juz1 = playlist.filter(({juz})=> juz === 1)
console.table(juz1)


//menghitung semua durasi surat
const totalDurasi = playlist.reduce((total,{durasi})=> total + durasi,0)/60;
console.log(`total durasi : ${totalDurasi} detik`)


//menampilkan qari dan suratnya
const listqarisurat = playlist.map(({judul,qari})=> `${judul} - ${qari}`)
console.table(listqarisurat)


//menampilkan surat terpanjang
const murattalterpanjang = playlist.reduce((terpanjang,current)=>{
  return current.durasi > terpanjang.durasi ? terpanjang : current  
})

console.table(murattalterpanjang);

//menambah kan murattal di awal
const tambah = [{judul: "Al-Qalam", qari: "abu usamah", durasi: 30, juz: 29},...playlist,]
console.log(tambah)

//============================== 

const pengeluaran = [
    { hari: "Senin", kategori: "makan", jumlah: 25000 },
    { hari: "Senin", kategori: "transport", jumlah: 15000 },
    { hari: "Selasa", kategori: "makan", jumlah: 30000 },
    { hari: "Selasa", kategori: "hiburan", jumlah: 50000 },
    { hari: "Rabu", kategori: "makan", jumlah: 20000 }
];


const items = [...pengeluaran]
const belanja = pengeluaran.reduce((total,{jumlah})=> total + jumlah,0)
console.table(`total penegeluarn : ${belanja}`)

