/** Remove Duplicates    ==> Same direction
 
  Given a sorted list of numbers, remove duplicates and return the new length. You must do this in-place and without using extra memory.
  
  Input: [0, 0, 1, 1, 1, 2, 2].
  Output: 3.
  
  Your function should modify the list in place so that the first three elements become 0, 1, 2. Return 3 because the new length is 3.

*/
function removeDuplicates(arr) {
  if (arr.length === 0) return -1;

  let left = 0;
  let right = 1;
  let size = 0;

  while (right <= arr.length) {
    if (arr[left] === arr[right]) {
      right += 1;
    } else if (arr[left] !== arr[right]) {
      left += 1;
      [arr[left]] = [arr[right]];
      size += 1;
      right += 1;
    }
  }

  return size;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2]));
console.log(removeDuplicates([0, 1, 2]));
console.log(removeDuplicates([]));
