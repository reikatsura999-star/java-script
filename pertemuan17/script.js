// //======================================================= async and await
// function delay2(ms){
//     return new Promise(resolve => setTimeout(resolve,ms))
// }

// async function tampilkanPesan(){
//    console.log("pesan akan muncul...");
//     await delay2(1000)
//    console.log("pesan berhasil di munculkan");
   
// }

// tampilkanPesan()


// //======================================================== try catch
// function delay(ms){
//     return new Promise(resolve => setTimeout(resolve,ms))
// }

// async function prosesPesanan(nama){
//  try {
//     if(!nama){
//         throw new Error("nama harus di isi");  
//     }
//     await delay(2000)
//     console.log("pesanan makanan di terima dari",nama);
   
//     await delay(1000)
//     console.log("pesanan mu sedang di masak...");
   
//     await delay(2000)
//     console.log("mohon di tunggu,makanan akan di antar");
    
//     await delay(2000)
//     console.log("pesanan di terima oleh",nama);
    
//     await delay(3000)
//     console.log(nama,"telah menyelesaikan transaksi");
    

//  } catch (error) {
//    console.log("eror",error.message); 
//  }
// }

// prosesPesanan("your")

// //========================================================


async function getSemuaSurat() {
  try {
    const response = await fetch("https://api.myquran.com/v2/quran/surat/semua")
    const SemuaSurat = await response.json()

    // Tampilkan di elemen HTML
    document.getElementById('id1').innerHTML = `<h1>Audio URL: ${SemuaSurat.data[0].audio_url}</h1>`

    // Log ke console
    console.log("Audio URL dari API:", SemuaSurat.data[0].audio_url)

    return SemuaSurat.data[0].audio_url
  } catch (e) {
    document.getElementById('id1').innerHTML = `<p>Ini Custom Info dari Hasil Error: ${e.message}</p>`
    console.error("Terjadi error saat fetch:", e)
  }
}

// Panggil fungsi
getSemuaSurat()