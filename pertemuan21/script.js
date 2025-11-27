const myForm = document.getElementById("my-form")
const inputnama = document.getElementById("nama-lengkap")
const erorMsgNama = document.getElementById("error-msg-name")
const inputEmail = document.getElementById("email-user")
const erorMsgEmail = document.getElementById("eror-msg-email")
const inputNomer = document.getElementById("nomor-telp")
const erorMsgNO = document.getElementById("eror-msg-notep")
const dateOfBirth = document.getElementById("tanggal-lahir")
const erorMsgDate = document.getElementById("eror-msg-date")
const historyStudy = document.getElementById("study")
const erorMsgstudy = document.getElementById("eror-msg-study")
const NoteCrime = document.getElementById("NoteCrime")
const erorMsgCrime = document.getElementById("eror-msg-crime")
const InputAlasan = document.getElementById("alasan-gabung")
const erorMsgAlasan = document.getElementById("eror-msg-message")
const UbahTombol = document.getElementById("submit-btn")


myForm.addEventListener("submit", function (e) {
    e.preventDefault();

    //input nama
    let nama = inputnama.value.trim()

    if (!nama) {
        erorMsgNama.textContent = "form nama wajib di isi!"
        erorMsgNama.style.color = "red"
        inputnama.style.borderColor = "red"
    } else if (nama.length < 6) {
        erorMsgNama.textContent = "Minimal 6 Karakter"
        erorMsgNama.style.color = "red"
        inputnama.style.color = "red"
    } else {
        erorMsgNama.textContent = "Oke nama valid"
        erorMsgNama.style.color = "green"
    }


    //input email
    let Email = inputEmail.value.trim()

    if (!Email) {
        erorMsgEmail.textContent = "Input Email gak boleh Kosong!"
        erorMsgEmail.style.color = "red"
        inputEmail.style.borderColor = "red"
    } else if (!Email.includes("@")) {
        erorMsgEmail.textContent = "Input tidak Valid"
    } else {
        erorMsgEmail.textContent = "Email kami terima"
        erorMsgEmail.style.color = "green"
        inputEmail.style.color = "blue"
    }


    //input no.Hp
    let nolep = inputNomer.value.trim()

    if (nolep == "") {
        erorMsgNO.textContent = "No.hp tidak boleh kosong"
        erorMsgNO.style.color = "red"
        inputNomer.borderColor = "red"
    } else if (nolep.length < 12) {
        erorMsgNO.textContent = "Minimal 12 Karakter"
        erorMsgNO.style.color = "red"
        inputNomer.borderColor = "red"
    } else {
        erorMsgNO.textContent = "No.hp valid"
        erorMsgNO.style.color = "blue"
    }


    //input Tanggal lahir
    let tanggalLahir = dateOfBirth.value;
    let now = new Date();
    now.setHours(0, 0, 0, 0);

    if (tanggalLahir === "") {
        erorMsgDate.textContent = "Pilih tanggal lahir terlebih dahulu.";
        erorMsgDate.style.color = "red";
        dateOfBirth.style.borderColor = "red";
        
    }
    else if (new Date(tanggalLahir) > now) {
        erorMsgDate.textContent = "Tanggal lahir tidak boleh di masa depan!";
        erorMsgDate.style.color = "red";
        dateOfBirth.style.borderColor = "red";
        
    }
    else {
        erorMsgDate.textContent = "Tanggal lahir telah terisi.";
        erorMsgDate.style.color = "aqua";
        dateOfBirth.style.borderColor = "";
    }

    //Catatan kriminal
    let Catatan = NoteCrime.value;

    if (Catatan === "") {
        erorMsgCrime.textContent = "pilih salah satu !";
        erorMsgCrime.style.color = "red";
        NoteCrime.style.borderColor = "red";
    } else if(Catatan === "yes") {
        erorMsgCrime.textContent = "Terus intropeksi ya Bro"
        erorMsgCrime.style.color = "green";
        NoteCrime.style.borderColor = "green";
    } else if(Catatan === "no"){
        erorMsgCrime.textContent = "Mantap Bro sehat selalu"
        erorMsgCrime.style.color = "green";
        NoteCrime.style.borderColor = "green"; 
    }
        
      
   


    //riwayat sekolah
    let sekolah = historyStudy.value

    if (sekolah === "") {
        erorMsgstudy.textContent = "pilih salah satu"
        erorMsgstudy.style.color = "red"
        historyStudy.style.borderColor = "red"
    } else {
        erorMsgstudy.textContent = "Data valid"
        erorMsgstudy.style.color = "green"
        historyStudy.style.color = "blue"
    }


    //Alasan Bergabung
    let Alasan = InputAlasan.value
   
    if(!Alasan){
       erorMsgAlasan.textContent = "Data tidak boleh Kosong"
       erorMsgAlasan.style.color = "red"
    }else if (Alasan.length < 20) {
       erorMsgAlasan.textContent = "minimal 20 karakter"
       erorMsgAlasan.style.color = "red"
    } else {
       erorMsgAlasan.textContent = "Pesan di simpan"
       erorMsgAlasan.style.color = "green"
    }
})

UbahTombol.addEventListener("mouseover",function(){
    //warna background
    UbahTombol.style.backgroundColor = '#007bff';
    //warna text
    UbahTombol.style.color = 'white';
})

UbahTombol.addEventListener("mouseout",function(){
    //warna backgraoud
    UbahTombol.style.backgroundColor = '#2cc136ff';
    //warna text
    UbahTombol.style.color = '#ecececff';
})