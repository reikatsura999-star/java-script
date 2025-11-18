//===============================================================

function janjiAktivitas() {
    return new Promise((resolve, reject) => {
        let janji = true

        setTimeout(() => {
            if (janji) {
                resolve("📖belajar javascript")
            } else {
                reject("😪tertidur ketika belajar")
            }
        },900)
       
    })
}

janjiAktivitas()
.then((jadi)=>{
    console.log("belajar selseai");  
})
.catch((gagal)=>{
    console.log("😪sory ketiduran");
    
})


// //=============================================================

function cekKoneksi(){
    return new Promise((resolve,reject)=>{
        let koneksi = false

        if (koneksi) {
            resolve("koneksi tersambung")
        } else{
            reject("koneksi terputus")
        } 
        
    })
    
}

cekKoneksi()
.then((berhasil)=>{
    console.log("✅ good job bro");
    console.log("💬:",berhasil);
    
})
.catch((eror)=>{
    console.error("❌sabar ya bro");
    console.log("💬",eror);
    
})

  //=============================================================

  function pesanShopee(kata,durasi){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(`${kata} ✅`),durasi)
    })
  }

pesanShopee("pesan barang",1000)
.then((pes)=>{
    console.log(pes);
    return pesanShopee("barang di kemas",1000); 
}) 
.then((pes)=>{
    console.log(pes);
    return pesanShopee("baranag di kirim",1500);
}) 
.then((pes)=>{
    console.log(pes);
    return pesanShopee("barang di terima",500);
})
.then((pes)=>{
    console.log(pes);
    return pesanShopee("pembeli membayar",1000);
})
.then((pes)=>{
    console.log(pes);
    return pesanShopee("kurir senang",1000)
})
.then((pes)=>{
    console.log(pes);
    console.log("misi berhasil✅")
})

.catch((eror)=>{
    console.log("❌terjadi eror",eror);
})

//=========================================================================

function unduh() {
    return new Promise((resolve, reject) => {
        console.log("data sedang di unduh");

        let bangun = true
        
        setTimeout(()=>{
         if (bangun) {
            resolve("wait")
        } else {
            reject("❌ gagal bangun")
        }
        },3000)
     
    })

}
