/** Find All Anagrams in a String
  
  Given a string original and a string check, find the starting index of all 
  substrings of original that is an anagram of check. 
  The output must be sorted in ascending order.

  Example 1
    Input: original = "cbaebabacd", check = "abc"
    Output: [0, 6]
    Explanation: The substring from 0 to 2, "cba", is an anagram of "abc", 
      and so is the substring from 6 to 8, "bac".

  Example 2
    Input: original = "abab", check = "ab"
    Output: [0, 1, 2]
    Explanation: All substrings with length 2 from "abab" are anagrams of "ab".

  Constraints
    1 <= len(original), len(check) <= 10^5
    Each string consists of only lowercase characters in the standard English alphabet.
*/

function findAnagrams(original, check) {
  // edge case: if the length of original is less than the length of check, return an empty array
  if (original.length < check.length) return [];

  // Data Structure: an array to store the starting index of all substrings of original that is an anagram of check
  let result = [];
  // Data Structure: an object to store the frequency of each character in check
  let checkFreq = new Map();
  // Data Structure: an object to store the frequency of each character in the current window
  let windowFreq = new Map();

  // Build frequency map for check
  for (let char of check) {
    checkFreq.set(char, (checkFreq.get(char) || 0) + 1);
  }

  // Map { 'a': 1, 'b': 1, 'c': 1 }
  console.log(checkFreq);

  // Initialize first window
  for (let i = 0; i < check.length; i++) {
    const char = original[i];
    windowFreq.set(char, (windowFreq.get(char) || 0) + 1);
  }
  // Map { 'c': 1, 'b': 1, 'a': 1 }
  console.log(windowFreq);

  // Helper function to compare two maps
  const equalMaps = (map1, map2) => {
    if (map1.size !== map2.size) return false;
    for (const [key, value] of map1) {
      if (map2.get(key) !== value) return false;
    }
    return true;
  };

  // Compare the first window
  if (equalMaps(checkFreq, windowFreq)) {
    result.push(0);
  }
  console.log(result);

  // Following Slide windows
  for (let i = check.length; i < original.length; i++) {
    // Remove leftmost character from the window
    const leftChar = original[i - check.length];
    windowFreq.set(leftChar, windowFreq.get(leftChar) - 1);
    // Remove char from the map if its frequency is 0
    if (windowFreq.get(leftChar) === 0) {
      windowFreq.delete(leftChar);
    }

    // Add next (right) character to the window
    const rightChar = original[i];
    windowFreq.set(rightChar, (windowFreq.get(rightChar) || 0) + 1);

    // Compareif it's an anagram
    if (equalMaps(checkFreq, windowFreq)) {
      result.push(i - check.length + 1);
      /*
      The key points to remember:
        1. i is always at the end of our current window
        2. We subtract p.length to move back to the start of the window
        3. We add 1 to adjust for 0-based indexing
        4. This gives us the starting position of any anagram we find
       */
    }
  }
  return result;
}

console.log(findAnagrams("cbaebabacd", "abc")); // [0, 6]
console.log(findAnagrams("abab", "ab")); // [0, 1, 2]
console.log(findAnagrams("abab", "abc")); // []
console.log(findAnagrams("abab", "a")); // [0, 2]
