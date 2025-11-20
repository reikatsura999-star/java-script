import { searchCity } from "./api.js";

export function startupPrayerSchedule() {
  const input = document.getElementById("PilihKota");
  const tombol = document.getElementById("btnpilihlokasi");

  tombol.onclick = async () => {
    const keyword = input.value.trim();
    if (!keyword) return alert("Masukkan nama kota dulu.");

    try {
      const hasil = await searchCity(keyword);
      const kota = hasil.data?.[0];
      if (!kota) return alert("Kota tidak ditemukan.");

      const cityid = kota.id
      const lokasi = kota.nama

      console.log("id kota:",cityid);
      console.log("lokasi:",lokasi);
      


    } catch (err) {
      alert("Gagal mengambil data kota.");
      console.error(err);
    }
  };
}