const inputNamaKasir = document.getElementById('namaKasir')
const pesanKasir = document.getElementById('pesanKasir')
const inputProductId = document.getElementById('productId')
const inputProductName = document.getElementById('productName')
const inputProductPrice = document.getElementById('productPrice')
const daftarProdukElemen = document.getElementById("daftarProduk");



const kasir = {
    nama : ""
}


const daftarProduk = [
    { id: "beras", nama: "Beras 1kg", harga: 15000 },
    { id: "teh", nama: "Teh ", harga: 8000 },
];


function togglePopup(no) {
    document.getElementById(`popupModal${no}`).classList.toggle("hidden");
}


function simpanKasir(){
    const nama = inputNamaKasir.value.trim();
    if (nama === ''){
        pesanKasir.innerText = 'input nama belum masuk'
        return;
    }
    kasir.nama = nama;
    pesanKasir.innerText = 'assalamulaikum ' + nama + ' 👌' + ' selamat datang'
}
function addProduct(){
    const id = inputProductId.value.trim();
    const name = inputProductName.value.trim();
    const harga = parseInt(inputProductPrice.value.trim());

    if (!id || !name || isNaN(harga) || harga <= 0 ){
        alert('Masukkan ID, nama, dan harga produk dengan benar');
        return;
    }

    // Cek duplikasi ID
    const sudahAda = daftarProduk.some(produk => produk.id === id);
    if (sudahAda) {
        alert("ID produk sudah ada. Gunakan ID lain.");
        return;
    }

    daftarProduk.unshift({ id, nama: name, harga });
    tampilkanProduk();
    togglePopup('1');

    // Kosongkan input
    inputProductId.value = "";
    inputProductName.value = "";
    inputProductPrice.value = "";
}