function reverseAStr(anStr) {
  let left = 0;
  let right = anStr.length - 1;
  let charArray = anStr.split("");

  while (left <= right) {
    [charArray[left], charArray[right]] = [charArray[right], charArray[left]];
    left++;
    right--;
  }

  return charArray.join("");
}

function stringReversed(str) {
  return str.split("").reverse().join("");
}

console.log(reverseAStr("tomala")); // ==> alamot
console.log(stringReversed("tomala")); // ==> alamot

function isPalindrome(palindromeStr) {
  const cleanedStr = palindromeStr.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanedStr === reverseAStr(cleanedStr);
}
function isPalindromeTwoPointers(palindromeStr) {
  palindromeStr = palindromeStr.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = palindromeStr.length - 1;

  while (left < right) {
    if (palindromeStr[left] !== palindromeStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("461285796873 phu2·$·%Ref.sc,c")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindromeTwoPointers("461285796873 phu2·$·%Ref.sc,c")); // false
console.log(isPalindromeTwoPointers("A man, a plan, a canal: Panama")); // true

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(isAnagram("silent", "listen")); // true
console.log(isAnagram("silentq", "listene")); // false

function findFirstUniqueChar(str) {
  // create counter

  const counter = new Map();
  for (const char of str) {
    counter.set(char, (counter.get(char) || 0) + 1);
  }
  console.log(counter);

  for (let i = 0; i < str.length; i++) {
    if (counter.get(str[i]) === 1) return i;
  }
}

console.log(findFirstUniqueChar("loveleetcode")); // 2

function countVowels(word) {
  return (word.match(/[aeiou]/gi) || []).length;
}

console.log(countVowels("hello")); // ==> 2
console.log(countVowels("hll")); // ==> 0

function checkForSubstring(str, substr) {
  return str.includes(substr);
}

console.log(checkForSubstring("hello, world!", "world")); // ==> true
console.log(checkForSubstring("hello, world!", "mundo")); // ==> false

function removeDuplicates(str) {
  return [...new Set(str)].join("");
}

console.log(removeDuplicates("banana"));

function longestCommonPrefix(strs) {
  if (!strs.length) return "";

  let prefix = strs[0];
  console.log(prefix);

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      console.log(prefix);
    }
  }

  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // ==> "fl"

function romanToInt(roman) {
  const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    const current = romanMap[roman[i]];
    const next = romanMap[roman[i + 1]];

    if (current < next) total -= current;
    else total += current;
  }

  return total;
}
console.log(romanToInt("IX")); // 9

function isRotation(str1, str2) {
  return str1.length === str2.length && (str1 + str1).includes(str2);
}

console.log(isRotation("waterbottle", "erbottlewat")); // ==> true
console.log(isRotation("hello", "elloh")); // ==> true

function compressString(str) {
  let compressed = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i] + count;
      count = 1;
    }
  }
  console.log(compressed, compressed.length, str.length);
  // [ 'a3b2c1', 6, 6 ] ["a1b1c1d1e1f1", 12, 6];
  return compressed.length <= str.length ? compressed : str;
}

console.log(compressString("aaabbc")); // "a3b2c1"
console.log(compressString("abcdef")); // "abcdef" (no compression)
