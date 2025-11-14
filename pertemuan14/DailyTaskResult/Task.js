let myBio = {nama : "ikhya",umur : 17,alamat : "Banjarnegara"}

let jsonMyBio = JSON.stringify(myBio)
                     //id      //data yg dirubah jadi json
localStorage.setItem("myBio",jsonMyBio)//set item = menaruh dat di dalam penyimpanan 

let ambilData = localStorage.getItem("myBio")// get item = mengambil data dari penyimpanan
console.log(ambilData);
//=============================================== 
fetch("https://jsonplaceholder.typicode.com/users") // fetch untuk menjalankan kode
  .then(response => response.json()) //mengubah repon jadi format json
  .then(data => {             //menampilkan data ke console
    console.log("Data pengguna dari API:");
    console.log(data);
  })
  .catch(error => {           //catch untuk menapilkan pesan eror jika eror
    console.error("Terjadi kesalahan saat mengambil data:", error);
  });

