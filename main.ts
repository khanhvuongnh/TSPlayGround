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

let checkAllPrimeNumbers = (input: number[]): boolean =>
  input.length !== 0 && input.every(i => isPrimeNumber(i));

// console.log(checkAllPrimeNumbers([13, 67, 47, 83, 97]));
// console.log(checkAllPrimeNumbers([34, 71, 29, 93, 70]));
// console.log(checkAllPrimeNumbers([]));

/* -------------------------------------------------------------------------- */

/**
 * Input: 'adcb'
 * Output: 'abcd'
 */

let sortString = (input: string): string =>
  input.split('').sort().join('');

// console.log(sortString('adcb'));

/* -------------------------------------------------------------------------- */

/**
 * Input: [7, 2, 5, 1, 4, 3, 9, 6, 15, 22]
 * Output: Sum of odd numbers: 40
 *         Sum of even numbers: 34
 */

let sumOfOddAndEvenNumbers = (input: number[]): void => {
  console.log('Sum of odd numbers: ' + input.filter(item => item % 2 !== 0).reduce((a, b) => (a + b)));
  console.log('Sum of even numbers: ' + input.filter(item => item % 2 === 0).reduce((a, b) => (a + b)));
}

// sumOfOddAndEvenNumbers([7, 2, 5, 1, 4, 3, 9, 6, 15, 22]);

/* -------------------------------------------------------------------------- */