let input=document.getElementById("inputbox");
let list=document.getElementById("lists");


function addtask(){
    if (inputbox.value===""){
        alert("You must write something in inputbox!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    saveData();
}


list.addEventListener("click",function(e){
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
      }
    }
)

function saveData(){
    localStorage.setItem("data",list.innerHTML)
}

function showTask(){
    list.innerHTML=localStorage.getItem("data");
}
showTask();