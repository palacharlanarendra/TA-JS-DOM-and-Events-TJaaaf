let root = document.querySelector(".btns");
let screen = document.querySelector(".screen")
let initialValue= 0;
function handleEvent(event){
    let value =event.target.innerText;
    if(event.target.classList.contains("equal")){

        screen.innerText = eval(screen.innerText);
        return;
    }
    if(event.target.classList.contains("clear")){
        screen.innerText = initialValue;
        return;
    }
    if(screen.innerText==initialValue){
        screen.innerText = value;
    }else{
        screen.innerText += value;
    }
}
root.addEventListener("click",handleEvent);
function solve(){
    let screen = document.querySelector(".screen").value;
    let y = eval(screen);

    document.querySelector(".screen").value=y;
}

