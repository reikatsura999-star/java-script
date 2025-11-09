
let books = [
    {judul : "",pengarang : "",terbit :"",},
    {judul : "",pengarang : "",terbit :"",},
    {judul : "",pengarang : "",terbit :"",},
    {judul : "",pengarang : "",terbit :"",},
    {judul : "",pengarang : "",terbit :"",},
]


function editbuku() 
{ let judul = prompt("masukan judul")
  let pengarang = prompt("masukan pengarang")
  let terbit = prompt("masukan terbit")
  let index = prompt("masukan urutan list buku")
  
  
  books[index].judul = judul
  books[index].pengarang = pengarang
  books[index].terbit = terbit
  alert (`judul buku:${books[index].judul}\npengarang: ${books[index].pengarang}\n terbit:${books[index].terbit}\n \n data di terima\n terima kasih telah berpatisipasi di website kami`)
}

// editbuku('bulan','tereliye',2012,0)
// editbuku('bumi','tereliye',2015,1)
// editbuku('mathari','tereliye',2023,2)
// editbuku('pulang','tereliye',2020,3)
// editbuku('pergi','tereliye',2013,4)

console.log(books)

editbuku()



