let input = document.querySelector(".todos");
let completedBtn = document.querySelector(".completedBtn");
let activeBtn = document.querySelector(".activeBtn");
let allBtn = document.querySelector(".allBtn");
let combinedBtn = document.querySelector(".combined_buttons");
let items_left = document.querySelector(".items_left");
let clearBtn = document.querySelector(".clearBtn");

let arrayTodos =[
];



function handleKey(event){
    if(event.keyCode === 13){
        arrayTodos.push({
            name:event.target.value,
            isDone:false
        })
        createUI();
    }
    
}
function handleClick(event){
    let id = event.target.dataset.id;
    arrayTodos.splice(id,1);
    createUI();
}
function handleChange(event){
    let id = event.target.dataset.input;
    arrayTodos[id].isDone = !arrayTodos[id].isDone;
}
function clearAllUI(){
    arrayTodos=[];
    items_left.innerText = `${arrayTodos.length} items left`;
    createAllUI();
}
if(arrayTodos.length<=0){
    combinedBtn.classList.add("display_block");
}
function createUI(){
   
    input.value = ""
    
        let ul = document.querySelector(".display");
        ul.innerHTML="";
        
      
        
    arrayTodos.forEach((element,index)=>{
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

        completedBtn.addEventListener("click",createCompletedUI);
        activeBtn.addEventListener("click",createActiveUI);
        allBtn.addEventListener("click",createAllUI);
        clearBtn.addEventListener("click",clearAllUI);
        let li = document.createElement("li");
        li.append(input,label,span);
        ul.append(li);
    });
    
    
}
createUI();





function createAllUI(){
    
    if(arrayTodos.length>0){
        combinedBtn.classList.remove("display_none");
    }
    if(arrayTodos.length==0){
        combinedBtn.classList.add("display_none");
    }
    let ul = document.querySelector(".display");
        ul.innerHTML="";

    arrayTodos.forEach((element,index)=>{
        if(element.isDone === false ||element.isDone === true){
            let input = document.createElement("input");
        input.type="checkbox";
        input.addEventListener("input",handleChange);
        input.setAttribute("data-input",index);
        input.checked = element.isDone;
        let label = document.createElement("label");
        label.innerText = element.name;

        let span=document.createElement("span");
        span.setAttribute("data-id",index);
        span.innerText = "x";
        span.addEventListener("click", handleClick); 

        let li = document.createElement("li");
        li.append(input,label,span);
        ul.append(li);

        }
    });
}
function createActiveUI(){
    
    let ul = document.querySelector(".display");
        ul.innerHTML="";

    arrayTodos.forEach((element,index)=>{
        if(element.isDone === false){
            let input = document.createElement("input");
        input.type="checkbox";
        input.addEventListener("input",handleChange);
        input.setAttribute("data-input",index);
        input.checked = element.isDone;
        let label = document.createElement("label");
        label.innerText = element.name;

        let span=document.createElement("span");
        span.setAttribute("data-id",index);
        span.innerText = "x";
        span.addEventListener("click", handleClick); 

        let li = document.createElement("li");
        li.append(input,label,span);
        ul.append(li);

        }
    });
}
function createCompletedUI(){
 
    let ul = document.querySelector(".display");
        ul.innerHTML="";

    arrayTodos.forEach((element,index)=>{
        if(element.isDone === true){
            let input = document.createElement("input");
        input.type="checkbox";
        input.addEventListener("input",handleChange);
        input.setAttribute("data-input",index);
        input.checked = element.isDone;
        let label = document.createElement("label");
        label.innerText = element.name;

        let span=document.createElement("span");
        span.setAttribute("data-id",index);
        span.innerText = "x";
        span.addEventListener("click", handleClick); 

        let li = document.createElement("li");
        li.append(input,label,span);
        ul.append(li);

        }
    });
}




input.addEventListener("keyup",handleKey);