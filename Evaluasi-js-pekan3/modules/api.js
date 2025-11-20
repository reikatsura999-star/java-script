const BASE_URL = 'https://api.myquran.com/v2/';

export async function searchCity(keyword) {
    const res = await fetch(`${BASE_URL}/sholat/kota/cari/${keyword}`);

    if (!res.ok) {
        throw new Error("gagal mengambil data dari server eror (404)"); 
    }
    return res.json
    
}


export async function getCityById(id) {
    const res = await fetch (`${BASE_URL}/sholat/kota/cari/${id}`)

    if(!res.ok){
        throw new Error("id tidak di temukan");  
    }
    return res.json
}
export async function getDailySchedule(cityId, dateString) {
    const res = await fetch(`${BASE_URL}/sholat/jadwal/${cityId}/${dateString}`)

    if (!res.ok) {
        throw new Error("kota dan tanggal tidak valid");
    }
    return res.json
}
export async function getMonthlySchedule(cityId, year, month) {
    const res = await fetch(`${BASE_URL}/sholat/jadwal/kota:${cityId}/tahun:${year}/bulan:${month}`)

    if (!res.ok) {
      throw new Error("masukan data dengan benar");
        
    }
    return res.json
}
export async function getRandomAyat() {
    const res = await fetch (`${BASE_URL}/quran/ayat/acak`)

    if (!res.ok) {
       throw new Error("gagal memuat ayat acak"); 
    }

    const data = res.json()
    return data
}
export async function getRandomHaditsArbain() {
    const res = await fetch (`${BASE_URL}/hadits/arbain/acak`)
    
    if (!res.ok) {
        const res = await fetch("gagal memuat hadis arbain acak")
    }
    const data1 = res.json()
    return data1
}
export async function getRandomDoa() {
    const res = await fetch(`${BASE_URL}/doa/acak`)

    if (!res.ok) {
        throw new Error("gagal memuat doa acak");
    }
    const data2 = res.json()
    return data2
}
export async function getRandomAsmaulHusna() {
    try {
        const res = await fetch(`${BASE_URL}/husna/acak`)

    if (!res.ok) {
    throw new Error("gagal memuat asmul husna")
    }
    const data3 = res.json
    return data3
    
    } catch (error) {
      console.error("eror",error.message);    
    }
}