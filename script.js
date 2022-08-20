const error_1 = document.querySelector(".error-1");
const error_2 = document.querySelector(".error-2");
const error_3 = document.querySelector(".error-3");
const error_4 = document.querySelector(".error-4");
const error_5 = document.querySelector(".error-5");
const name_c = document.querySelector("#name");
const card_nbr = document.querySelector("#c-nbr");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const cvc = document.querySelector("#cvc");
const name_holder = document.querySelector(".name");
const card_nbr_holder = document.querySelector(".card-nbr");
const month_holder = document.querySelector(".m");
const year_holder = document.querySelector(".y");
const cvc_holder = document.querySelector(".cvc");
const form = document.querySelector(".form");
const thanks = document.querySelector(".thank");
const reset = document.querySelector(".continue");

let valid_1, valid_2, valid_3, valid_4, valid_5 = false;
let letters =  /^[a-zA-Z\s]*$/;
let numbers = /^[0-9\s]*$/;


submit.addEventListener("click", function onClick(){
     //name validation
     if(name_c.value == ""){
        name_c.style.borderColor = "red";
        error_1.innerHTML = "Can't be blank";
        error_1.style.opacity ="1"; 
        valid_1 = false; 
    }else if(name_c.value.indexOf(' ') <= 0 || !(name_c.value.match(letters))){
        name_c.style.borderColor = "red";
        error_1.innerHTML = "Please enter a valid name";
        error_1.style.opacity ="1";  
        valid_1 = false;
    }else{
        name_c.style.borderColor = "hsl(279, 6%, 55%)";
        error_1.style.opacity ="0"; 
        valid_1 = true;
    }

    //Card number validation
    if(card_nbr.value == ""){
        card_nbr.style.borderColor = "red";
        error_2.innerHTML = "Can't be blank";
        error_2.style.opacity ="1"; 
        valid_2 = false; 
    }else if(!(card_nbr.value.match(numbers))){
        card_nbr.style.borderColor = "red";
        error_2.innerHTML = "Wrong format, numbers only";
        error_2.style.opacity ="1";  
        valid_2 = false;
    }else if(card_nbr.value.indexOf(' ') < 3 ){
        card_nbr.style.borderColor = "red";
        error_2.innerHTML = "must contain 3 spaces";
        error_2.style.opacity ="1";  
        valid_2 = false;
    }else if(card_nbr.value.length < 19){
        card_nbr.style.borderColor = "red";
        error_2.innerHTML = "Must contain 3 spaces and 16 numbers";
        error_2.style.opacity ="1";  
        valid_2 = false;
    }else{
        card_nbr.style.borderColor = "hsl(279, 6%, 55%)";
        error_2.style.opacity ="0"; 
        valid_2 = true;
    }
     
    //month validation
    if(month.value == ""){
        month.style.borderColor = "red";
        error_3.innerHTML = "Can't be blank";
        error_3.style.marginRight= "0%";
        error_3.style.opacity ="1"; 
        valid_3 = false; 
    }else if(month.value <= 0  || month.value >= 13){
        month.style.borderColor = "red";
        error_3.innerHTML = "Not valid";
        error_3.style.marginRight= "10%";
        error_3.style.opacity ="1";  
        valid_3 = false;
    }else{
        month.style.borderColor = "hsl(279, 6%, 55%)";
        error_3.style.opacity ="0"; 
        valid_3 = true;
    }

    //year validation
    if(year.value == ""){
        year.style.borderColor = "red";
        error_4.innerHTML = "Can't be blank";
        error_4.style.opacity ="1"; 
        valid_4 = false; 
    }else if(year.value < 22 ){
        year.style.borderColor = "red";
        error_4.innerHTML = "Already expired";
        error_4.style.opacity ="1";  
        valid_4 = false;
    }else{
        year.style.borderColor = "hsl(279, 6%, 55%)";
        error_4.style.opacity ="0"; 
        valid_4 = true;
    }

    //cvc validation
    if(cvc.value == ""){
        cvc.style.borderColor = "red";
        error_5.style.opacity ="1"; 
        valid_5 = false;
    }else{
        cvc.style.borderColor = "hsl(279, 6%, 55%)";
        error_5.style.opacity ="0"; 
        valid_5 = true;
    }

    if(valid_1 == true && valid_2 == true && valid_3 == true && valid_4 == true && valid_5 == true){
        name_holder.innerHTML = name_c.value;
        card_nbr_holder.innerHTML = card_nbr.value;
        month_holder.innerHTML = month.value;
        year_holder.innerHTML = year.value;
        cvc_holder.innerHTML = cvc.value;
        form.style.display = "none";
        thanks.style.display = "flex";
    }else{
        form.style.display = "flex";
        thanks.style.display = "none";
    }
    
})

reset.addEventListener("click", function onClick(){
    document.location.reload();
})

    
