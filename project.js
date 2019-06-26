var firstName = promt("what is your first name? ")
var lastName = prompt("what is your last name? ")
var age = prompt("How old are you? ")
var height = prompt("How tall are you in centimeters? ")
var petName = prompt("What is the name of your pet?")

alert("Thank you for all the information")


var nameCon = null;
var ageCon = null;
var heightCon = null;
var petCon = null;

//Name condition
if (firstName[0] === lastName[0]) {
  nameCond = true;
} else {
  nameCond = false;
}

//age condition
if (age > 20 && age < 30) {
  ageCon = true;
}else {
  ageCon = false;
}

//height condition
if (height >= 170) {
  heightCon = true;
} else {
  heightCon = false;
}

//petName condition
if (petName[petName.length-1] === "y") {
  petCon = true
} else {
  petcon = false
}
