/** Two Sum Sorted
  Given an array of integers sorted in ascending order, find two numbers 
  that add up to a given target. Return the indices of the two numbers in 
  ascending order. You can assume elements in the array are unique and there 
  is only one solution. Do this in O(n) time and with constant auxiliary space.
  
  Input: [2, 3, 4, 5, 8, 11, 18], 8
  Output: 1 3

 */

function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum > target) {
      right -= 1;
    } else {
      left += 1;
    }
  }

  return -1;
}

console.log(twoSumSorted([2, 3, 4, 5, 8, 11, 18], 8)); // ==> [1, 3]
console.log(twoSumSorted([2, 3, 4, 5, 8, 11, 18], 13)); // ==> [0, 5]
console.log(twoSumSorted([2, 3, 4, 5, 8, 11, 18], 26)); // ==> [4, 6]
