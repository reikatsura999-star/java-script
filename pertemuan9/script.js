// ==================================================
// MANIPULATION ARRAY WITH ONLY METHOD FOR ARRAY 
// ==================================================


let datanama = {
    nama: 'yanto',
    umur: 56,
    alamat: 'semarang',
    wa: '+628576645345',
    email: 'yantogaming@gamil.com',
    pekerjaan : 'dosen'


    //mengakses nama dengan password
//     fullData: (passwordData) => {
//         if (passwordData === 'pw') {
//             return `ok you can access my full Data
// Nama   : ${datanama.nama}
// Umur   : ${datanama.umur}
// Alamat : ${datanama.alamat}
// WA     : ${datanama.wa}
// Email  : ${datanama.email}`;
//         } else {
//             return 'Access denied';
//         }
//     }
};


//mengganti value baru
datanama.alamat = 'jogja'
datanama.umur = 70
datanama.nama = 'bambang'
datanama.status = 'buruh'


//jika umur lebih dari 35 maka di sebut dewasa
if(datanama['umur'] > 35){
      datanama['status'] = 'dewasa'

}
//me-list semua key dan value 
for (let key in datanama) {
    console.log(`pada key => "${key}" valuenya => ${datanama[key]}`)
}

