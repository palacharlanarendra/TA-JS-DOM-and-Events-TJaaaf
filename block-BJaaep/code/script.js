
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
boxes.forEach((box)=>{
    box.setAttribute("data-num",0)
});
root.addEventListener("click",handleEvent);

function handleEvent(event){

    event.target.children[0].classList.add("dis")
        setTimeout(function(){
            event.target.children[0].classList.remove("dis")
        },5000);
        
}
