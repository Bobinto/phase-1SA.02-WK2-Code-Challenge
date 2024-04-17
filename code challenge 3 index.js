function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}

function filterPrimeNumbers(inputArray) {
    return inputArray.filter(num => isPrime(num));
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const outputArray = filterPrimeNumbers(inputArray);
console.log(outputArray); 
