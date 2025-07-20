/** Pseudocode
 *
 * This function accepts an array and a value
 * Loop through the array and check if the current array element is equal to the value
 * If it is, return the index at which the element is found
 * If the value is never found, return -1
 */

function linearSearch(arr, value) {
  if (!arr.length) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }

  return -1;
}

console.log(linearSearch([3, 1, 2, 6, 7, 8, 4], 8)); // ==> 5
console.log(linearSearch([3, 1, 2, 6, 7, 8, 4], 9)); // ==> -1
console.log(linearSearch([3, 1, 2, 6, 7, 8, 4], 6)); // ==> 3
console.log(linearSearch([3, 1, 2, 6, 7, 8, 4], 4)); // ==> 3
console.log(linearSearch([], 8)); // ==> -1
console.log(linearSearch([100], 100)); // ==> -1
