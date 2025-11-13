import { add } from "./module/script1.js";
import bebasnamanya,{ min,hai } from "./module/script2.js";//export default nama pemanggilannya bebas
import { multyplay } from "./module/script3.js";
import * as script4 from "./module/script4.js";
//as adalah alias
// * mencangkup semua eksport 


console.log(bebasnamanya());//jangan lupa di kasih () karena dia function
console.log(script4.f2());
console.log(hai());


const tagDiv1 = document.getElementById('tagDiv1')//di ambil dari html

function mengisiTag(a,b) {
    let isi = ''

    let resultAdd = add(a,b);
    let resultmultiply = multyplay(a,b);
    let resultMin = min(a,b);

    isi += `<h3>hasil: ${a} + ${b} = ${resultAdd}</h3>`
    isi += `<h3>hasil: ${a} x ${b} = ${resultmultiply}</h3>`
    isi += `<h3>hasil: ${a} - ${b} = ${resultMin}</h3>`
    isi += `<h3>====================</h3>`

    return isi;
}

tagDiv1.innerHTML +=  mengisiTag(100,900)
tagDiv1.innerHTML +=  mengisiTag(100,800)
tagDiv1.innerHTML +=  mengisiTag(100,700)
tagDiv1.innerHTML +=  mengisiTag(100,600)
tagDiv1.innerHTML +=  mengisiTag(100,500)