// accepting input from users
let name =prompt ("enter your name")
console.log("Hello" + name + "!")

let age = prompt ("enter your age:");
console.log("your age is" + age);

let marks = Number (prompt("Enter marks:"));
let result = marks = 50 ? "pass" : "fail";
console.log(result)

let num = Number(prompt("Enter your age:"));
if (num>=18) {console.log("You can vote")
    
} else {console.log("You cannot vote")
    
}

let value1 = 7.5;
console.log(Math.floor(value1));

let value2 = 7.8;
console.log(Math.ceil(value2));

let value3 = 7.5;
console.log(Math.round(value3));

let guess = Number(prompt("Enter no between 1-10"));
let randomNum = Math.floor(Math.random() *5 + 1);
console.log(guess --- randomNum ? "win":"lose"); 