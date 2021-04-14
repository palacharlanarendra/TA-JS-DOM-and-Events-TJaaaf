let form = document.querySelector("form");
let small = document.querySelectorAll("small");

let usernameError = "";
let emailError = "";
let phoneError = "";
let passwordError="";
function handleSubmit(event){
    event.preventDefault();
    console.dir(event.target);
    let usernameElm = event.target.elements.name;
    
    if(usernameElm.value.length<4){
        usernameError="Username can't be less than 4 characters!";

    }else if(usernameElm.value.split("").some(e=>Number(e))){
        usernameError="You can't use number in the name field!"
    }else{
        usernameError=" "
    }

   usernameElm.nextElementSibling.innerText = usernameError;

   let emailElm = event.target.elements.email;
   console.log(emailElm.value)
   if(!emailElm.value.includes("@")){
       emailError = "Not a valid email!";
   }else if(emailElm.value.length<6){
        emailError = "Not a valid email!";
   }else{
        emailError=" "
    }
   emailElm.nextElementSibling.innerText = emailError;


   let phoneElm = event.target.elements.phone;
 
  if(phoneElm.value.length<7){
        phoneError = "Phone number can only be more than 7";
   }else if(phoneElm.value.split("").some(e=> !Number(e))){
        phoneError="Phone number can only contain numbers";
    }else{
        phoneError=" "
    }
   phoneElm.nextElementSibling.innerText = phoneError;


   let passwordElm = event.target.elements.password;
  

   let repeatPasswordElm = event.target.elements.renterpassword;

   if(passwordElm.value!=repeatPasswordElm.value){
        passwordError="Both passwords must be same!"
   }else{
        passwordError=" "
   }
   repeatPasswordElm.nextElementSibling.innerText = passwordError;

if(passwordError==" " && phoneError==" " && emailError==" " && usernameError==" "){
    alert("User Added Successfully!")
}
}


form.addEventListener("submit",handleSubmit);