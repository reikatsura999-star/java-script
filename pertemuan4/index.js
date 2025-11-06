// Fungsi untuk menampilkan/menyembunyikan popup modal
function togglePopup(no) {
    document.getElementById(`popupModal${no}`).classList.toggle("hidden");
}

// Fungsi untuk membersihkan hasil output di layar
function clearOutput() {
    document.getElementById("outputBox").innerText = "";
}

// Fungsi untuk menambah garis pembatas di output
function addNewPharaghraph() {
    const random = `\n======================\n`;
    const output = document.getElementById("outputBox");
    output.innerText += `${random}`;
}



// ===== Form Kalkulator Sederhana =====
// addEventListener: menangkap event saat form disubmit
// e.preventDefault(): mencegah halaman agar gak reload saat form disubmit
document.getElementById("F1").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah form melakukan refresh halaman
    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;
    const operator = document.getElementById("operator").value;
    
    if (!firstNumber || !secondNumber || !operator) {
        console.log("Masukan Angka / Opeator");
        alert("Masukan Angka / Opeator");
    } else {
        F1(firstNumber, secondNumber, operator)
        togglePopup(1)
    }
    
});

// Deklartif
function F1(angkaPertama, angkaKedua, operator) {
    const a = Number(angkaPertama);
    const b = Number(angkaKedua);

    if (isNaN(a) || isNaN(b)  ) {
        console.log("Input harus berupa angka");
        
        return;
    }
    let result;
    switch (operator) {
        case "*":
            result = a * b;
            break;
        case "+":
            result = a + b;
            break;
        default:
            console.log("Operator tidak valid");
            return;
    }
    console.log(`result: ${result}`);
    const output = document.getElementById("outputBox");
    output.innerText += `Hasil dari ${angkaPertama} ${operator} ${angkaKedua} = ${result}\n`;
    return result;
}


// // FORM F2
document.getElementById("F2").addEventListener("submit", function (e) {
  e.preventDefault(); //

  const nama = document.getElementById("nama").value;
  const Alamat = document.getElementById("Alamat").value;

  const output = document.getElementById("outputBox");
  output.innerText += `\nNama : ${nama} \nAlamat : ${Alamat}\n`;
  F2(nama, Alamat);
  togglePopup(2);
});
// Deklartif
function F2(nama, Alamat){
   let result;
   const a = String(nama);
   const b = String(Alamat);

    if(!nama || !Alamat){
        console.log("nama dan alamat harus diisi");
    } else {
        console.log(`Nama Anda : ${a} \nAlamat Anda : ${b}`);
        return result = (`NAMA ANDA ${a} DAN ALAMAT ANDA ${b}`);        
    }
      console.log(`result : ${result}`)
    }


// FORM F3

document.getElementById("F3").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email3").value;
    const password = document.getElementById("password3").value;
    
    const output = document.getElementById("outputBox");
    output.innerText += `\nEmail : ${email} \nPassword : ${password}\n`;
    F3(email, password);
    togglePopup(3);
});
// Deklartif
function F3(email, password){
    let result;
    const a = String(email);
    const b = String(password);
    
    if(!email || !password){
        console.log("email dan password harus diisi");
    } else {
        console.log(`Email Anda : ${a} \nPassword Anda : ${b}`);
       return result = `EMAIL ANDA ${a} DAN PASSWORD ANDA ${b}`;
    }
      console.log(`F3 EMAIL : ${email} PASSWORD : ${password}`)
}

//form F4
document.getElementById("F4").addEventListener("submit", function (e) {
    e.preventDefault();
    const numberone = document.getElementById("numberone").value;
    const numbertwo = document.getElementById("numbertwo").value;
    const operator = document.getElementById("operator2").value;
    
    if (!numberone || !numbertwo || !operator) {
        console.log("Masukan Angka / Opeator");
    } else {
        f4(numberone, numbertwo, operator)
        togglePopup(4)
    }
    
});

// Deklartif
function f4(datasatu, datadua, operator) {
    const a = Number(datasatu);
    const b = Number(datadua);

    if (isNaN(a) || isNaN(b)  ) {
        console.log("Input harus berupa angka");
        console.log(typeof a);
        console.log(typeof b);

        return;
    }
    let result;
    switch (operator) {
        case "-":
            result = a - b;
            break;
        case "%":
            result = a % b;
            break;
        default:
            console.log("Operator tidak valid");
            return;
    }
    
    const output = document.getElementById("outputBox");
    output.innerText += `F4: Hasil dari ${datasatu} ${operator} ${datadua} = ${result}\n`;
    return result;
}

// FORM F5

document.getElementById("F5").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (!email || !password) {
        console.log("Masukan Email / Password");
    } else {
        const output = document.getElementById("outputBox");
        output.innerText += `\nEmail : ${email} \nPassword : ${password}\n`;
    }
    F5(email, password);
    togglePopup(5); 
})
// Deklartif
function F5(email, password){
    let result;
    const a = String(email);
    const b = String(password);
    if(!email || !password){
        console.log("email dan password harus diisi");
    } else {
        console.log(`Email Anda ${a} \nPassword Anda ${b}`);
    }
      console.log(`result : ${result}`);
        const output = document.getElementById("outputBox");
        output.innerText += `EMAIL ANDA ${a} DAN PASSWORD ANDA ${b}\n`;
        return result;
}

