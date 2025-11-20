//no.1 menampilkan nama dan umur,simpan ke lokal ("user_1")

async function getUser() {
  try {
    const res = await fetch("https://dummyjson.com/users/1");//ngambil data api
    const data = await res.json();//mengubah/parse data json ke objek
    console.log(data.firstName);
    console.log(data.age);

    localStorage.setItem("user_1",JSON.stringify(data))
  } catch(error) {
    console.error("Gagal mengambil data:", error);
  }
}
getUser();

//no.2 simpan kesalahan "last_error" ke penyimpanan lokal dan buat peringatan sederhana berisi pesan eror

async function loadErrorExample() {
  try {
    const res = await fetch("https://dummyjson.com/halaman-yang-tidak-ada");

    if (!res.ok) {
      throw new Error("Halaman tidak ditemukan (404)");//tambahkan ok jika mau cek isi res
    }

    const data = await res.json();
  } catch (error) {
    console.error("data error",error.message);
    localStorage.setItem("last_error",JSON.stringify(error.message))
  }
}

// no.3 tampilkan produk yg harga nya > 100 dan simpan ke console

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products"); 
  const { products } = await res.json();
  console.log(products.map(p => p.title));
  const filter = products.filter(p => p.price > 100)
  console.table(filter)
  

}

getProducts() //...

// no.4 Tambahkan kemungkinan gagal (reject),Tangani kesalahan dengan try/catch.

function loadData(callback) {
  setTimeout(() => callback("Data siap"), 1000);
}
function loadDataPromise(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data === true) {
        resolve("data benar");
      } else {
        reject("data tidak valid");
      }
    }, 1000);
  });
}

async function run() {
  try {
    const hasil = await loadDataPromise(true); // pastikan ini TRUE
    console.log("✅", hasil);
  } catch (error) {
    console.error("❌ data error:", error.message);
  }
}

run();
//no.5 Buat 3 langkah berurutan (delay 500, 1500, 2000 ms),Simpan waktu selesai ke Penyimpanan lokal.

function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function runStep() {
  console.log("Mulai");

  await delay(500);
  console.log("Selesai 0,5 detik");
 
  await delay(1000)
  console.log("selesai 1 detik");
  
  await delay(1500)
  console.log("selesai 1,5 detik");
  
  await delay(2000)
  console.log("selesai 2 detik");

  await delay(3000)
  console.log("selesai 3 detik");
  
  console.log("mision complate");
  localStorage.setItem("selesai",JSON.stringify("mision complate"))
}

runStep()

//no.6 Ambil kembali keranjang dari localStorage dan tampilkan,Hitung total harga barang 

async function loadCart() {
  const res = await fetch("https://dummyjson.com/carts/1");
  const cart = await res.json();
  localStorage.setItem("cart", JSON.stringify(cart));

  const ambil = localStorage.getItem("cart")
  const pers = JSON.parse(ambil)
  console.log(pers);
  
  
  const totalHarga = pers.products.reduce((total,produk)=>{
    return total +  produk.price
  },0)

  console.log(Math.round(totalHarga));
  
  
}

loadCart()

//no.7 Jika error → simpan ke "error_name",Jika sukses → tambahkan stempel waktu.

async function saveName(name) {
  try {
    if (name.length < 3) throw new Error("Nama terlalu pendek");
    localStorage.setItem("username", name);
    console.log("Nama disimpan");

    const waktu = new Date().toISOString();//menunjukan waktu
    localStorage.setItem("waktu",JSON.stringify(waktu))
    console.log(waktu);
    

  } catch(err) {
    console.log("data tidak valid:",err.message);
    localStorage.setItem("error_name",JSON.stringify(err.message))
    
  }
}

saveName()

//no.8 Simpan daftar produk mahal ke LocalStorage,Urutkan berdasarkan harga (menurun)

async function getExpensive() {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();
  const expensive = products.filter(p => p.price > 300);
  localStorage.setItem("barang_mahal",JSON.stringify(expensive))

  const urutanProduk = products.sort((a,b)=> a.price - b.price)//mengurutkan terkecil -terbesar
  urutanProduk.forEach(produk => {
    console.log(`${produk.price}`);
    
  });
 

}
getExpensive()

//no.9 Tambahkan bidang “keterampilan”,Simpan respons API ke Penyimpanan lokal.

async function createUser() {
  try {
    const res = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Santri", age: 20 ,keterampilan : "ngoding"})
    });
    const extrak = await res.json()
    localStorage.setItem("response",JSON.stringify(extrak))
    console.log(extrak);
  } catch(error) {
    console.log("Gagal:", error);
  }
}

//no.10 Tambahkan validasi: jika nama kosong → throw error,Simpan data hasil pembaruan ke Penyimpanan Lokal.

async function updateUser() {
 try {
   const res = await fetch("https://dummyjson.com/users/1", {
    method: "PUT",
    body: JSON.stringify({ name: "Nama Baru" })
  });
  if(!res.ok){
    throw new Error("data tidak di temukan error(404)");
  }

  const data = (await res.json());
  console.log(data);
  localStorage.setItem("simpanPembaruan",JSON.stringify(data))
  
} catch (error) {
  console.error("data error:",error.message);
  
}
}