
const form = document.getElementById("myform1");
const inputNama = document.getElementById('input-nama'); 
const erorMsgNama = document.getElementById("err-msg-name"); 
const inputEmail = document.getElementById("input-email")
const erorMsgEmail = document.getElementById("err-msg-email")


form.addEventListener("submit", function(e){
    e.preventDefault(); 

   
    let Nama = inputNama.value.trim(); 

   
    if (Nama.length === 0) {
        
        erorMsgNama.textContent = "Nama wajib di isi!";
        erorMsgNama.style.color = "red";
       
        inputNama.style.borderColor = "red"; 
         e.preventDefault();
        
    } else if (Nama.length < 3) {
       
        erorMsgNama.textContent = "Nama minimal 3 karakter.";
        erorMsgNama.style.color = "orange";
        inputNama.style.borderColor = "orange";

    } else {
        
        erorMsgNama.textContent = "Data diterima. Selamat datang, " + Nama + "!";
        erorMsgNama.style.color = "green";
        inputNama.style.borderColor = "green"; 
        
        
    };


    
    let Email = inputEmail.value.trim()
    if (!Email) {
        erorMsgEmail.textContent = "Email tidak valid"
        erorMsgEmail.style.color = "red"
        alert('Masukkan email yang valid!');
         e.preventDefault();
    }else{
        erorMsgEmail.textContent = "email Valid,Email kami terima"
        erorMsgEmail.style.color ="green"
    }

});

