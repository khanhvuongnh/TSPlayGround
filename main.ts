/* -------------------------------------------------------------------------- */

/**
 * Example 1:
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 * 
 * Example 2:
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 * 
 * Example 3:
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 */

let checkIndexOf = (nums: number[], target: number): number => {
  return nums.indexOf(target) > 0 ? nums.indexOf(target) : nums.map(v => v > target).indexOf(true) > 0 ? nums.map(v => v > target).indexOf(true) : nums.length;
}

// console.log(checkIndexOf([1, 3, 5, 6], 5));
// console.log(checkIndexOf([1, 3, 5, 6], 2));
// console.log(checkIndexOf([1, 3, 5, 6], 7));

/* -------------------------------------------------------------------------- */

/**
* Input: nums = [1,2,3,1]
* Output: true
* 
* Input: nums = [1,2,3,4]
* Output: false
* 
* Input: nums = [1,1,1,3,3,4,3,2,4,2]
* Output: true
*/

let checkDuplicates = (nums: number[]): boolean => {
  return nums.some((v, i, a) => a.indexOf(v) !== i);
}

// console.log(checkDuplicates([1, 2, 3, 1]));
// console.log(checkDuplicates([1, 2, 3, 4]));
// console.log(checkDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

/* -------------------------------------------------------------------------- */

/**
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * 
 * Input: nums = [-1,-100,3,99], k = 2
 * Output: [3,99,-1,-100]
 */

let splitArray = (nums: number[], k: number): number[] => {
  return nums.slice(-k).concat(nums.slice(0, nums.length - k));
}

// console.log(splitArray([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(splitArray([-1, -100, 3, 99], 2));

/* -------------------------------------------------------------------------- */

/**
 * Input: [1,2,4], [1,3,4,5] 
 * Output: [1,1,2,3,4,4,5]
 */

let mergeArrays = (arr1: number[], arr2: number[]): number[] => {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

// console.log(mergeArrays([1, 2, 4], [1, 3, 4, 5]));

/* -------------------------------------------------------------------------- */

/**
 * Đếm số lượng số chia hết cho 3 
 * Input: 1, 1000
 * Output: 333
 */

let countNumberOfDivisibleBy3 = (from: number, to: number): number => {
  return Array.from({ length: to }, (_, i) => i + 1).filter(x => x >= from && x % 3 === 0).length;
}

// console.log(countNumberOfDivisibleBy3(1, 1000));

/* -------------------------------------------------------------------------- */

/**
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 */

let getPrefix = (arr: string[]): string => {
  let result: string = "";
  let minLength: number = Math.min(...arr.map(item => item.length));

  for (let i = 0; i < minLength; i++) {
    let currentChar: string[] = [];
    arr.forEach(item => currentChar.push(item[i]));
    if (currentChar.filter((v, i, a) => a.indexOf(v) === i).length === 1) {
      result += arr[0][i];
    }
  }

  return result;
}

// console.log(getPrefix(["dog", "racecar", "car"]));

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