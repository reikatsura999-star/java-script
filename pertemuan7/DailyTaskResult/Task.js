//==================================================================//
                       //latihan mandiri//
//==================================================================//                       
let arry = ['sandi','bagus','bagas','bulan','ahsan']

arry.push("yanto")
console.log(`setelah di push di akhir muncul ${arry[5]}`)
console.log(arry);


arry.unshift('yanti')
console.log(`setelah di unshif di awal muncul ${arry[0]}`)
console.log(arry)

arry.splice( 1, 0, 'ahmad')
console.log(`setelah di splice urutan ke-2 akan berubah ${arry[1]}`)
console.log(arry);







//===================================================================//
                     //TASK Tugas Harian
//===================================================================//

let belanja = ['tomat','bakso','cabai','bawang','kecap','merica']
console.log(`lish`);
console.log(belanja)


belanja.shift()
console.log('urutan pertama berubah menjadi bakso');
console.log(belanja);



belanja.pop()
console.log('urutan terakhir berubah jadi kecap');
console.log(belanja)

belanja.splice(1 , 0,'bumbu')
console.log('urutan ke-2 berubah jadi bumbu');
console.log(belanja)


console.log(belanja.length);

//=====================================================================//
//=====================================================================//


let pepole = ['abraham','yohanes','adam','david','solomon']

pepole.push('noah')
console.log(pepole)

pepole.shift()
console.log('nama ke pertama jadi yohanes')
console.log(pepole)

//cek apakah adam ikut
console.log("apakah abraham ikut?",pepole.includes("abraham"))

//cek posisi adam
console.log("posisi adam",pepole.indexOf("adam"));

//ganti nama
pepole[1] = "isa"

//nambah nama di awal
pepole.unshift("joseph")

//hapus hari pertama = joseph hilang
let pepolepertama = pepole.shift()
console.log(pepolepertama)
console.log(pepole);



//lop array
for(let i = 0; i < pepole.length; i++) {
    console.log('Nama ke-' + (i+1) + ': ' + pepole[i]);
}

//menggabubgkan 2 list
let pepole2 = ['senin','selasa','rabu','kamis','jumat']
let merge = pepole.concat(pepole2)
console.log(merge)

//membalikan urutan
pepole2.reverse();
console.log(pepole2);
