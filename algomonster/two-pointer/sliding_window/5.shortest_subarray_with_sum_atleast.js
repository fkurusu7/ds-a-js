/** Flexible Size Sliding Window

  Let's continue on finding the sum of subarrays. 
  This time given a positive integer array nums, 
  find the length of the shortest subarray such that
  the subarray sum is at least target. 
  
  Input: nums = [1, 4, 1, 7, 3, 0, 2, 5] and target = 10, 
  Output: 2
  Explanation: The smallest window with the sum >= (at least) 10 is 
    [7, 3] with length 2.
*/

function shortestSubarrayWithSum(nums, target) {
  let left = 0;
  let windowSum = 0;
  let length = nums.length;

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];
    while (windowSum >= target) {
      length = Math.min(length, right - left + 1);
      windowSum -= nums[left];
      left++;
    }
  }

  return length;
}

console.log(shortestSubarrayWithSum([1, 4, 1, 7, 3, 0, 2, 5], 10)); // 2
console.log(shortestSubarrayWithSum([1, 4, 1, 7, 3, 0, 2, 5], 15)); // 4
console.log(shortestSubarrayWithSum([1, 4, 1, 7, 3, 0, 2, 5], 5)); // 1
