// Function untuk cek umur (menggunakan parameter karena prompt() tidak tersedia di Node.js)
function cekUmur(age){
    if (age <= 13){
        console.log("anda anak-anak")
    }else if (age > 13 && age < 20){
        console.log("anda remaja")
    }else if(age >= 40 && age < 60){
        console.log("anda dewasa");
    }else{
        console.log("anda lansia");
    }
}

// Memanggil fungsi cekUmur dengan contoh umur
console.log("Test fungsi umur:");
cekUmur(12); // Tes untuk anak-anak
cekUmur(15); // Tes untuk remaja
cekUmur(45); // Tes untuk dewasa
cekUmur(65); // Tes untuk lansia

// Loop wave
console.log("\nTest loop wave:");
for (let wave = 1; wave <= 5; wave++){
    console.log("wave ke-" + wave);
}

// Function untuk cek hari
function hari(hari){
    switch (hari) {
        case "1":
            console.log("hari senin");
            break;
        case "2":
            console.log("hari selasa");    
            break;
        case "3":  
            console.log("hari rabu");
            break;     
        case "4":
            console.log("hari kamis");
            break;
        case "5":
            console.log("hari jumat");
            break;
        case "6":
            console.log("hari sabtu");    
            break;
        case "7":
            console.log("hari minggu");    
            break;
        default:
            console.log("hari tidak valid");
    }
}

// Test fungsi hari
console.log("\nTest fungsi hari:");
hari("1"); // Tes untuk hari senin
hari("5"); // Tes untuk hari jumat