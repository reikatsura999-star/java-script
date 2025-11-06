
// Closure - Switch - IF with Operator - Hoisting - Comparasion & Logical - Looping

// Default Notification
function togglePopup(no) {
     if (dataSantri.length == 0 && no == 2) {
        output.innerText = "ARRAY MASIH KOSONG"
    } else {
        document.getElementById(`popupModal${no}`).classList.toggle("hidden");
    }
}

// ================================================
// HELPER: executeIfTrue
// -----------------------------------------------
// Fungsi ini menerima: condition (boolean), fn (fungsi yang akan dieksekusi jika condition true),
// dan message (teks notifikasi bila condition false).
// Cara pakai singkat:
// executeIfTrue(dataSantri.length > 0, () => { /* aksi ketika true */ }, 'Array kosong - batal eksekusi');
// Jika condition true -> jalankan fn(). Jika false -> tampilkan alert dengan message.
function executeIfTrue(condition, fn, message) {
    if (condition) {
        try {
            fn();
        } catch (err) {
            console.error('Error saat mengeksekusi fungsi:', err);
            alert('Terjadi error saat mengeksekusi fungsi. Cek console.');
        }
    } else {
        // Notifikasi sederhana bila kondisi false
        alert(message || 'Kondisi tidak terpenuhi — tidak dieksekusi.');
    }
}


// ================================================
// EXAMPLE OF AN ARRAY OBJECT
// ================================================

let f1 = function () {
    return "INI F1"
}

let arr = ['String 1', 100]

arr[1] = "Edit" // Cara Edit Spesifik pada element Array

let arr2 = ['String', 10, true, f1(), arr, ["Array1", "Array2"]] // 
let arr3 = ['Fulan PIT', 'Andi', "Bambang PIT", "Asep", "Udin PIT"] // 


function f2(namaData) {
    console.log(`Oke Array "${namaData}" Akan Di Eksekusi`);
    return function (arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(`Hasil Array "${namaData}" pada Loop ke ${i + 1}`);
            console.log(`${i + 1}. ${arr[i]}`);
        }
    }
}
// f2("Data Santri")(arr3)
// f2: higher-order function. Cara pakai: f2("Label")(array)
// Digunakan juga oleh binding F2 pada halaman (hanya jika dataSantri.length > 0).


// ================================================
// FUNCTION MANIPULATION DATA TO ARRAY
// ================================================

let dataSantri = []
const output = document.getElementById('outputBox');

function deleteFisrtArray() {
    dataSantri.shift() // >>> SHIFT() (Delete Only First Element in Array)
    output.innerText = dataSantri
}
// deleteFisrtArray(): hapus elemen pertama dari dataSantri dan perbarui #outputBox (no-op jika kosong)

function deleteLastArray() {
    dataSantri.pop() // >>> POP() (Delete only Last Element in Array)
    output.innerText = dataSantri
}
// deleteLastArray(): hapus elemen terakhir dari dataSantri dan perbarui #outputBox

document.getElementById("F2").addEventListener("submit", function (e) {
    e.preventDefault();
    const index = document.getElementById("index").value;
    const newData = document.getElementById('new-data').value;

    if (!index || !newData) {
        alert("Salah satu Data Belum Ke Input");
    } else {
        edit(index, newData)
    }
});

function edit(index, newData) {
        dataSantri[index] = newData
        output.innerText = dataSantri
        togglePopup("2")
}
// edit(index, newData): set dataSantri[index] = newData, update output, dan tutup modal

document.getElementById("F1").addEventListener("submit", function (e) {
    e.preventDefault();
    togglePopup("1")

    const name = document.getElementById("name").value;
    const option = document.getElementById('option').value;

    if (!name || !option) {
        alert("Salah satu Data Belum Ke Input");
    } else {
        manipulationElementArray(name, option)
    }
});

function manipulationElementArray(data, option) {
    togglePopup('1')
    switch (option) {
        case "pop":
            dataSantri.push(data), // >>>>>> PUSH() (Add New Element in Last Index)
                output.innerText = dataSantri
            break;
        case "unshift":
            dataSantri.unshift(data), // >>>>>> UNSHIFT() (Add New Element in Fisrt Index)
                output.innerText = dataSantri
            break;
        default:
            break;
    }
    console.log(`Data "${data}" berhasil Di tambahkan dengan metode "${option}" ....`);
    console.log(dataSantri);
    togglePopup('1')
}
// manipulationElementArray(data, option): tambahkan data ke dataSantri.
// option: 'pop' = push (akhir), 'unshift' = unshift (awal). Biasanya dipanggil lewat form F1.

// ================================================
// BINDING: F2 key (demo executor)
// -----------------------------------------------
// Tekan F2 untuk menjalankan demo: jika ada data di dataSantri maka
// f2("Data Santri")(dataSantri) akan dipanggil, dan output serta console akan menunjukkan hasilnya.
// Jika array kosong -> alert notifikasi muncul.
document.addEventListener('keydown', function (e) {
    // note: e.key pada sebagian browser/OS mengembalikan 'F2' untuk tombol F2
    if (e.key === 'F2') {
        // Demo execution: only run if array not empty
        executeIfTrue(dataSantri.length > 0, function () {
            // jalankan f2 untuk menampilkan array di console
            f2("Data Santri")(dataSantri);
            // update output area juga agar pengguna melihat hasil di halaman
            output.innerText = dataSantri;
        }, 'Array kosong — tidak dieksekusi. Tambahkan data terlebih dahulu (pakai F1).');
    }
});