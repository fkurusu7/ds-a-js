/** Sliding Window Introduction
  
  Sliding window problems are a variant of the same direction two pointers problems. 
  The function performs on the entire interval between the two pointers instead 
  of only at the two positions. Usually, we keep track of the overall result of the window, 
  and when we "slide" the window (insert/remove an item), we simply manipulate the result 
  to accommodate the changes to the window. 
  
  Time complexity wise, this is much more efficient as we do not recalculate the overlapping 
  intervals between two windows over and over again. 
  We try to reduce a nested loop into two passes on the input (one pass with each pointer).

  ************************************************************************************************
  ************************************************************************************************

  Fixed Size Sliding Window

  Given an array (list) nums consisted of only non-negative integers, 
  find the largest sum among all subarrays of length k in nums.

  Input nums = [1, 2, 3, 7, 4, 1], k = 3, 
  Output 14 
  Explanation: largest length 3 subarray sum is given by [3, 7, 4] which sums to 14.
 */

function fixedLasrgestSum(nums, k) {
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }
  let maxSum = windowSum;

  for (let i = k; i < nums.length; i++) {
    windowSum = windowSum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(fixedLasrgestSum([1, 2, 3, 7, 4, 1], 3)); // 14
console.log(fixedLasrgestSum([1, 2, 3, 4, 5, 6], 3)); // 15
console.log(fixedLasrgestSum([1, 2, 3, 4, 5, 6], 2)); // 11
