
const jsonTeman = '{"nama" : "yanto" , "umur" : 30}'

const Teman = JSON.parse(jsonTeman)

document.getElementById("namaTeman").textContent = "NAMA" + Teman.nama
document.getElementById("umurTeman").textContent = "UMUR" + Teman.umur


const jsonData = {
  "id": 1,
  "nama": "Ya",
  "email": "ya@example.com",
  "aktif": true,
  "peran": "admin",
  "tanggal_dibuat": "2025-11-14T09:30:00Z"
}