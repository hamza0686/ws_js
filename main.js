const reverseString = str => str.split('').reverse().join('');
const countCharacters = str => str.length;
const findMaximum = arr => Math.max(...arr);
const findMinimum = arr => Math.min(...arr);
const factorial = n => (n <= 1 ? 1 : n * factorial(n - 1));
const isPrime = n => n > 1 && ![...Array(n).keys()].slice(2).some(i => n % i === 0);
const fibonacci = n => Array.from({ length: n }, (_, i) => i < 2 ? i : fibonacci(i - 1) + fibonacci(i - 2));
console.log(reverseString('hello'));            // 'olleh'
console.log(countCharacters('hello world'));   // 11
console.log(capitalizeWords('hello world'));   // 'Hello World'

console.log(findMaximum([1, 2, 3, 4]));        // 4
console.log(findMinimum([1, 2, 3, 4]));        // 1
console.log(sumArray([1, 2, 3, 4]));           // 10
console.log(filterArray([1, 15, 7, 20], x => x > 10));  // [15, 20]

console.log(factorial(5));                     // 120
console.log(isPrime(11));                      // true
console.log(fibonacci(5));                     // [0, 1, 1, 2, 3]
//a little help from chat gpt i hope you dosent mind mr karim
