const inputNamaKasir = document.getElementById('namaKasir')
const pesanKasir = document.getElementById('pesanKasir')
const inputProductId = document.getElementById('productId')
const inputProductName = document.getElementById('productName')
const inputProductPrice = document.getElementById('productPrice')
const daftarProdukElemen = document.getElementById("daftarProduk");



const kasir = {
    nama : ""
}


function simpanKasir(){
    const nama = inputNamaKasir.value.trim();
    if (nama === ''){
        pesanKasir.innerText = 'input nama belum masuk'
        return;
    }
        kasir.nama = nama    
        pesanKasir.innerText = 'assalamulaikum ' + kasir.nama + ' 👌' + ' selamat datang'
}

