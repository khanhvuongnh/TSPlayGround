/* -------------------------------------------------------------------------- */

/**
 * Input: [13, 67, 47, 83, 97]
 * Output: true
 * 
 * Input: [34, 71, 29, 93, 70]
 * Output: false
 * 
 * Input: []
 * Output: false
 */

let isPrimeNumber = (num: number): boolean =>
  num >= 2 && ![...Array(Math.floor(Math.sqrt(num)))].map((_, i) => i + 2).slice(0, -1).some(i => num % i === 0);

let checkAllPrimeNumbers = (arr: number[]): boolean =>
  arr.length !== 0 && arr.every(i => isPrimeNumber(i));

// console.log(checkAllPrimeNumbers([13, 67, 47, 83, 97]));
// console.log(checkAllPrimeNumbers([34, 71, 29, 93, 70]));
// console.log(checkAllPrimeNumbers([]));

/* -------------------------------------------------------------------------- */
