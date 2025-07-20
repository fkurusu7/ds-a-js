const stateNames = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

function binary(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.ceil((start + end) / 2);
    console.log(mid);
    if (arr[mid] === target) {
      return true;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return false;
}

const what = [
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99,
];
console.log(binary(what, 95));
// console.log(binary(stateNames, 'Iowa')); // ==> true
// console.log(binary(stateNames, 'Wsdjh')); // ==> false

function searchSubstrings(str, subStrToSearch) {
  let matches = 0;

  for (let i = 0; i < str.length; i++) {
    let subLength = 0;
    for (let j = 0; j < subStrToSearch.length; j++) {
      if (str[i + subLength] === subStrToSearch[j]) {
        subLength++;

        if (subLength === subStrToSearch.length) {
          matches++;
          break;
        }
      } else {
        break;
      }
    }
  }

  return matches;
}

console.log(searchSubstrings('papap', 'ap')); // => 2
console.log(searchSubstrings('termitesmite', 'te')); // => 3
console.log(searchSubstrings('termitesmite', 'mi')); // => 2
console.log(searchSubstrings('lorie loled', 'lol')); // => 1
