/**
 * Find Minimum in Rotated Sorted Array
 *    Prereq: Vanilla Binary Search and Finding the Boundary
 *            with Binary Search
 *
 * A sorted array of unique integers was rotated at an unknown pivot.
 *  For example, [10, 20, 30, 40, 50] becomes [30, 40, 50, 10, 20].
 * ==> Find the index of the minimum element in this array.
 *
 * Input: [30, 40, 50, 10, 20]
 * Output: 3
 * Explanation: The smallest element is 10, and its index is 3.
 *
 * Input: [3, 5, 7, 11, 13, 17, 19, 2]
 * Output: 7
 * Explanation: The smallest element is 2, and its index is 7.
 *
 * NOTE:
 *    REMEMBER binary search can work beyond sorted arrays,
 *    as long as there is a binary decision we can use to
 *    shrink the search range.
 *
 * Apply a feasible function of <= the last element and
 * get the boolean array that characterizes the two sections.
 *
 */

function findMinRotated(arr) {
  let left = 0;
  let right = arr.length - 1;
  let boundaryIndex = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    // if <= last element, then belongs to lower half
    if (arr[mid] <= arr[arr.length - 1]) {
      right = mid - 1;
      boundaryIndex = mid;
    } else {
      left = mid + 1;
    }
  }

  return boundaryIndex;
}

console.log(findMinRotated([30, 40, 50, 10, 20])); // ==> 3
console.log(findMinRotated([3, 5, 7, 11, 13, 17, 19, 2])); // ==> 7
