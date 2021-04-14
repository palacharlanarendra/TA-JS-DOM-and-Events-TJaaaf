let input = document.querySelector(".text");

let btn = document.querySelector(".myBtn");

let display = document.querySelector(".display");

let form = document.querySelector("form");
let movieName= ""
form.addEventListener("submit",handleEvent);




function handleEvent(event){
    event.preventDefault();

    movieName = event.target.elements.movie.value;
    
    let row = document.createElement("tr");
    let column1 = document.createElement("td");
    column1.innerText = movieName;

    let column2 = document.createElement("span");
    column2.innerHTML = `<span class="btn">X</span>`;

    
    row.append(column1,column2);
    display.append(row);
    
    let listDel = document.querySelector(".btn")
listDel.addEventListener("click",removeItem(row))
function removeItem(row){
    removeChild(row)
}

    
   
}
