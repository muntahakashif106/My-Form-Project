function greet(name) {
return "Hello" + name;
}

function higherOrder(fn) {
    console.log(fn("Ali"));
}

higherOrder(greet);

function multiplier(x) {
    return function (y) {
        return x * y;
    };
}
const double = multiplier(2); 
console.log(double(5)); //10