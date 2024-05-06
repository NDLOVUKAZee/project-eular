//1st Problem
const textOne = document.getElementById("firstBox");
const buttonOne = document.getElementById("firstBtn");
const outpOne = document.getElementById("firstOut");

function firstFun() {
    let sum = 0;

    for (let i = 1; i < textOne.value; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    outpOne.innerHTML = "The sum of these multiples is " + sum;
    
}


//2nd Problem
const textTwo = document.getElementById("secBox");
const buttonTwo = document.getElementById("secBtn");
const outpTwo = document.getElementById("secOut");
function secFun() {
    
    outpTwo.innerHTML = "The sum of these multiples is " + textTwo.value;
}


//3rd Problem
const textThree = document.getElementById("thirdBox");
const buttonThree = document.getElementById("thirdBtn");
const outpThree = document.getElementById("thirdOut");
function thirdFun() {
    
    outpThree.innerHTML = "The sum of these multiples is " + textThree.value;
}
