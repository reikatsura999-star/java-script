
// export const POINT_MAXIMUM = 1000
// export const POIN_BONUS = 50

// export default function hitungTotalPoin (nilai){ 
//     const total = nilai.reduce((acc,val)=> acc + val,0)
//     const hasil = total + POIN_BONUS;
//     return hasil > POINT_MAXIMUM ? POINT_MAXIMUM : hasil
// }

// game.js
export const POIN_MAKSIMAL = 1000;
export const  POIN_BONUS = 50;

export default function hitungTotalPoin(nilai) {
    const total = nilai.reduce((acc, curr) => acc + curr, 0);
    const hasil = total + POIN_BONUS;
    return hasil > POIN_MAKSIMAL ? POIN_MAKSIMAL : hasil;
}

