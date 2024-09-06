const Name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
var passwordPattern = /^[a-zA-Z].*#$/; 
const country = document.getElementById('country');



form.addEventListener('submit', (nirmal) => {
    let messages = [];

    if (Name.value === '' || Name.value == null) {
        messages.push('Name is required');
    }

    if (email.value === '' || email.value == null) {
        messages.push('You must enter your email');
    }

    if (password.value.length < 8) {
        messages.push('Password must be at least 8 characters long');
    }

    if (password.value.length > 20) {
        messages.push('Password must be less than 20 characters');
    }

    if (!password.value.match(passwordPattern)) {
        messages.push('Password must start with a letter and end with #');
    }
    
    const gender = document.querySelector('input[name="gender"]:checked');
    if(!gender){
        messages.push("gender must be selected");
    }
    
    if(country.value === '' || country.value == null){
        messages.push("country must be selected")
    }

    if (messages.length > 0) {
        nirmal.preventDefault(); 
        errorElement.innerText = messages.join(', ');
    }
    
});
