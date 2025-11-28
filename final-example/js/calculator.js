const authBox   = document.getElementById("authBox");
const calcBox   = document.getElementById("calcBox");

const display = document.getElementById("display");
const result  = document.getElementById("result");

const btnEq     = document.getElementById("btnEq");
const btnClear  = document.getElementById("btnClear");
const btnLogout = document.getElementById("btnLogout");

// kalkulator biasa
let expression = "";

export function setupCalculator() {
  // tombol angka/operator
  document.querySelectorAll(".grid button").forEach(btn => {
    if (btn.id !== "btnEq") {
      btn.addEventListener("click", () => {
        expression += btn.innerText;
        display.innerText = expression;
      });
    }
  });

  btnEq.addEventListener("click", async (e) => {
  e.preventDefault();
  if (!expression) return;

  try {
    // tampilkan pesan tunggu 
    result.innerText = "Tunggu 1 detik...";

    setTimeout(async () => { //buat agar hasil muncul dalam 2 detik
      try {
        const res = await fetch(`https://api.mathjs.org/v4/?expr=${encodeURIComponent(expression)}`);
        const data = await res.text();

        result.innerText = `Hasil: ${data}`;
        expression = data;
        display.innerText = expression;
      } catch {
        result.innerText = "Error!";
      }
    }, 1000); // 1000 ms = 1 detik
  } catch {
    result.innerText = "Error!";
  }
});

  // tombol clear
  btnClear.addEventListener("click", (e) => {
    e.preventDefault()
    expression = "";
    display.innerText = "";
    result.innerText = "";
  });

  // tombol logout
  btnLogout.addEventListener("click", (e) => {
    e.preventDefault
    
    if (confirm("Anda yakin ingin logout?")) {
      calcBox.classList.add("hidden");
      authBox.classList.remove("hidden");
      expression = "";
      display.innerText = "";
      result.innerText = "";
    }
  });
}