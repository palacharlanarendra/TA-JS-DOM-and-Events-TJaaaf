
let root = document.querySelector(".boxes");
let boxes = document.querySelectorAll(".box");

boxes.forEach((box,index)=>{
    
 box.addEventListener("click",function(){
    box.children[0].classList.add("dis")
        setTimeout(function(){
            box.children[0].classList.remove("dis")
        },5000);
    });
    
});

let root = document.querySelector(".boxes");
let boxes = document.querySelectorAll(".box");

root.addEventListener("click",handleEvent);

function handleEvent(event){

    let text= event.target.dataset.text;
    event.target.innerText=text;
    setTimeout(()=>{
        event.target.innerText="";
    },5000);
        
}
