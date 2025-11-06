//global scope & block scope
let nama = "yanto";
let umur = 35;

function profile() {
  console.log(`nama kamu ${nama} dan umur kamu ${umur}`);
}

profile();

function cekhost() {
  console.log(a);

  let a = "agus";
  const b = "yanto";
  var c = 23;
  
  console.log(a); //
}

function dompetSaya() {
  let saldo = 0;

  function buatSaldo(jumlah) {
    saldo += jumlah;
    console.log(`saldo sekarang Rp${saldo}`);
  }

  return buatSaldo;
}

const dompetYA = dompetSaya(); // Fixed function name

dompetYA(1000);
dompetYA(3000);
dompetYA(10000);

function pencatatanPengeluaran() {
  let total = 0;

  return {
    tambah: function (jumlah) {
      total += jumlah;
      console.log(`tambah Rp${jumlah}, total Rp${total}`);  
    },
    lihatTotal: function () {
      console.log(`total pengeluaran Rp${total}`); space
    },
  };
}

const catatan = pencatatanPengeluaran(); 

catatan.tambah(10000); 
catatan.tambah(50000); 
catatan.lihatTotal();
