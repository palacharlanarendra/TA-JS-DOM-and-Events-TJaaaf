function random(){
    return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
}
let first = document.querySelector(".first");
first.addEventListener("click",function(){
    first.style.backgroundColor=random();
});
let second = document.querySelector(".second");
second.addEventListener("mouseover",function(){
    second.style.backgroundColor=random();
});