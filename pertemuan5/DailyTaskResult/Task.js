const cekUmur = function(umur) {
  if (umur >= 18) {
    return "Kamu boleh mendaftar.";
  } else {
    return "Maaf, umur kamu belum cukup.";
  }
};

// Safe output helper: logs to console and, when running in a browser,
// also appends the message to the #output element so you can see it on the page.
const outputEl = (typeof document !== 'undefined') ? document.getElementById('output') : null;

function show(msg) {
  console.log(msg);
  if (outputEl) {
    const p = document.createElement('p');
    p.textContent = msg;
    outputEl.appendChild(p);
  }
}

show(cekUmur(20)); // Output: Kamu boleh mendaftar.
show(cekUmur(15)); // Output: Maaf, umur kamu belum cukup.



//function memasukan nama
function say() {
    let nama = prompt("masukan nama lengkap anda dgn sesuai");
    if (!nama) {
        console.log("pengguna belum memasukan nama");
        alert("mohon masukan nama anda terlebih dahulu");
    } else {
        console.log("nama pengguna telah terdaftar");
        alert("selamat nama anda telah terdaftar");
    }
}







