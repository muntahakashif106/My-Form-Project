let day = 5 ;
switch (day) {
     case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesdayday")
        break;
     case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;  
    case 7:
        console.log("Sunday")
        break;

    default:
        console.log("Invalid day")
        break;
}

// simple calculator
let operator = "+" ;
let a = 5 ; 
let b = 3 ;
switch (operator) {
        case "+":
            console.log(a + b)
            break;
         case "-":
            console.log(a - b)
            break;
        default:
        console.log("Unknown operator")
}

// string methods
let name = "aqsa"
console.log(name.toUpperCase());

let sentence = "JavaScript is";
console.log(sentence.includes("good")); // true

// string slicing
let fullName = "Aqsa Danish"
let firstName = fullName.slice(0,5);

console.log(firstName);

let phone = "0123456789"
let lastDigits = phone.slice(-7);

console.log(lastDigits);

//type conversion Number vs string
console.log(5 == "5"); // true
console.log(5 === "5"); // false

// chaining method 
let input = "    hello world   "
let result =input.trim().toUpperCase();
console.log(result);