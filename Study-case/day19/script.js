 const countEl = document.getElementById("count");
  const btn = document.getElementById("btn-plus");
  const msg = document.getElementById("msg");
  const tagP = document.getElementsByTagName("p")
  let count = 1;

  btn.addEventListener("click", () => {
    count++;
    countEl.textContent = count;

    
    if (count >= 5) msg.textContent = "Wah, rajin juga! 🔥";
    else msg.textContent = "";

    if (count % 10 === 0) msg.textContent = "kamu kuat banget💪" //ketika count kelipatan 10
   

    if (count === 30) msg.style.color = "red" //text akan berubah menjadi merah
        
    

  });


// //=============================================================================


  const input = document.getElementById("todo-input");
  const addBtn = document.getElementById("todo-add");
  const list = document.getElementById("todo-list");

  addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement("li");
    li.textContent = text;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Hapus";
    delBtn.addEventListener("click", () => li.remove());

    const coret = document.createElement("button");
    coret.textContent = "coret";
    coret.addEventListener("click", () => li.classList.toggle("done"));


    li.appendChild(delBtn);
    li.appendChild(coret)
    list.appendChild(li);
    input.value = "";
  });

  //=========================================================================

   const tabs = document.getElementById("tabs");
  const contents = document.querySelectorAll("[data-tab-content]");

  tabs.addEventListener("click", (e) => {
    const tab = e.target.dataset.tab;
    if (!tab) return;

    contents.forEach((c) => {
      c.style.display = c.dataset.tabContent === tab ? "block" : "none";
    });
  });