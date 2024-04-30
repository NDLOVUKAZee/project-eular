const name = document.querySelector("#name");


name.innerText = "hello";
function largestPrimeFactor(n) {
    let largestPrime = 1;
    
    // Start dividing n by 2, while n is even
    while (n % 2 === 0) {
        largestPrime = 2;
        n = Math.floor(n / 2);
    }
    
    // Now n must be odd, so we can start checking odd numbers
    // up to the square root of n
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            largestPrime = i;
            n = Math.floor(n / i);
        }
    }
    
    // If n is a prime number greater than 2, then it's the largest prime factor
    if (n > 2) {
        largestPrime = n;
    }
    
    return largestPrime;
}

// Example usage:
const number = 13195;
console.log(`Largest prime factor of ${number} is:`, largestPrimeFactor(number));