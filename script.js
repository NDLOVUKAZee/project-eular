function sumMultiplesOf3And5() {
   
    let sum = 0;
    for (let i = 1; i < limit; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }
  
  
  const limit = 1000;
  const result = sumMultiplesOf3And5(limit);
  console.log("The sum of all multiples of 3 or 5 below", limit, "is:", result);


  function evenFibonacciSum() {
   
    let sum = 0;
    let fib1 = 1;
    let fib2 = 2;

    while (fib2 <= limit) {
        if (fib2 % 2 === 0) {
            sum += fib2;
        }
        let nextFib = fib2;
        fib2 = fib1 + fib2;
        fib1 = nextFib;
    }

    return sum;
}


const limit =4000000;
const result = evenFibonacciSum(limit);
console.log("The sum of even Fibonacci numbers up to", limit, "is:", result);

document.getElementById().addEventListener("click", function(){

});

document.getElementById().addEventListener("click", function(){
    
});

document.getElementById().addEventListener("click", function(){
    
});

document.getElementById("submitButton").addEventListener("click", function() {
    alert("This button is clicked")
    
    const inputValue = document.getElementById("textInput").value;

    
    document.getElementById("displayParagraph").textContent = "Input value: " + inputValue;


function largestPrimeFactor(n) {
    let largestPrime = 1;
    
    
    while (n % 2 === 0) {
        largestPrime = 2;
        n = Math.floor(n / 2);
    }
    
    
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            largestPrime = i;
            n = Math.floor(n / i);
        }
    }
    
    
    if (n > 2) {
        largestPrime = n;
    }
    
    return largestPrime;
}


const number = 600851475143;
console.log(`Largest prime factor of ${number} is:`, largestPrimeFactor(number));
})