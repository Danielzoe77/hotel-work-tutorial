/*const form = document.getElementById("form");
const firstname = document.getElementById("first Name");
const email = document.getElementById("email");
const lastname = document.getElementById("last Name");
const message = document.getElementById("message");


form.addEventListener('submit', (event) =>{
    event.preventDefault();
    alert("hello");

    Validate();
})

const SuccessMsg = (firstnameVal) => {
    let formContr = document.getElementsByClassName("form-control");
    var Count = formContr.length - 1;
    for (var i = 0; i < formContr.length; i++){
      if(formContr[i].className ==="form-control success"){
        var sRate = 0 + i;
        console.log(sRate);
        sendData(usernameVal,sRate,count );
      } 
    }
}
const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf(".");
    if(dot <= atSymbol + 2 ) return false ;
    if(dot === emailVal.length -1 )return false ;
    return true ;

}

function validate (){
    const firstnameVal = firstname.value.trim();
    const lastnameVal = lastname.value.trim();
    const emailVal = email.value.trim();
    const messageVal = message.value.trim();


    if(firstnameVal === " "){
        setErrorMsg(firstname, "firstname cannot be blank");
        alert('hello world')
        
    }
    else if(firstnameVal.length <=2 ){
        setErrorMsg(firstname, "min 3 char");
    }
    else{
        setSuccessMsg(firstname);
      
    }

    if(lastnameVal === ""){
        setErrorMsg(lastname, "lastname cannot be blank");
    }
    else if(lastnameVal.length <=2 ){
        setErrorMsg(lastname, "min 3 char");
    }
    else{
        setSuccessMsg(lastname);
    }
    if(emailVal === ""){
        setErrorMsg(email, "email cannot be blank");
    }
    else if(!isEmail(emailVal) ){
        setErrorMsg(email, "email is not valid");
    }
    else{
        setSuccessMsg(email);
    }
}

function setErrorMsg( input,errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs; 
}
function setSuccessMsg( input,errormsgs){
    const formControl = input.parentElement;
 
    formControl.className = "form-control success";

}---
const nameError = document.getElementById('first-error');
const lastError = document.getElementById('last-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');

function validateName(){
    var humani = document.getElementById("full-Name").value;

    if(humani.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
        alert("hello");
    }
    if(humani.length <=3){
        nameError.innerHTML = 'full name is required';
        return false;
    }
    
   
   if(!humani.match(/^[A-Za-z]*$/)){
    nameError.innerHTML = 'write full name';
    return false;
   }
   nameError.innerHTML = 'valid';
    return true;
}

https://qctjublfyvudocs.google.com/forms/d/e/1FAlpQLScAFon7rdx2lQS6A4JgqQctJublfyVUxm7v-hTS3jvuxrm_w/viewform?usp=pp_url
function validatePassword() {
    var human = document.getElementById("password").value;

    if(human.length === 0){
        nameError.innerHTML = 'password is required';
        return false;
    }
    if(human.length <=3){
        nameError.innerHTML = 'full name';
        return false;
    }
    
    if(!human.match(/^[A-Za-z]*$/)){
        nameError.innerHTML = 'alphabet is needed';
        return false;
    }
    nameError.innerHTML = 'valid';
    return true;
} */

var nameError = document.getElementById("first-error");
var phoneError = document.getElementById("phone-error");
var messageError = document.getElementById("message-error");
var passwordError = document.getElementById("pass-error");
var emailError = document.getElementById("email-error");
var submitError = document.getElementById("submit-error");


function passName(){
    var name = document.getElementById("contact-name").value;

    if(name.length === 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if ( name.length <=3){
        nameError.innerHTML = "write name in full";
        return false;
    }
    
    nameError.innerHTML = "valid";
    return true;
}

function validatePhone(){
    var mirabel = document.getElementById("phone-number" ).value;

    if (mirabel.length == 0){
        phoneError.innerHTML = "Phone no is required";
        return false;
    }
    
   if (mirabel.length !==11){
       phoneError.innerHTML = "Phone number should be 11 digits";
     
       return false;
   }
   if(!mirabel.match(/^[0-9]{11}$/)){
    phoneError.innerHTML = "only digits please";
    return false;
   }
    phoneError.innerHTML = "valid";
    return true;
}

function validateEmail(){
    var email = document.getElementById("contact-email").value;

    if(email.length == 0){
        emailError.innerHTML ="Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email invalid';
        return false;
    }
    emailError.innerHTML = "valid";
    return true;
}
function validateMessage(){
    var beauty = document.getElementById("message").value;
    var like = 30;
    var jump = like - beauty.length;

    if(jump> 0){
        messageError.innerHTML =jump  + " more character is required";
        return false;
    }
    messageError.innerHTML ="valid";
    return true;
}
function  validateform(){
    if (!passName() || !validatePhone() || !validateEmail() || !validateMessage() ){
        submitError.style.display = "block";
        submitError.innerHTML = "please fix error to submit";
        setTimeout(function(){
            submitError.style.display = "none";},3000 );
        return false;
       
    }
    else{
           return true; 
    }
}

