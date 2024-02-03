const openBtn=document.getElementById("open")
const closeBtn=document.getElementById("close")
const popupBtn=document.getElementById("popup")

openBtn.addEventListener("click",()=>{
    popupBtn.classList.add("open-popup");
})

closeBtn.addEventListener("click",()=>{
    popupBtn.classList.remove("open-popup");
})