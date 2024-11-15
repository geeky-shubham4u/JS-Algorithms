function isPrime(n) {
    if (n <= 1) return false;  // 0 and 1 are not prime
    if (n === 2) return true;  // 2 is the only even prime number
    if (n % 2 === 0) return false;  // Exclude even numbers > 2

    // Only check odd numbers from 3 to sqrt(n)
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }

    return true;
}


console.log(isPrime(5));
console.log(isPrime(10));
console.log(isPrime(13));