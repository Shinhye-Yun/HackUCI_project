var name;
var surname;
var dob;
var pet;
var email
var phone;

function getInfo() {
    name = document.getElementById("name").value;
    surname = document.getElementById("surname").value;
    dob = document.getElementById("dob").value;
    pet = document.getElementById("pet").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;

    console.log(name + " " + surname + " " + dob + " " + pet + " " + email + " " + phone);
}
