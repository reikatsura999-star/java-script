//  //Select Element dengan ID
//  const welcomesection = document.querySelector("#welcome-section")
//       console.log(welcomesection);
//       console.log(welcomesection.textContent);

//       const mybutton = document.querySelector("#action-button") 
//       console.log(mybutton);
//       console.log(mybutton.textContent);




//  //Select Element dengan Class

// const firstParagraph = document.querySelector(".description")
// const firstCard = firstParagraph
// console.log(firstCard);



// //Select SEMUA Element dengan querySelectorAll 

// const allParagraphs = document.querySelectorAll(".description")
// console.log(allParagraphs.length);
// console.log(allParagraphs[0]);
// console.log(allParagraphs[1]);

// const allCard = document.querySelectorAll(".card")

// for (let i = 0; i < allCard.length; i++) {
//     console.log(allCard[i]);
// }

// //  Loop Semua Elements

// const allCard2 = document.querySelectorAll(".card")

// allCard2.forEach(function(item,index){
//     console.log(`${index+1} : ${item.textContent}`);
    
// })

// const allParagraphs2 = document.querySelectorAll(".description")

// allParagraphs2.forEach(function(item,index){
//     console.log(`${index+1}:${item.textContent}`);
    
// })

//  Kombinasi - Select dan Loop

// const welcomeSection = document.querySelector("#welcome-section")

// const paragraphs = welcomeSection.querySelectorAll("#welcome-section p")


// paragraphs.forEach(function(item,i){
//   console.log(`${i+1}.${item.textContent}`);
  
// })

// Ubah Text dengan textContent

const message = document.querySelector('#message');
console.log(message.textContent); // "Hello World"

// Ubah textContent
message.textContent = 'Selamat Datang';
console.log(message.textContent); // "Selamat Datang"


message.textContent = "hallo pemula"
console.log(message.textContent);//hallo pemula

const isiStatus = document.querySelector("#status")
console.log(isiStatus.textContent);
// ubah text content
isiStatus.textContent = "status : online"
console.log(isiStatus.textContent);










 
     
      