// form f6
document.getElementById("F6").addEventListener("submit", function (e){
    e.preventDefault();
    const namaPeserta = document.getElementById("namapeserta").value;
    const namaEvent =  document.getElementById("event").value;
    const tanggalEvent = document.getElementById("date").value;
    F6 (namaPeserta, namaEvent, tanggalEvent);
    togglePopup(6);
})
//deklartif
function F6(namaPeserta, namaEvent, tanggalEvent){
    let result;
    const a = String(namaPeserta);
    const b = String(namaEvent);
    const c = Number(tanggalEvent);
    if(!namaPeserta || !namaEvent || !tanggalEvent){
        console.log("nama peserta, nama event dan tanggal event harus diisi");
    } else {
        console.log(`Nama Peserta: ${a} \nNama Event: ${b} \nTanggal Event: ${c}`);
    }
     console.log(`result : ${result}`);
        const output = document.getElementById("outputBox");
        output.innerText += `NAMA PESERTA ${a} NAMA EVENT ${b} TANGGAL EVENT ${c}\n`;
        return result;
}

// form f7
document.getElementById("F7").addEventListener("submit", function (e) {
    e.preventDefault();
    const nama = document.getElementById("namaa").value;
    const tujuan = document.getElementById("tujuan").value;
    const tanggal = document.getElementById("tanggal").value;
    F7(nama, tujuan, tanggal);
    togglePopup(7); 
});

//deklartif
function F7(nama, tujuan, tanggal){
    if(!nama || !tujuan || !tanggal){
        console.log(`nama, tujuan dan tanggal harus diisi`);
        return;
    }
    
    const output = document.getElementById("outputBox");
    output.innerText += `NAMA PEMESAN: ${nama}\nTUJUAN: ${tujuan}\nTANGGAL: ${tanggal}\n`;
    console.log(`Nama Pemesan: ${nama}\nTujuan: ${tujuan}\nTanggal: ${tanggal}`);
}

// ===== Form Kalkulator Diskon dan Pajak =====
// Menangkap input dari form harga, diskon, dan pajak
document.getElementById("F8").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah refresh halaman
    const hargaAwal = document.getElementById("hargaAwal").value;
    const diskon = document.getElementById("diskon").value;
    const pajak = document.getElementById("pajak").value;
    F8(hargaAwal, diskon, pajak);
    togglePopup(8);
});

// Fungsi untuk menghitung harga akhir setelah diskon dan pajak
// Rumus: (Harga - (Harga × Diskon)) + Pajak
function F8(hargaAwal, diskon, pajak) {
    const harga = Number(hargaAwal);
    const disc = Number(diskon);
    const tax = Number(pajak);

    if (isNaN(harga) || isNaN(disc) || isNaN(tax)) {
        console.log("Semua input harus berupa angka");
        return;
    }

    const potonganDiskon = harga * (disc / 100);
    const hargaSetelahDiskon = harga - potonganDiskon;
    const nilaiPajak = hargaSetelahDiskon * (tax / 100);
    const hargaAkhir = hargaSetelahDiskon + nilaiPajak;

    const output = document.getElementById("outputBox");
    output.innerText += `Harga Awal: Rp${harga}\nDiskon (${disc}%): Rp${potonganDiskon}\nPajak (${tax}%): Rp${nilaiPajak}\nHarga Akhir: Rp${hargaAkhir}\n`;
    console.log(`harga setelah diskon : Rp.${hargaSetelahDiskon}\npajak : ${nilaiPajak}%\nharga akhir : Rp.${hargaAkhir}`)
}

// == Form Konversi Suhu ==
// Menangkap input suhu Celcius dan jenis konversi yang diinginkan
document.getElementById("F9").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah refresh halaman
    const celcius = document.getElementById("celcius").value;
    const konversiKe = document.getElementById("konversiKe").value;
    F9(celcius, konversiKe);
    togglePopup(9);
});

// Fungsi untuk mengkonversi suhu dari Celcius ke Fahrenheit atau Kelvin
function F9(celcius, konversiKe) {
    const suhu = Number(celcius);
    let hasil;
    let satuan;

    if (isNaN(suhu)) {
        console.log("Suhu harus berupa angka");
        return;
    }

    if (konversiKe === "fahrenheit") {
        hasil = (suhu * 9/5) + 32;
        satuan = "°F";
    } else if (konversiKe === "kelvin") {
        hasil = suhu + 273.15;
        satuan = "K";
    }

    const output = document.getElementById("outputBox");
    output.innerText += `${suhu}°C = ${hasil}${satuan}\n`;
}

// ===== Form Kalkulator BMI (Body Mass Index) =====
// Menangkap input berat badan (kg) dan tinggi badan (cm)
document.getElementById("F10").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah refresh halaman
    const berat = document.getElementById("berat").value;
    const tinggi = document.getElementById("tinggi").value;
    F10(berat, tinggi);
    togglePopup(10);
});

// Fungsi untuk menghitung BMI dan menentukan kategori berat badan
// Kategori: Kurus (<18.5), Normal (18.5-24.9), Gemuk (25-29.9), Obesitas (>30)
function F10(berat, tinggi) {
    const weight = Number(berat);
    const height = Number(tinggi) /100 // convert cm to m

    if (isNaN(weight) || isNaN(height)) {
        console.log("Berat dan tinggi harus berupa angka");
        return;
    }

    const bmi = weight / (height * height);
    let kategori;

    if (bmi < 18.5) kategori = "Kurus";
    else if (bmi < 25) kategori = "Normal";
    else if (bmi < 30) kategori = "Gemuk";
    else kategori = "Obesitas";

    const output = document.getElementById("outputBox");
    output.innerText += `BMI: ${bmi.toFixed(1)}\nKategori: ${kategori}\n`;
}

