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
