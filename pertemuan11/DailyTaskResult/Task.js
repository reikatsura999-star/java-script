//===============================
const dataSiswa = [
  { nama: "Andi", nilai: 85, jurusan: "IPA" },
  { nama: "Budi", nilai: 78, jurusan: "IPS" },
  { nama: "Citra", nilai: 92, jurusan: "IPA" },
  { nama: "Dina", nilai: 88, jurusan: "Bahasa" },
  { nama: "Eko", nilai: 75, jurusan: "IPA" },
  { nama: "Fajar", nilai: 80, jurusan: "IPS" },
  { nama: "Gita", nilai: 90, jurusan: "IPA" },
  { nama: "Hani", nilai: 70, jurusan: "Bahasa" },
  { nama: "Irfan", nilai: 95, jurusan: "IPA" },
  { nama: "Joko", nilai: 65, jurusan: "IPS" },
  { nama: "Kiki", nilai: 82, jurusan: "IPA" },
  { nama: "Lina", nilai: 77, jurusan: "Bahasa" },
  { nama: "Mira", nilai: 89, jurusan: "IPA" },
  { nama: "Nina", nilai: 73, jurusan: "IPS" },
  { nama: "Oki", nilai: 91, jurusan: "IPA" },
  { nama: "Putri", nilai: 68, jurusan: "Bahasa" },
  { nama: "Qori", nilai: 87, jurusan: "IPA" },
  { nama: "Rudi", nilai: 76, jurusan: "IPS" },
  { nama: "Sari", nilai: 93, jurusan: "IPA" },
  { nama: "Tono", nilai: 79, jurusan: "Bahasa" }
];

const anakIPA = dataSiswa.filter(siswa => siswa.jurusan.toLowerCase() === "ipa")
console.log('nama-nama anak dengan jurusan IPA')
console.table(anakIPA);



const totalNilai = dataSiswa.reduce((acc,val)=> acc + val.nilai , 0)
const rataRata = totalNilai / dataSiswa.length

console.log(`rata-rata dari nilai semua sisws adalah : ${rataRata}`)


//========================================== LATIHAN MANDIRI ==============================//

const transaksi = [
  { namaBarang: "Laptop", jumlah: 1, hargaSatuan: 8500000 },
  { namaBarang: "Mouse", jumlah: 3, hargaSatuan: 125000 },
  { namaBarang: "Keyboard", jumlah: 2, hargaSatuan: 400000 },
  { namaBarang: "Monitor", jumlah: 2, hargaSatuan: 2750000 },
  { namaBarang: "Printer", jumlah: 1, hargaSatuan: 1500000 },
  { namaBarang: "Scanner", jumlah: 1, hargaSatuan: 1200000 },
  { namaBarang: "Webcam", jumlah: 2, hargaSatuan: 600000 },
  { namaBarang: "Speaker", jumlah: 2, hargaSatuan: 450000 },
  { namaBarang: "Headset", jumlah: 3, hargaSatuan: 300000 },
  { namaBarang: "Flashdisk", jumlah: 5, hargaSatuan: 90000 },
  { namaBarang: "Harddisk", jumlah: 1, hargaSatuan: 1100000 },
  { namaBarang: "SSD", jumlah: 2, hargaSatuan: 950000 },
  { namaBarang: "Kabel HDMI", jumlah: 4, hargaSatuan: 85000 },
  { namaBarang: "Mousepad", jumlah: 3, hargaSatuan: 50000 },
  { namaBarang: "UPS", jumlah: 1, hargaSatuan: 2000000 }
];




//list transaksi yg lebih dari 500 rb
const belanjaLebih = transaksi.filter((p)=>{
  const total = p.jumlah * p.hargaSatuan
  if (total > 500000){
    console.log(`${p.namaBarang} : ${total}`)
  }
})


//ringkasan nama barang & total harga
const ringkasbelanja = transaksi.map(item => ({
  namaBarang : item.namaBarang,
  totalHarga : item.jumlah * item.hargaSatuan
}))
console.table(ringkasbelanja)