// Buat fungsi `getProduct` yang mengembalikan data produk setelah 2 detik (gunakan `setTimeout`). Gunakan `async/await` untuk menampilkan datanya.

function getProduk(){
    return new Promise((resolve) => {
       setTimeout(() => {
        const produk = {
            id : 1,
            nama : "kopi",
            jenis : "arabika",
            stok : 20 
        }
        resolve(produk)
       },3000); 
    })
}

async function showProduk(){
    console.log("data sedang di ambil...");
    const ambil = await getProduk();
    console.log("data di terima");
    
    console.table(ambil);
    
    
}
showProduk()


//Buat simulasi error dalam `fetch()` dengan URL salah, lalu tangani error-nya dengan `try...catch`.

async function simulasi(){
 try {
     const response = await fetch("ttps://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")

     
     if (!response.ok) {
         throw new Error("gagal mengambil data dari API");
        }
        
        const data = await response.json()
        console.log("info cuaca jogja saat ini");
        console.log("suhu",data.current.temperature_2m + " celciuc");
        console.log("kecepatan angin",data.current.wind_speed_10m + " km/jam");
        
    } catch (error) {
        console.log("terjadi kesalahan",error.message);
        
    }
}
simulasi()



