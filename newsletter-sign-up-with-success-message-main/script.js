var emailField = document.getElementById("email");
var emailError = document.getElementById("email-error");
var submitButton = document.getElementById("button");
var containerBox = document.getElementById("container");
var popupBox = document.getElementById("popup");
var dismissButton = document.getElementById("btn");

let validateEmail = () => {
    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        return false;
    }

    return true;
};

submitButton.addEventListener('click', function(){
    if(validateEmail() === false){
        emailError.innerHTML = "Valid email required";
        emailField.style.backgroundColor = "rgb(255, 97, 85)";
        emailField.style.border = "1px";
    }
    
    else{
        emailError.innerHTML = "";
        emailField.style.backgroundColor = "white";
        containerBox.style.visibility = "hidden";
        popupBox.style.visibility = "visible";
    }
});

dismissButton.addEventListener('click', function(){
    containerBox.style.visibility = "visible";
    popupBox.style.visibility = "hidden";
});

dismissButton.addEventListener('mouseleave')

submitButton.querySelector('#wrapper text').id = '#inputEl';


submitButton.childNodes.visibility = 'hidden';