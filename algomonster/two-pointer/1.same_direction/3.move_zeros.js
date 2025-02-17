/** Move Zeros
  Given an array of integers, move all the 0s to the back of the array 
  while maintaining the relative order of the non-zero elements. 
  Do this in-place using constant auxiliary space.

  Input: [1, 0, 2, 0, 0, 7]
  Output: [1, 2, 7, 0, 0, 0]

 */

function moveZeros(arr) {
  let slow = 0;

  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[fast] !== 0) {
      [arr[slow], arr[fast]] = [arr[fast], arr[slow]];
      slow++;
      console.log(arr);
    }
  }
  return arr;
}

console.log(moveZeros([1, 0, 2, 0, 0, 7])); // [1, 2, 7, 0, 0, 0]

// Inefficient Solution:
function moveZerosIn(nums) {
  // copy to new array
  const nonZeros = [];
  for (const n of nums) {
    if (n !== 0) nonZeros.push(n);
  }

  // Copy back
  let i = 0;
  for (; i < nonZeros.length; i++) {
    nums[i] = nonZeros[i];
  }
  // fill the rest with zeros
  for (; i < nums.length; i++) {
    nums[i] = 0;
  }
}
let nums = [1, 0, 2, 0, 0, 7];
moveZerosIn(nums);
console.log(nums);
// [ 1, 2, 7, 0, 0, 0 ]

function moveZerosCopyInPlace(nums) {
  let i = 0;
  // copy in place
  for (const n of nums) {
    if (n !== 0) {
      nums[i] = n;
      i++;
    }
  }
  // fill the rest with zeros
  for (; i < nums.length; i++) {
    nums[i] = 0;
  }
}
nums = [1, 0, 2, 0, 0, 7];
moveZerosCopyInPlace(nums);
console.log(nums);
// Array(6) [ 1, 2, 7, 0, 0, 0 ]
