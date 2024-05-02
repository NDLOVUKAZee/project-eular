

  const inpt = document.getElementById("#txte");
  const buton = document.getElementById("#bnt");

  buton.addEventListener('click', function(){
    let x = inpt.value;
    console.log(x);

  });

  
 /* const result = sumMultiplesOf3And5(limit);
  console.log("The sum of all multiples of 3 or 5 below", limit, "is:", result);
  const answer = parseInt(document.getElementById('answer').value);
  if (answer === result){
    alert("Great!!!!!")
  }else{
    alert("Wrong")
  }*/

  


  /*function evenFibonacciSum() {
   
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


document.getElementById("submitButton").addEventListener("click", function() {
alert("Ahhh")

    const inputValue = document.getElementById("textInput").value;

    
    document.getElementById("displayParagraph").textContent = "Input value: " + inputValue;

}
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

}*/