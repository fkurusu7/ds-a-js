/** Container With Most Water
  
  Given an array representing heights of vertical lines, 
  find the maximum area of water trapped between two lines.

  8 |   █         █
  7 |   █         █   █
  6 |   █ █       █   █
  5 |   █ █   █   █   █
  4 |   █ █   █ █ █   █
  3 |   █ █   █ █ █ █ █
  2 |   █ █ █ █ █ █ █ █
  1 |_█_█_█_█_█_█_█_█_█___
      1 8 6 2 5 4 8 3 7
  
  Input: [1,8,6,2,5,4,8,3,7].
  Output: 49.

  The function should calculate the maximum area that can be trapped by two lines.

 */

function containerWithMostWater(heightArr) {
  let left = 0;
  let right = heightArr.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const containerHeight = Math.min(heightArr[left], heightArr[right]);
    const area = width * containerHeight;
    maxArea = Math.max(area, maxArea);

    if (heightArr[left] <= heightArr[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return maxArea;
}

const testCases = [
  [1, 8, 6, 2, 5, 4, 8, 3, 7], // Expected: 49
  [1, 1], // Expected: 1
  [4, 3, 2, 1, 4], // Expected: 16
  [1, 2, 4, 3], // Expected: 4
];
// run tests
testCases.forEach((testCase, index) => {
  console.log(`Test case ${index + 1}`);
  console.log(`Input: [${testCase}]`);
  console.log(
    `Maximum area for test case: ${containerWithMostWater(testCase)}`
  );
});
/**
'Test case 1 - Maximum area for test case: 49' 
'Test case 2 - Maximum area for test case: 1' 
'Test case 3 - Maximum area for test case: 16' 
'Test case 4 - Maximum area for test case: 4'
 */
