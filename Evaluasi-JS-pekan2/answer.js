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
    let nilai = 90
     
    if(nilai >= 90){
       console.log('A untuk nilai 90-100')
    }else if(nilai >= 80){
        console.log('B untuk nilai 80-89')
    }else if(nilai >= 70){
        console.log('C untuk nilai 70-89');
    }else if(nilai >= 60){
        console.log('D untuk nilai 60-69');
    }else{
        console.log('E untuk nilai 1-59');  
    }
        
}

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
let arr = [1,2,3,4,5,6]

if(arr % 2 == 0){
    return
}

let gabunagnGenap = arr.reduce((acc,val)=> acc + val,0)
console.log(gabunagnGenap);
//====================== soal ke 5




//====================== soal ke 6

let luaspersegiPp = luasPersegiPanjang(2,4)

function luasPersegiPanjang(p,l) {
    return p * l
}
console.log(luaspersegiPp);

let luaspersegi = luasPersegi(2,2)

const luasPersegi = function(s) {
 return p * l
};
console.log(luasPersegi);

//====================== soal ke 7

//====================== soal ke 8

//====================== soal ke 9
let santri = [ { nama: "Ali", nilai: 70 }, { nama: "Fatimah", nilai: 90 } ]

function kurvaNilai(santri, tambah) {
    

    let nilaiBaru = santri.map(santri => ({...santri,nilai : nilai.santri + 5}))
    console.log(kurvaNilai)
}
//====================== soal ke 10


  


//======================= soal ke 11

function analitikNilai(...nilai) {

    let totalnilai = nilai.reduce((total, nilai) => total + nilai)
    let ratarata = totalnilai / nilai.length

    console.log(`total : ${totalnilai}`);
    console.log(`ratarata : ${ratarata}`);

    return
}

//======================== soal ke 12

let angka = analitikNilai(80, 90, 70, 100)

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
 
let = [
    {admin: { nama: "Ali" }},
    { asrama: { kamar: "B12" }},
    { nilaiTambahan: [10, 20, 30]}
]

function gabungProfilDanJumlah(admin, asrama, ...nilaiTambahan) {
  let gabunagn = {...admin,...asrama}
  let nilaiTambahan = nilaiTambahan.reduce((acc,val)=> acc + val.nilaiTambahan)
  console.log(nilaiTambahan);
  

}



//========================== soal ke 15