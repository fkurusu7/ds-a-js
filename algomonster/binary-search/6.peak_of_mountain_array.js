/**
 * The Peak of a Mountain Array
 *
 * A mountain array is defined as an array that:
 *    - has at least 3 elements
 *    - has an element with the largest value called "peak",
 *      with index K. The array elements strictly increase
 *      from the first element to A[k], and then strictly
 *      decrease from A[k + 1] to the last element of the array.
 *      Thus creating a "mountain" of numbers.
 *
 * That is, given A[0]<...<A[k-1]<A[k]>A[k+1]>...>A[n-1]:
 * Find the index K.
 *
 * Note that the peak element is neither the first nor the lastIndex of the array.
 *
 * Find the index of the peak element. Assume there is only one peak element.
 *
 * Input: 0 1 2 3 2 1 0
 * Output: 3
 * Explanation: The largest element is 3, and its index is 3.
 */

function peakOfMountainArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  let indexK = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] > arr[mid + 1]) {
      indexK = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return indexK;
}
console.log(peakOfMountainArray([0, 1, 2, 3, 2, 1, 0])); // => 3
console.log(peakOfMountainArray([0, 1, 2, 3, 3, 4, 2, 1, 0])); // => 5
