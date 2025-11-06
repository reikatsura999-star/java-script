function sayhello(){
 let nama = prompt('siapa nama mu')
 console.log("si " + nama + " telah mengisi nama")
 confirm("oh nama mu " + nama)
}



/*
"Contoh Deklarasi Tipe Data di JavaScript"

// String
let namaVar0   = "Ini Value String";
let namaVar1  = 'String';
ini adalah type data berbentuk teks

// Number / Integer
let namaVar2  = 100;
ini adalah type type dat berbentuk angka bisa bulat (integer)/desimal(float)

// Boolean
let namaVar3  = true;
let namaVar4  = false;
boolean hanya punya dua nilai benar dan salah

// Null
let namaVar5  = null;
// variable kosong

// Undefined
let namaVar6  = undefined;
let namaVar7; 
di dalam nya ada ada variable tapi belum ada nilai



let nama = "nama"

function namaFunction() {
    console.log("Si "+ nama + " Telah ngisi nama");
    confirm("Oh kamu namanya adalah "+ nama +" kah?")
    namaF2()
}


function namaF2(){
    console.log("Ini Function 2 Berjalan");
}
// function namaFunction memangil variable f2 dengan menyebut nama variable di akhir eksekusi 

// 3 OPSI 
// LET - VAR - CONST

let alamat = prompt("Masukan Alamat Anda");



operator aritmatika

function add(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) + Number(b)
    console.log("Hasil dari "+ a +"+"+ b +" Adalah " + result);
}
fungsi function add adalah untuk menghitung penambahan

function minus(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) - Number(b)
    console.log("Hasil dari "+ a +"-"+ b +" Adalah " + result);
}
fungsi function minus adalah untuk menghitung pengurangan

function multiply(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) * Number(b)
    console.log("Hasil dari "+ a +"x"+ b +" Adalah " + result);
}
fungsi function multyply adalah untuk menghitung perkalian

function devide(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) / Number(b)
    console.log("Hasil dari "+ a +"/"+ b +" Adalah " + result);
}
fungsi function devide adalah untuk menghitung pembagian

function modulus(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) % Number(b)
    console.log("Sisa Bagi dari "+ a +" Di Bagi "+ b +" Sisanya " + result);
}
fungsi function modulus adalah untuk menghitung (sisa) pembagian

function exponen(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) ** Number(b)
    console.log("Hasil dari "+ a +" Pangkat "+ b +" Adalah " + result);
}
fungsi function eksponen adalah untuk menghitung pengkat

let a = 90;
let b = a;
let c = b + a;
let d = a + b * c ;

var e = "Halo ";
const f = "Nama ";
let g = "Saya ";
let h = "Bambang ";
//contoh logika aritmatika

// OPERATOR COMPARISON FOR >> GREATER THAN (>)
console.log(5 > 5);    // false → 5 tidak lebih besar dari 5
console.log(6 > 5);    // true  → 6 lebih besar dari 5
console.log(6 > 90);   // false → 6 tidak lebih besar dari 90
console.log(5 >= 5);   // true  → 5 lebih besar atau sama dengan 5

// OPERATOR COMPARISON FOR >> LESS THAN (<)
console.log(5 < 5);    // false → 5 tidak lebih kecil dari 5
console.log(5 <= 5);   // true  → 5 lebih kecil atau sama dengan 5

// OPERATOR COMPARISON FOR >> EQUAL TO (==)
console.log(5 == 5);   // true  → nilai sama
console.log(5 == '5'); // true  → nilai sama walau tipe beda
console.log(5 == 6);   // false → nilai beda

// OPERATOR COMPARISON FOR >> NOT EQUAL TO (!=)
console.log(5 != 5);   // false → nilai sama
console.log(5 != '5'); // false → dianggap sama
console.log(5 != 6);   // true  → nilai beda

// STRICT COMPARISON FOR >> EQUAL (===) AND NOT EQUAL (!==)
console.log(5 === '5'); // false → beda tipe (number vs string)
console.log(5 !== '5'); // true  → nilai sama tapi tipe beda
console.log(5 !== 5);   // false → nilai dan tipe sama


// (&&) // jawaban benar jika dua dua nya true

// && hanya true apabila kondisi sama sama true 
// console.log(true && true); // TRUE
// console.log(5 > 4 && 9 < 10 )
// console.log(false && true); // FALSE
// console.log(12 != 12 && "45" !== 45);
// console.log(true && false); // FALSE

// (||) // BISA TRUE APABILA SALAH SATU KONDISI TRUE 

// console.log(true || false); // TRUE
// console.log(false || true); // TRUE
// console.log(false || false); // FALSE
// console.log(true || true); // TRUE

// (!) BISA MEMBALIKAN FAKTA

 if(data != "PIT") {
       console.log("Anda Bukan Santri");
       console.log(data != "PIT");
    } else {
        console.log("Oke Santri");
        console.log(data != "PIT");
    }
  jadi ketika ada tanda != maka data true akan di konversikan menjadi false. jadi ketika 
  data true akan masuk ke false begitu juga sebaliknya.
  */      
