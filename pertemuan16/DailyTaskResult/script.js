function register(){
    return new Promise((resolve,reject)=>{
       let user = a ={nama: "ya",age : 23}

       if(user == "ya"){
        resolve("data mu kami simpan")
        console.log(`hallo ${user.nama} selamat datang kembali👏`);
        
       }else{
        reject("data tidak valid")
        console.log("mohon periksa kembali input yg di masukan");
        
       }
    })
}

register()
.then((pengguna)=>{
    console.log('berhasil:',pengguna);
})
.catch((eror)=>{
    console.error("eror",eror);
    
})


//==================================================================

function ambilProduk() {
  return new Promise((resolve) => {
    console.log("data di ambil dalam 1 detik");
    setTimeout(() => resolve(100000), 1000); // Harga produk: Rp100.000
  });
}

function hitungTotal(harga) {
  return new Promise((resolve) => {
    console.log("mulai menghitung data...");
    setTimeout(() => resolve(harga + 10000), 1000); // Tambah ongkir Rp10.000
  });
}

ambilProduk()
  .then(hitungTotal)
  .then((total) => {
    console.log("Total Belanja:", total);
  });