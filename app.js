// 9 - 3 = 6

// 1 number

var myAge = 29;

// 2 string
var myName = "Alastor";

// 3 boolean
var isRainy = false;

// 4 null
var myBrother = null;

// 5 underfined
var myDog;
// 6 object  {} = []  array
var phone = {
  model: "14 PRO",
  color: "black",
  price: 100 * 9, //900
  owner: myName, //  Alastor
};
// ------CONDITIONS------(if, switch)
// готовые Функции (alert, promt, confirm)

var color = "green";
// операторы (=, ==, ===, !, ??, &&, ||)
// red === red -> true
if (color === "red") {
  console.log("STOP");
} else if (color === "green") {
  // true
  console.log("Go ...");
} else if (color === "yellow") {
  //true
  console.log("WAIT ... ");
} else {
  console.log("No COLOR");
}

var operation = "+";
if (operation === "+") {
  console.log(100 + 50);
} else if (operation === "-") {
  console.log(100 - 50);
} else if (operation === "*") {
  console.log(100 * 50);
} else if (operation === "/") {
  console.log(100 / 50);
}

var temp = 35;
if (temp > 41) {
  console.log("КУУУН ЫСЫККЫ.....");
} else if (temp > 35 && temp < 40) {
  console.log("КУУУН ЫСЫККЫ ..... АбдААн Ысыыкы");
}

// alert(myNameIs )

var text = prompt("атынды жаз");

if (text.toLowerCase() === "akylai") {
  console.log("Yes I am");
}

//Weeks

var someText = "Monday";

switch (someText) {
  case "Monday":
    console.log("Понедельник");
    break;
  case "6":
  case   6:
    console.log("суббота");
    break;
  case "Sunday":
    console.log("Воскресенье");
    break;
  default:
    break;
}


if (!true){
    console.log('TRUE----');
}else{
    console.log('FALSE----');
}

var userDB = {
    name: 'Akylai',
    email: 'bekmyrzakovaa@gmail.com',
    password: 'gwerty00'
}