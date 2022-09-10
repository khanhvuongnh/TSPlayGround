/* -------------------------------------------------------------------------- */

// Input: stones = [5,1,2,4,3]
// Output: false
// Assuming both players play optimally, return true if Alice wins and false if Bob wins.
// Explanation: Bob will always win. One possible way for Bob to win is shown below:
// - Turn 1: Alice can remove the second stone with value 1. Sum of removed stones = 1.
// - Turn 2: Bob removes the fifth stone with value 3. Sum of removed stones = 1 + 3 = 4.
// - Turn 3: Alices removes the fourth stone with value 4. Sum of removed stones = 1 + 3 + 4 = 8.
// - Turn 4: Bob removes the third stone with value 2. Sum of removed stones = 1 + 3 + 4 + 2 = 10.
// - Turn 5: Alice removes the first stone with value 5. Sum of removed stones = 1 + 3 + 4 + 2 + 5 = 15.
// Alice loses the game because the sum of the removed stones (15) is divisible by 3. Bob wins the game.

function stoneGameIX(stones: number[]): boolean {
  let player: boolean = true;
  let total: number = 0;

  while (stones.length > 0) {
    let isStoneTaken: boolean = false;
    for (let i = 0; i < stones.length; i++) {
      const stone = stones[i];
      if ((total + stone) % 3 !== 0) {
        total += stone;
        stones.splice(i, 1);
        isStoneTaken = true;
        break;
      }
    }

    if (!isStoneTaken)
      return !player;
    else
      player = !player;
  }

  return player;
};

console.log(stoneGameIX([5, 1, 2, 4, 3]));

/* -------------------------------------------------------------------------- */

/**
 * KEY: Anh cả đi cuối
 * INPUT: OVJ CB EFO
 */

let privateMessage1 = (msg: string): string => {
  const src: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const index = src.indexOf('Z');
  return msg.split('').map(item => item !== ' ' ? src[src.indexOf(item) + index] : ' ').join('');
}

// console.log(privateMessage1('OVJ CB EFO'));

/* -------------------------------------------------------------------------- */

/**
 * KEY: O tròn như quả trứng Gà
 * INPUT: BIG VQVP
 */

let privateMessage2 = (msg: string): string => {
  const src: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const index = src.lastIndexOf('G') - src.indexOf('O');
  return msg.split('').map(item => item !== ' ' ? src[src.indexOf(item) + index] : ' ').join('');
}

// console.log(privateMessage2('BIG VQVP'));

/* -------------------------------------------------------------------------- */

/**
 * KEY: Chặt đôi thanh sắt để đặt đường ray
 * INPUT: CUNB_E_UN_HIMINUIOHA_ILNDOGTO_O_GO_I
 */

let privateMessage3 = (msg: string): string => {
  const msg2: string = msg.split('').splice(msg.length / 2).join('');
  msg = msg.split('').splice(0, msg.length / 2).join('');
  let result: string[] = [];
  for (let index = 0; index < msg.length; index++) {
    result.push(msg[index] + msg2[index]);
  }
  return result.join('').replace(/_/g, ' ');
}

// console.log(privateMessage3('CUNB_E_UN_HIMINUIOHA_ILNDOGTO_O_GO_I'));

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