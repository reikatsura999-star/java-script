const tagDiv = document.getElementById('app');
const inputNama = document.getElementById('input-nama');
const tagButton1 = document.getElementById("btn-submit");
const tagMessage1 = document.getElementById("msg-name");
const VisitUser = document.getElementById("visit_User");
const inputEmail = document.getElementById("input-email");
const tagMessageEmail = document.getElementById("msg-email");

const database = [];

function resetInput(namaInput) {
  return namaInput.value = "";
}

function displayMessage(namaId, message, color) {
  namaId.textContent = message;
  namaId.style.color = color;
}

function displayName() {
  const users = load("users") ?? [];
  tagDiv.innerHTML = "";
  users.forEach(user => {
    const p = document.createElement("p");
    p.textContent = `Nama: ${user.nama}`;
    tagDiv.appendChild(p);
  });
}

const getDateStr = () => new Date().toLocaleDateString("id-ID", { day: "2-digit", month: '2-digit', year: 'numeric' });
const getTimeStr = () => new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });

function toggleThema() {
  const now = load("thema") ?? "light";
  const newthema = now === "light" ? "dark" : "light";
  save("thema", newthema);
  applyThema();
}

function applyThema() {
  const thema = load("thema");
 if (thema === "dark") {
  document.body.style.background = "#333";
  document.body.style.color = "#eee"
 }else{
   document.body.style.background = "#fff";
  document.body.style.color = "#000"
 }
}

function visit() {
  let count = load("visit_count") ?? 0;
  count++;
  save("visit_count", count);
  renderVisit();
}

function renderVisit() {
  VisitUser.innerHTML = `<p>Jumlah kunjungan: <b>${load("visit_count")}</b></p>`;
}

function saveToDb(k, v) {
  let obj = {
    [k]: v
  };
  database.unshift(obj);
}

function saveObjToDb(obj) {
  try {
    if (typeof obj !== "object" || obj === null) {
      throw new TypeError("Data yang diberikan harus berupa objek yang valid.");
    }
    database.unshift(obj);
  } catch (error) {
    console.error("Gagal menyimpan objek ke database:", error.message);
  }
  return database;
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function load(key) {
  return JSON.parse(localStorage.getItem(key));
}

function remove(key) {
  localStorage.removeItem(key);
}

function saveSession(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

function loadSession(key) {
  return JSON.parse(sessionStorage.getItem(key));
}

function saveUser(name) {
  if (!name) {
    return alert("Data belum diisi");
  } else {
    save('users',saveObjToDb({
            "nama" : name,
            "date-create" : `${getTimeStr()} ${getDateStr()} `
        }))
    resetInput(inputNama);
    displayMessage(tagMessage1, `Oke Data "${name}" Tersimpan`, "green");
    displayName();
    visit();
  }
}

function saveEmail(email) {
  if (!email) {
    alert("Email belum diisi");
    return;
  } else {
    const data = load("data") ?? [];
    data.push({
      "email": email
    });
    save("data", data);
    resetInput(inputEmail);
    displayMessage(tagMessageEmail, `Email "${email}" berhasil disimpan`, "green");
  }
}

tagButton1.addEventListener('click', function (e) {
  e.preventDefault();
  saveUser(inputNama.value.trim());
  saveEmail(inputEmail.value.trim());
});

// Inisialisasi saat halaman load
window.addEventListener('load', function() {
  displayName();
  renderVisit();
  applyThema();
});
