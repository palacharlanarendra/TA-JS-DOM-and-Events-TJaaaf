let input = document.querySelector(".todos");
let completedBtn = document.querySelector(".completedBtn");
let activeBtn = document.querySelector(".activeBtn");
let allBtn = document.querySelector(".allBtn");
let combinedBtn = document.querySelector(".combined_buttons");
let items_left = document.querySelector(".items_left");
let clearBtn = document.querySelector(".clearBtn");

let arrayTodos =
localStorage.getItem("arrayTodos")?JSON.parse(localStorage.getItem("arrayTodos")):[];



function handleKey(event){
    if(event.keyCode === 13 && event.target.value){
        arrayTodos.push({
            name:event.target.value,
            isDone:false
        })
        event.target.value="";
        createUI();
        localStorage.setItem("arrayTodos",JSON.stringify(arrayTodos));
    }
    
}
function handleClick(event){
    let id = event.target.dataset.id;
    arrayTodos.splice(id,1);
    items_left.innerText = `${arrayTodos.length} items left`;
    createUI();
    localStorage.setItem("arrayTodos",JSON.stringify(arrayTodos));
}
function handleChange(event){
    let id = event.target.dataset.input;
    arrayTodos[id].isDone = !arrayTodos[id].isDone;
}

if(arrayTodos.length<=0){
    combinedBtn.classList.add("display_block");
}
function createUI(data=arrayTodos){    
        let ul = document.querySelector(".display");
        ul.innerHTML="";
        
    data.forEach((element,index)=>{
        let input = document.createElement("input");
        input.type="checkbox";
        input.classList.add("checkbox_style");
        input.addEventListener("input",handleChange);
        input.setAttribute("data-input",index);
        input.checked = element.isDone;
        let label = document.createElement("label");
        label.innerText = element.name;

        let span=document.createElement("span");
        span.setAttribute("data-id",index);
        span.innerText = "x";
        span.addEventListener("click", handleClick); 

        
        items_left.innerText = `${arrayTodos.length} items left`;

       
        let li = document.createElement("li");
        li.append(input,label,span);
        ul.append(li);
    });
}
createUI();

activeBtn.addEventListener("click",createActiveUI);
function createActiveUI(){
    let activeTodos = arrayTodos.filter((todo)=> !todo.isDone);
    createUI(activeTodos);
    localStorage.setItem("arrayTodos",JSON.stringify(arrayTodos));
}


allBtn.addEventListener("click",createAllUI);
function createAllUI(){
  
    createUI();
    localStorage.setItem("arrayTodos",JSON.stringify(arrayTodos));
}

completedBtn.addEventListener("click",createCompletedUI);
function createCompletedUI(){
    let activeTodos = arrayTodos.filter((todo)=> todo.isDone);
    createUI(activeTodos);
    localStorage.setItem("arrayTodos",JSON.stringify(arrayTodos));
}        
clearBtn.addEventListener("click",clearAllUI);

function clearAllUI(){
    arrayTodos = arrayTodos.filter((todo)=> !todo.isDone);
    createUI();
    localStorage.setItem("arrayTodos",JSON.stringify(arrayTodos));
}





input.addEventListener("keyup",handleKey);