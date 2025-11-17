function prosesData(nama, callback) {
    return callback(`nama : ${nama}`)

}

function penerima(data) {
    console.log(data);
    console.log("nama akan muncul dalam 2 detik");
    setTimeout(function() {  //bisa juga pakai arrow fn di tambah =>
        console.log("agus");
    }, 2000)
}
     
prosesData("yanto", penerima)

//==== 

function angka(value,callback) {
   value.forEach((e,i) =>{
    console.log(`index ${i+1} : ${e+1}`);
   })
   callback(value)
}

function panggilan(data){
 console.log("selesai mencetak");
 
}

angka([1,2,3,4,5,],panggilan)


//========================================================

function simpndataUser(nama,callback){
  console.log(`proses menyimpan data :${nama} `);

  setTimeout(function(){
    console.log(`selamat datang ${nama}`);
    
  },2000)

  callback(nama)
}

function notif(data){
  console.log("ucapan selamat akan muncul dalam 2 detik");
  
}

simpndataUser("boim",notif)