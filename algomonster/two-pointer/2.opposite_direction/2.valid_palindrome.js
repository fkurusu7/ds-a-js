/** Valid Palindrome
    
  Determine whether a string is a palindrome, 
  ignoring non-alphanumeric characters and case.

  Input: "Do geese see God?" 
  Output: true

  Input: Was it a car or a cat I saw? 
  Output: true

  Input: A brown fox jumping over 
  Output: false 
*/

function isValidPalindrome(chars) {
  chars = chars
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-z0-9]/g, "");

  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    if (chars[left] !== chars[right]) {
      return false;
    }
    right -= 1;
    left += 1;
  }

  return true;
}

console.log(isValidPalindrome("Do geese see God?")); // ==> true
console.log(isValidPalindrome("Was it a car or a cat I saw?")); // ==> true
console.log(isValidPalindrome("A brown fox jumping over")); // ==> false
