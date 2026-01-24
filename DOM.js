const title = document.getElementById("title")
console.log(title);



const paragraphs = document.getElementsByTagName("p")
console.log(paragraphs.length);

const allParas = document.querySelectorAll("p")
console.log(allParas);



const prac = document.querySelector("title");
console.log(title);

title.textContent = "DOM UPDATED"
console.log()

//accepting input from users
let name = prompt("Enter your name");
console.log("Hello" + name + "!")

title.innerHTML ="<span> New Title </span>";
title.style.color = "blue";
title.style.fotsize = "32px";

title.classList.add("active")

btn.addEventListener("Click" , () => {
    title.textContent = "successfully clicked"
});

const newPara = document.createElement("p");
newPara.textContent = "I am new here";
document.body.appendChild(newPara);