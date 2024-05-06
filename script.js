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
    let sum = 0;
    let prev = 1;
    let curr = 2;

    while (curr <= textTwo.value) {
        if (curr % 2 === 0) {
            sum += curr;
        }
        let temp = curr;
        curr += prev;
        prev = temp;
    }

    outpTwo.innerHTML = "The sum of the even-valued terms: " + sum;
}

//3rd Problem
const textThree = document.getElementById("thirdBox");
const buttonThree = document.getElementById("thirdBtn");
const outpThree = document.getElementById("thirdOut");
function thirdFun(num) {
    let largestPrime = 1;
    
        while (num % 2 === 0) {
        largestPrime = 2;
        num = Math.floor(num / 2);
    }
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        while (num % i === 0) {
            largestPrime = i;
            num = Math.floor(num / i);
        }
    }
    
    if (num > 2) {
        largestPrime = num;
    }

   
    outpThree.innerHTML = "The largest prime factor of the inserted number is " + largestPrime;

}
