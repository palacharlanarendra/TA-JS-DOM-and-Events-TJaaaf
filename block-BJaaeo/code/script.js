let root = document.querySelector(".btns");


function dis(val){
    document.querySelector(".screen").value+=val;
}
function solve(){
    let x = document.querySelector(".screen").value;
    let y = eval(x);
    document.querySelector(".screen").value=y;
}
function clr(){
    document.querySelector(".screen").value="";
}