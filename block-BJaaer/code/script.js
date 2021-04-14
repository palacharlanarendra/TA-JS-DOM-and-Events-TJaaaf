let form = document.querySelector("form");

let userInfo = {};
form.addEventListener("submit",handleSumbit);
function handleSumbit(event){
    console.dir(event);
    event.preventDefault();
    userInfo.text = form.elements.text.value;
    userInfo.email = form.elements.email.value;
    userInfo.gender = form.elements.gender.value;
    userInfo.color = form.elements.color.value;
    userInfo.range = form.elements.range.value;
    userInfo.drone = form.elements.drone.value;
    userInfo.terms = form.elements.terms.value;
    console.log(userInfo);
    let modalCore = document.querySelector(".modal-content")
    let heading = document.createElement("div");
    heading.innerHTML=``;
    heading.innerHTML=
    `<h1>${userInfo.text}</h1>
    <p>Email: ${userInfo.email}</p>
    <p>You Love: ${userInfo.gender}</p>
    <p>Color: ${userInfo.color}</p>
    <p>Rating: ${userInfo.range}</p>
    <p>Book Genre: ${userInfo.drone} ${userInfo.color}</p>
    <p class="underline">👉 <a >You agree to Terms and Conditions</a></p>
    `;
    modalCore.append(heading);
}
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


