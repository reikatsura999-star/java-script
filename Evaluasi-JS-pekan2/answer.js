//======================= soal ke 1
function hitungTotal(harga, qty, pajakPct, diskonPct) {
  let subtotal = harga * qty;

  let setelahDiskon = subtotal * (1 - diskonPct / 100);

  let total = setelahDiskon * (1 + pajakPct / 100);

  return Math.round(total);
}

// Contoh soal_1
let hasil = hitungTotal(10000, 3, 11, 10);
console.log("Hasil:", hasil); // Hasil: 29970
//======================= soal ke 2
function gradeIfElse(nilai) {
  if (nilai >= 90) {
    console.log('A untuk nilai 90-100');
  } else if (nilai >= 80) {
    console.log('B untuk nilai 80-89');
  } else if (nilai >= 70) {
    console.log('C untuk nilai 70-79');
  } else if (nilai >= 60) {
    console.log('D untuk nilai 60-69');
  } else {
    console.log('E untuk nilai 1-59');
  }
}

gradeIfElse(90); // Output: A untuk nilai 90-100
//======================= soal ke-3

function kategoriSwitch(kode) {
    let result;
    switch (kode) {
        case 'M':
            console.log('Mentor untuk kode "M"')
            break;
        case 's':
            console.log('Santri untuk kode "S"')
            break;
        case 'A':
            console.log('Admin untuk kode "A"');
            break;
        default:
            console.log('Tamu untuk kode selain M,A,S');
            break;
    }
}

//====================== soal ke 4
let arr = [1, 2, 3, 4, 5, 6];

let genap = arr.filter(val => val % 2 === 0);

let gabunganGenap = genap.reduce((acc, val) => acc + val, 0);

console.log(gabunganGenap); // Output: 12
//====================== soal ke 5




//====================== soal ke 6

const luasPersegi = function(s) {
  return s * s;
};

let luaspersegi = luasPersegi(2);
console.log(luaspersegi); // Output: 4
//====================== soal ke 7

function kelolaAntrian(list, aksi) {
  let hasil = [...list];

  if (aksi.type === "push") {
    hasil.push(aksi.payload);
  } else if (aksi.type === "pop") {
    hasil.pop();
  } else if (aksi.type === "shift") {
    hasil.shift();
  } else if (aksi.type === "unshift") {
    hasil.unshift(aksi.payload);
  } else if (aksi.type === "insert") {
    hasil.splice(aksi.index, 0, aksi.payload);
  } else if (aksi.type === "remove") {
    hasil.splice(aksi.index, 1);
  }

  return hasil;
}
console.log(kelolaAntrian(["Ali"], { type: "push", payload: "Zaid" }));
console.log(kelolaAntrian(["Ali", "Zaid"], { type: "remove", index: 0 }));


//====================== soal ke 9
const santri = [
    {nama : 'ali', nilai : 70},
    {nama : 'fathimah', nilai : 90}
]

function kurvaNilai(santri, tambah) {
   return santri.map(item =>({
    nama : item.nama,
    nilaiBaru : item.nilai + tambah
   }))    
}
const hasiil = kurvaNilai(santri,5)
console.log(hasiil)
//====================== soal ke 10

function seleksiDanCari(arr, batas, namaDicari) {
  const lulus = arry.filter(item => item.nilai >= batas);
  const temuan = arry.find(item => item.nama === namaDicari) || null;

  return {
    lulus,
    temuan
  };
}

// Contoh penggunaan
const arry = [
  { nama: "Ali", nilai: 80 },
  { nama: "Zaid", nilai: 60 }
];

const hasil1 = seleksiDanCari(arr, 70, "Ali");
console.log("Lulus:", hasil.lulus);   
console.log("Temuan:", hasil.temuan); 

//======================= soal ke 11

function analitikNilai(...nilai) {

    let totalnilai = nilai.reduce((total, nilai) => total + nilai)
    let ratarata = totalnilai / nilai.length

    console.log(`total : ${totalnilai}`);
    console.log(`ratarata : ${ratarata}`);

    return
}

//======================== soal ke 12

function setGetDynamic(obj, key, value) {
  const objBaru = { ...obj, [key]: value };
  return {
    value: objBaru[key],
    obj: objBaru
  };
}

const hasil2 = setGetDynamic({ nama: "Ali" }, "kelas", "A");
console.log("Value:", hasil.value); 
console.log("Objek baru:", hasil.obj); 
//======================= soal 13

     function ambilDataSantri(s) {
    
      const {nama,profil:{usia,kontak : {telp}}} = s;
      return `${nama}${usia}${telp}` 
}

const s = {
      nama: "Ali",
      profil: { usia: 17, kontak : { telp: "0812" } }
      }


console.log(ambilDataSantri(s));

//========================== soal ke 14
 
const data = {
  admin: { nama: "Ali" },
  asrama: { kamar: "B12" },
  nilaiTambahan: [10, 20, 30]
};

function gabungProfilDanJumlah(admin, asrama, nilaiTambahan) {
  const gabungan = { ...admin, ...asrama };
  const totalNilai = nilaiTambahan.reduce((acc, val) => acc + val, 0);
  console.log({ ...gabungan, totalNilai });
}

gabungProfilDanJumlah(data.admin, data.asrama, data.nilaiTambahan);
//========================== soal ke 15