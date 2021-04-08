function randomColor(){
    return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
}
let main = document.querySelector(".main");
for(var i=0;i<500;i++){
    let box = document.createElement("div");
    
    main.append(box);
    
}
let boxes = document.querySelectorAll("div")
main.addEventListener("mouseover", function(){
    
    for(let elements of boxes){
        elements.style.backgroundColor = randomColor();
        elements.innerText = Math.floor(Math.random() * 500);
    }
});