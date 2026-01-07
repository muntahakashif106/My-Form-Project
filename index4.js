// Print no's 1 to 5
for (let i=1; i<=5; i++)
if (i % 2 === 0) {
    console.log(i)
}

// Print even number from 1 to 10
for(let i=1; i<=10; i++)
    if(i % 2 === 0){
        console.log(i)
    }

// Sum of Numbers from 1 to 10
let sum = 0;    
for(let i = 1; i<=10; i++){
    sum+=i;
}
 console.log("Sum;" , sum);

// Functions
function greet(){
    console.log("Hello , Welcome");
}

// Function Greeting Users
function greetuser(name) {
    console.log("Hello" + name);
}
greetuser("Zeeshan");

// Add two numbers
function add(a,b) {
    console.log(a + b);
}
add (5,3)
add (10,20)

// Sum using function 
 function calculationSum(limit) {
    let sum = 0;
    for (let i=1; i<=limit; i++){
        sum+= i;
    }
    return sum;
 }
 console.log(calculationSum(10));
 
 let text = "Web Development";
 let number = text.indexOf("Dev");
 console.log(number);

 let fruits = ["apple" , "banana" , "mango"];
 let result = fruits.indexOf("banana");
console.log(result);

let string = "Hello";
console.log(text.indexOf("z"));