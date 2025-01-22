/**
 * Square Root Estimation
 *
 * Given an integer, find its square root without using the built-in
 * square root function.
 * Only return the integer part (truncate the decimals).
 *
 * Input: 16
 * Output: 4
 *
 * Input: 8
 * Output: 2
 * Explanation: square root of 8 is 2.83..., return the integer part, 2
 *
 */

function squareRoot(n) {
  if (n === 0) return 0;
  let left = 0;
  let right = n;
  let root = 0;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    console.log(mid);
    if (mid * mid === n) {
      return mid;
    } else if (mid * mid > n) {
      root = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return root - 1;
}

console.log(squareRoot(16)); // ==> 4
console.log(squareRoot(8)); // ==> 2
console.log(squareRoot(25)); // ==> 5
console.log(squareRoot(0)); // ==> 0
