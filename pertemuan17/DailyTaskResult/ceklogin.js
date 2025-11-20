function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function cekLogin(data, password) {
    return new Promise((resolve, reject) => {
        console.log("memproses login...");

        setTimeout(function () {

            if (data == "ya" && password == "123") {
                resolve("selamat login anda berhasil")
            } else {
                reject("coba periksa kembali password anda")
            }
        }, 2000);

    })

}


async function prosesLogin() {
    try {
        await delay(3000)
        console.log("sedang mengambil data...");
        await delay(2000)
        const hasil = await cekLogin("ya", "123")
        console.log("hasil", hasil);
    } catch (error) {
        console.log("gagal", error);

    }
}
prosesLogin()