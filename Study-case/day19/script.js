//  Kalau count kelipatan 10 → tampilkan pesan spesial lain.
// Kalau count > 30 → ubah warna text count jadi merah.

const countEl = document.getElementById("count");
const btn = document.getElementById("btn-plus");
const msg = document.getElementById("msg");
const tagP = document.getElementsByTagName("p")
let count = 1;

btn.addEventListener("click", () => {
  count++;
  countEl.textContent = count;


  if (count >= 5) msg.textContent = "Wah, rajin juga! 🔥";
  else msg.textContent = "";

  if (count % 10 === 0) msg.textContent = "kamu kuat banget💪" //ketika count kelipatan 10


  if (count === 30) msg.style.color = "red" //text akan berubah menjadi merah



});



// Kalau li diklik (bukan tombol Hapus) → toggle class done (teks dicoret).
// Tambah info jumlah tugas total & tugas yang sudah selesai.

const input = document.getElementById("todo-input");
const addBtn = document.getElementById("todo-add");
const listt = document.getElementById("todo-list");
const info = document.getElementById("info-todo")

function updateinfo() {
  const total = listt.children.length
  const selesai = listt.querySelectorAll(".done").length
  info.textContent = `total:${total} | selsai:${selesai}`
}

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Hapus";
  delBtn.addEventListener("click", () => {
    li.remove();
    updateinfo()
  });

  const coret = document.createElement("button");
  coret.textContent = "coret";
  coret.addEventListener("click", () => {
    li.classList.toggle("done")
    updateinfo()
  });


  li.appendChild(delBtn);
  li.appendChild(coret)
  listt.appendChild(li);
  input.value = "";
});

//Highlight teks yang cocok dengan <mark> (butuh innerHTML).
// Tambahkan data santri lebih banyak dan biarkan mereka eksplorasi.
const search = document.getElementById("search");
const items = document.querySelectorAll("#santri-list li");
const infoSantri = document.getElementById("info");

search.addEventListener('input', function() {
  const keyword = search.value.toLowerCase();
  let foundCount = 0;

  items.forEach(item => {
    const itemText = item.textContent;
    const lowerText = itemText.toLowerCase();
    
    // Reset kalau search kosong
    if (!keyword) {
      showItem(item, itemText);
      return;
    }
    
    // Cek apakah item mengandung keyword
    if (lowerText.includes(keyword)) {
      highlightAndShow(item, itemText, keyword);
      foundCount++;
    } else {
      hideItem(item);
    }
  });
  
  updateInfo(foundCount);
});

// Fungsi bantuan biar lebih rapi
function showItem(item, text) {
  item.innerHTML = text;
  item.style.display = "list-item";
}

function hideItem(item) {
  item.style.display = "none";
}

function highlightAndShow(item, text, keyword) {
  const lowerText = text.toLowerCase();
  const start = lowerText.indexOf(keyword);
  const end = start + keyword.length;
  
  const highlightedText = 
    text.substring(0, start) +
    "<mark>" + text.substring(start, end) + "</mark>" +
    text.substring(end);
  
  item.innerHTML = highlightedText;
  item.style.display = "list-item";
}

function updateInfo(count) {
  infoSantri.textContent = count === 0 
    ? "Tidak ada santri ditemukan" 
    : `Ditemukan ${count} santri`;
}

//==========================================================================


const tabs = document.getElementById("tabs");
const contents = document.querySelectorAll("[data-tab-content]");

tabs.addEventListener("click", (e) => {
  const tab = e.target.dataset.tab;
  if (!tab) return;

  contents.forEach((c) => {
    c.style.display = c.dataset.tabContent === tab ? "block" : "none";
  });
});



