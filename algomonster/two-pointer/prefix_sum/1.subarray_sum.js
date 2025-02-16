/** PREFIX SUM introduction

  Its primary goal is to allow for constant-time range sum queries on an array.

  What is Prefix Sum?

  The prefix sum of an array at index 'i' is the sum of all numbers from index '0' to 'i'. 
  By computing and storing the prefix sum of an array, you can easily answer queries about 
  the sum of any subarray in constant time.
 */

// Exmaple for Prefix Sum in javascript

function prefixSumArray(arr) {
  let prefixSum = [0];

  for (const num of arr) {
    prefixSum.push(prefixSum[prefixSum.length - 1] + num);
  }
  return prefixSum;
}

console.log(prefixSumArray([1, 2, 3, 4, 5])); // ==> [0, 1, 3, 6, 10, 15]

/** 
    Prefix Sum: Ideal for quick range sum queries on static arrays.
    Sliding Window: Better for problems involving contiguous subarrays 
      with specific conditions or sizes, e.g., maximum sum of subarrays of size 'k'.
 */

/** Common Subarray Problems

  Subarray with Given Sum: Find a contiguous subarray that sums to a target value.
  Zero Sum Subarrays: Locate subarrays that sum to zero.
  Longest Subarray with Sum k: Find the longest subarray with a specific sum.
  Smallest Subarray with Sum > X: Identify the smallest subarray whose sum exceeds a given value.
  Maximum Sum of Subarrays of Size k: Find the maximum sum among all subarrays of a fixed size.
  Suffix Sum: Similar to prefix sum, but calculated from the end of the array.

  EXERCISE:
    Suffix Sum
      Just as we have a prefix sum that calculates the sum from the beginning to a specific index, 
      we can also calculate a suffix sum, which calculates the sum from a particular index 
      to the end of the array.

      Given an array of integers and an integer target, find a subarray that sums to 
      target and return the start and end indices of the subarray.

      Input: arr: [1, -20, -3, 30, 5, 4] target: 7
      Output: 1 4
      Explanation: -20 - 3 + 30 = 7. The indices for subarray [-20,-3,30] is 1 and 4 (right exclusive).


    array = [1, 3, -3, 8, 5, 7]
*/

function suffixSum(arr, target) {
  // prefixSum 0 happens when we have an empty array
  const prefixSums = new Map([[0, 0]]);
  let currSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];
    const diff = currSum - target;
    if (prefixSums.has(diff)) {
      return [prefixSums.get(diff), i + 1];
    }
    prefixSums.set(currSum, i + 1);
    console.log(prefixSums);
  }
  return [];
}

console.log(suffixSum([1, -20, -3, 30, 5, 4], 7)); // ==> [1, 4]
