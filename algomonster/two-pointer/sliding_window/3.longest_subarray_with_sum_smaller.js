/** Flexible Size Sliding Window - Longest

  Recall finding the largest size k subarray sum of an integer array in Largest Subarray Sum. 
  What if we don't need the largest sum among all subarrays of fixed size k, but instead, 
  Find the length of the longest subarray with sum smaller than or equal to a target?

  Input: nums = [1, 6, 3, 1, 2, 4, 5] - target = 10, 
  Output: 4  
  Explanation: the longest subarray that does not exceed 10 is [3, 1, 2, 4], length of [3, 1, 2, 4] is 4.
*/

// ****************************************************************************** */
// Brute Force: O(n^2) time complexity
// Plan:
// 1. Initialize the maximum length of the subarray to 0.
// 2. Iterate over the input array.
// 3. For each element, iterate over the array starting from that element.
// 4. Calculate the sum of the subarray.
// 5. If the sum is less than or equal to the target, update the maximum length of the subarray.
// 6. Return the maximum length of the subarray.

function longestSumSmaller(nums, target) {
  let maxArrayLength = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    // Start j from i to consider subarrays startingg at i
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum <= target) {
        maxArrayLength = Math.max(maxArrayLength, j - i + 1);
      } else {
        // Break inner loop if sum exceeds the target
        break;
      }
    }
  }

  return maxArrayLength;
}

console.log(longestSumSmaller([1, 6, 3, 1, 2, 4, 5], 10)); // 4

// ****************************************************************************** */
// Two Pointer: O(n) time complexity
// Plan:
// 1. Initialize the maximum length of the subarray to 0.
// 2. Initialize the left pointer to 0.
// 3. Initialize the sum of the subarray to 0.
// 4. Iterate over the input array using the right pointer.
// 5. Add the element at the right pointer to the sum.
// 6. If the sum is greater than the target, move the left pointer to the right until the sum is less than or equal to the target.
// 7. Update the maximum length of the subarray.
// 8. Return the maximum length of the subarray.

function subarraySumLongest(nums, target) {
  let length = 0;
  let windowSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];

    while (windowSum > target) {
      windowSum -= nums[left];
      left++;
    }
    length = Math.max(length, right - left + 1);
  }

  return length;
}

console.log(subarraySumLongest([1, 6, 3, 1, 2, 4, 5], 10)); // 4
console.log(subarraySumLongest([1, 10, 34, 5, 6, 3, 1, 2, 4, 5], 7)); // 4
