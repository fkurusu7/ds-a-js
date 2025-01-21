/**
 * Find the First True in a Sorted Boolean Array
 *
 * An array of boolean values is divided into two sections:
 *  1. The left section consists of all false, and
 *  2. The right section consists of all true.
 *
 * Find the First True in a Sorted Boolean Array of the right section,
 *  return the index of the first true element.
 *  If there is no true element, return -1.
 *
 * Example:
 *    Input: arr = [false, false, true, true, true]
 *    Output: 2
 *    Explanation: The first true's index is 2.
 *        - Binary decision:
 *          1. If the element is false, discard everything to the left and current element itself
 *          2. If the element is true, the current element "could be" the first true, although there
 *            may be other true to the left.
 *            2.1 Keep the current element (index) in a record and discard eveything to the right
 *              including the current element itself.
 *              Keep a variable boundaryIndex = current-element-index
 *
 */

function findFirstTrue(arr) {
  let left = 0;
  let right = arr.length - 1;
  let boundaryIndex = -1;

  while (left < right) {
    const mid = Math.floor((right + left) / 2);

    if (arr[mid]) {
      boundaryIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return boundaryIndex;
}

console.log(findFirstTrue([false, false, true, true, true]));
console.log(
  findFirstTrue([false, false, false, false, false, false, true, true, true])
);
