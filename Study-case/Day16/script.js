//============================================================ no.1
function loadUserProfile(username) {
  console.log("⏳ Status: PENDING... mengambil data user...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!username) {
         reject("Username tidak boleh kosong!");
      } else {
        resolve({
          username,
          name: "Santri Programmer",
          level: "Beginner"
        });
    }
}, 2000);
});
}

console.log("sebelum peluncuran");

loadUserProfile("ghifari")
.then((user) => {
    console.log("✅ Status: SUCCESS");
    console.log("Data user:", user);
    localStorage.setItem("lastUser",JSON.stringify(user.username))
  })
  .catch((err) => {
    console.log("❌ Status: REJECT");
    console.error("Error:", err);
  });

console.log("setelah peluncuran");
  

//================================================================= no.2

function checkConnection() {
  console.log("🔍 Mengecek koneksi... (PENDING)");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isOnline = Math.random() > 0.3; // 70% online
      if (isOnline) {
        resolve("Koneksi stabil. ✅");
      } else {
        reject("Tidak ada koneksi internet. ❌");
      }
    }, 1000);
  });
}

checkConnection()
  .then((message) => {
    console.log("SUCCESS:", message);
    localStorage.setItem("connection_status",JSON.stringify(isOnline))//❌
  })
  .catch((error) => {
    console.log("REJECT:", error);
  });

//belum di kerjakan



//================================================================= no.3

function getSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        theme: "dark",
        language: "id",
        notifications: true
      });
    }, 500);
  });
}

getSettings()
  .then((settings) => {
    console.log("Object settings:", settings);
    return JSON.stringify(settings);
  })
  .then((settingsJSON) => {
    console.log("Settings dalam JSON:", settingsJSON);
  });

//belum di kerjakan



//================================================================= no.4

function simulateLogin(isSuccess){
    if(isSuccess == true){
        return Promise.resolve({ status: "ok", token: "ABC123" })
    } else{
        return Promise.reject("login gagal")
    }
}

simulateLogin(true)
.then((result)=>{
    console.log('hasil',result);
    localStorage.setItem("token",JSON.stringify(result.token))
})
.catch((eror)=>{
    console.log("Reject",eror);
    
})


//================================================================= no.5

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Delay ${ms} ms selesai`);// di lanjutkan ke .then dan param di ganti dengan nama msg
    }, ms);
  });
}

const steps = [] // array buat nyimpen data step dari steps push

delay(1000)
.then((msg)=>{
  console.log("step 1 selesai");
  steps.push("step 1 selesai")
  console.log(msg);
  return delay(1000)
})
.then((msg)=>{
  console.log("step 2 selesai");
  console.log(msg);
  steps.push("step 2 selesai")
  return delay(500)
})
.then((msg)=>{
  console.log("step 3 selesai");
  console.log(msg);
  steps.push("step 3 selesai")

  localStorage.setItem("stepslog",JSON.stringify(steps))//isi array di simpan di sini (lokal penyimpanan)
  console.log(steps);
})

//================================================================= no.6

function loadCart() {
  return new Promise((resolve) => {
    const cart = [
      { name: "Keyboard", price: 150000 },
      { name: "Mouse", price: 50000 },
    ];
    setTimeout(() => resolve(cart), 800);
  });
}

loadCart()
  .then((cart) => {
    console.log("Cart:", cart);
    let total = 0;
    cart.forEach((item) => (total += item.price));
    localStorage.setItem("cart-data",JSON.stringify(cart))
    return total;
  })
  .then((total) => {
    console.log("Total harga:", total);
  });

function loadCartFromLocal(){
  return new Promise((resolve,reject)=>{
    const ekstrak = localStorage.getItem("cart-data")

    if(!ekstrak){
      reject("tidak ada data di dalam lokal storage")
      return;
    }

    try {
      const cart = JSON.parse(ekstrak)//mengekstrak dari variable ekstrak
      let total = 0
      cart.forEach((item)=> total += item.price)
      resolve({cart,total})
    } catch (error) {
      reject("data tidak valid")
    }
  })
}

//=============================================================== no.7
