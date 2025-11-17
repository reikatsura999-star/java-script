
function undangTeman(nama, teman, bolehUndang,bye) {
  console.log(`Halo ${nama}`);
  
  if (bolehUndang == true) {
    teman(); 
  } else {
    console.log("Maaf, belum bisa undang sekarang.");
  }

  bye()
}


function undangan() {
  console.log("Ayo datang ke pestaku!");
}

function terimakasih(){
  console.log('terima kasih telah berkunjung');
    
}

undangTeman("Ikhya", undangan, true,terimakasih); 

//===================================================================

function bio(nama,rumah,usia){
  let r = rumah("rumah ku di jogja")//data rumah di simpan dalam variable r
  let u = usia('usia ku 23 tahun')
  return (`nama ku ${nama} ${r} ${u}`)//di retrun supaya ada hasilnya
}



function alamat(param){
    return param
}
// function alamat me retrun param yg di ambil dari param rumah


function umur (param){
    return param
}

bio('lery',alamat,umur)
// lerry sebagai argumen nama di function bio

console.log(bio('lery',alamat,umur));// untuk menampilakan hasilnya consol


