
import hitungTotal from './util/kasir.js';
import { ambilNama,ambilNIM,ambilJurusan } from './util/mahasiswa.js';
import hitungTotalPoin, { POIN_MAKSIMAL, POIN_BONUS } from './util/game.js';





//================================================
const angka =[15000, 25000, 8000, 12000];
console.log('Total :', hitungTotal(angka)); 
console.log('\n');

//=================================================


const biodata = {nama: "Sari Dewi", nim: "2024001", jurusan: "Informatika", ipk: 3.8}
console.log(ambilNama(biodata),ambilNIM(biodata),ambilJurusan(biodata));

//==================================================

// app.js

const skor = [200, 100, 300, 180, 120];
console.log(hitungTotalPoin(skor)); // 950
console.log("Bonus:", POIN_BONUS); // 50
console.log("Batas maksimal:", POIN_MAKSIMAL); // 1000