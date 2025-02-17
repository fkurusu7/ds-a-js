/** Longest Substring without Repeating Characters

  Find the length of the longest substring of a given string without repeating characters.

  Input: abccabcabcc
  Output: 3
  Explanation: The longest substrings are abc and cab, both of length 3.

  Input: aaaabaaa
  Output: 2
  Explanation: ab is the longest substring, with a length of 2.
*/

function longestSubstringWithoutRepeatingCharacters(str) {
  // Data Structure: an object to store the frequency of each character in the current window
  let windowFreq = new Map();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    // Get the character at the right pointer
    const char = str[right];
    // add character to the windowFreq map
    windowFreq.set(char, (windowFreq.get(char) || 0) + 1);

    // Shrink the window until window contains no repeating characters
    while (windowFreq.get(char) > 1) {
      const leftChar = str[left];
      // decrease counter for leftChar
      windowFreq.set(leftChar, windowFreq.get(leftChar) - 1);
      // if the frequency of left char is 0, delete it from Map
      if (windowFreq.get(leftChar) === 0) {
        windowFreq.delete(leftChar);
      }
      // increment left pointer
      left++;
    }
    // Calculate maxLength
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(longestSubstringWithoutRepeatingCharacters("abccabcabcc")); // 3
console.log(longestSubstringWithoutRepeatingCharacters("abcdbea")); // 5
