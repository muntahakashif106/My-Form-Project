 message = "Good Global"
function hello1() {
    let message1 = "Good morning"
    
         let message = "Good Afternoon"
       console.log("Hello 1: " + message)
        let c = function hello2() {
            console.log("I am c" + message)
        }
        return c
    
     console.log(message)
}

c = hello1()
c()

function init() {
    var name = `Mozilla`; // name is alocal variable created by init 
    function displayName() {
    // dispalyName() is the inner function, a clouser
    console.log(name); // use variable declared in the parent function 
    }
     return displayName;
}
let c = init();
c()


const x = () => {
    let a = 1 
    console.log(a)
    const y = () => {
    let a = 2
     console.log(a)
     const z = () => {
    let a = 3 
     console.log(a)
    }
     z()
 }
    y()
}
x() 
