/**
 * First Element Not Smaller Than Target
 *
 * Given an array of integers sorted in increasing order and a target, find the index of the first
 * element in the array that is larger than or equal to the target.
 * Assume that it is guaranteed to find a satisfying number.
 *
 * Input:
 *  arr = [1, 3, 3, 5, 8, 8, 10]
 *  target = 2
 * Output: 1
 * Explanation: The first element larger than 2 is 3, which has index 1.
 *
 * Input:
 *  arr = [2, 3, 5, 7, 11, 13, 17, 19]
 * target = 6
 * Output: 3
 * Explanation: The first element larger than 6 is 7, which has index 3.
 */

function firstNotSmaller(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let boundaryIndex = -1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    if (nums[mid] >= target) {
      right = mid - 1;
      boundaryIndex = mid;
    } else {
      left = mid + 1;
    }
  }

  return boundaryIndex;
}

console.log(firstNotSmaller([2, 3, 5, 7, 11, 13, 17, 19], 6));
console.log(firstNotSmaller([1, 3, 3, 5, 8, 8, 10], 2));
