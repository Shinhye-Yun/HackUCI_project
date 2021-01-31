var name;
var sirname;
var dob;
var pet;
var email
var phone;

function getName() {
    event.preventDefault();
    name = document.getElementById("name").value;
    console.log(name);
}

function getEmail() {
    event.preventDefault();
    email = document.getElementById("email").value;
    console.log(email);
}

function getPhone() {
    event.preventDefault();
    phone = document.getElementById("phone").value;
    console.log(phone);
}

function getSns() {
    event.preventDefault();
    sns = document.getElementById("sns").value;
    console.log(sns);
}

function getInfo() {
    name = document.getElementById("name").value;
    sirname = document.getElementById("sirname").value;
    dob = document.getElementById("dob").value;
    pet = document.getElementById("pet").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;

    console.log(name + " " + sirname + " " + dob + " " + pet + " " + email + " " + phone);
}
