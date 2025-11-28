const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPassword = document.getElementById("confirm")
const regNameInput  = document.getElementById("regName");
const regPasswordInput = document.getElementById("regPassword");

const loginMsg = document.getElementById("loginMsg");
const regMsg   = document.getElementById("regMsg");

const loginTab    = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const authBox = document.getElementById("authBox")
const calcBox = document.getElementById("calcBox")



export function setupAuth() {
loginTab.addEventListener("click", () => {
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");

  loginTab.parentElement.classList.add("hidden");   // sembunyikan tombol Login
  registerTab.parentElement.classList.remove("hidden"); // tampilkan tombol Register
});

registerTab.addEventListener("click", () => {
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");

  registerTab.parentElement.classList.add("hidden"); // sembunyikan tombol Register
  loginTab.parentElement.classList.remove("hidden"); // tampilkan tombol Login
});
  // Register form
  registerForm.addEventListener("submit", function(e)  {
    e.preventDefault();

    const name = regNameInput.value.trim();
    const pass = regPasswordInput.value.trim();
    const confirm = confirmPassword.value.trim();
    console.log(`name: ${name}`);
    console.log(`pass: ${pass}`);
    
    
    
    

    // Validasi
    if (!name || !pass || !confirm) {
      regMsg.innerText = "Semua field harus diisi!";
      return;
    }
    if (pass.length < 6) {
      regMsg.innerText = "Password minimal 6 karakter!";
      return;
    }
    if (pass !== confirm) {
      regMsg.innerText = "Konfirmasi password tidak cocok!";
      return;
    }

    // Simpan ke localStorage
    localStorage.setItem("user", name);
    localStorage.setItem("pass", pass);

    regMsg.innerText = "Register berhasil!";
    registerForm.reset();
  });

 

  // Login form
  loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    const storedUser = localStorage.getItem("user");
    const storedPass = localStorage.getItem("pass");

    if (!username || !password) {
      loginMsg.innerText = "Username dan password harus diisi!";
      return;
    }

    if (username === storedUser && password === storedPass) {
      authBox.classList.add("hidden");
      calcBox.classList.remove("hidden");
      loginMsg.innerText = "";
      loginForm.reset();
    } else {
      loginMsg.innerText = "Login gagal! Username atau password salah.";
    }
  });
}