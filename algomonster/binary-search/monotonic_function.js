/**
 * Binary Search and Monotonic Function
 *
 * Use binary search whenever to make a binary decision to shrink the search range.
 *
 * - Monotonic Function:
 *
 * It's a function that is either non-decreasing or non-increasing.
 *    Given x1 and x2
 *    Where x1 > x2
 *    R= f(x1) >= f(x2)
 *
 * A sorted array is monotonic because the value increases or stays the same as
 * the index increases
 *
 * - FEASIBLE Function:
 *  The precondition for binary search is to find a monotonic function f(x)
 *  that returns either True or False.
 *  This function is called feasible to signify whether the element at the current
 *  index is feasible (True) or not (False) to meet the problem constraints.
 */

// BINARY SEARCH TEMPLATE:
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let first_true_index = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (feasible(mid)) {
      first_true_index = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return first_true_index;
}

/**
 * Now, the problem has become finding the FEASIBLE FUNCTION
 * and then mechanically applying the template.
 * In the Find the First True in a Sorted Boolean Array problem,
 * the feasible function is simply ===> arr[mid] == True.
 */
