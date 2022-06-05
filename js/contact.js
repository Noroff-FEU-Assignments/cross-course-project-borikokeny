const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const successMessage = document.querySelector(".thankyou-message");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
        successMessage.innerHTML = "Thank you for your registration!";
    } else {
        firstNameError.style.display = "block";
    }
    
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none"; 
    } else {
        emailError.style.display = "block";
    }
        
    console.log("hi");
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}