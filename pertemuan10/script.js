//=============================================================================//
// destruction
//============================================================================//

let tag1 = document.getElementById("tag1");

let dataSantri = ['santri1', 'santri2', 'santri3', 'santri4', 'santri5','santri6'];

// Destructuring array
let [san1, san2, san3, san4, san5,san6] = dataSantri;

// Tampilkan ke web (JS yang eksekusi)
tag1.innerHTML += `<h1>${san1}</h1>`;
tag1.innerHTML += `<h1>${san2}</h1>`;
tag1.innerHTML += `<h1>${san3}</h1>`;
tag1.innerHTML += `<h1>${san4}</h1>`;
tag1.innerHTML += `<h1>${san5}</h1>`;
tag1.innerHTML += `<h1>${san6}</h1>`;