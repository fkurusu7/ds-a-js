/** Streaming service like Netflix, Hulu, Amazon Prime, etc. 
    have to deal with a large number of viewers at any given time. 
    They need to analyze viewer data to make decisions on server capacity, 
    maintenance schedules, peak times, etc.
  
  Given an array representing the number of active viewers each hour for 24 hours:
  // Sample viewer data for 24 hours
  const viewers = [
      1000, 500, 300, 200, 400, 800,    // 12 AM - 5 AM
      2000, 500, 800, 700, 1000, 5500, // 6 AM - 11 AM
      5000, 6000, 7000, 8000, 7500, 6500, // 12 PM - 5 PM
      6000, 5000, 4000, 3000, 2000, 1500  // 6 PM - 11 PM
  ];

  Now, product managers ask you questions like:

  1. Is there any 4-hour period where we had exactly 3000 viewers in total? (to plan server capacity)
  2. When is the best 6-hour window to schedule maintenance? (looking for lowest viewer period)
  3. Find periods where we had more than 10000 viewers to identify peak times.
  Optional:
  4. What is the longest period where we had less than 5000 viewers? (to find the quietest time)
  5. Can we find a 3-hour window with the highest number of viewers? (to optimize ad placements)

 */

const viewers = [
  1000,
  500,
  300,
  200,
  400,
  800, // 12 AM - 5 AM
  2000,
  500,
  800,
  700,
  1000,
  5500, // 6 AM - 11 AM
  5000,
  6000,
  7000,
  8000,
  7500,
  6500, // 12 PM - 5 PM
  6000,
  5000,
  4000,
  3000,
  2000,
  1500, // 6 PM - 11 PM
];

// 1. Find any 4-hour period with exactly 3000 viewers
/*
 const viewers = [
      1000, 500, 300, 200, 400, 800,    // 12 AM - 5 AM
      2000, 500, 800, 700, 1000, 5500, // 6 AM - 11 AM
      5000, 6000, 7000, 8000, 7500, 6500, // 12 PM - 5 PM
      6000, 5000, 4000, 3000, 2000, 1500  // 6 PM - 11 PM
  ];
 */
function findExactViewerPerPeriod(
  viewersPerHourArray,
  hoursPeriod,
  viewersTarget
) {
  const prefixSum = new Map([[0, 0]]);
  let currSum = 0;

  for (let i = 0; i < viewersPerHourArray.length; i++) {
    currSum += viewersPerHourArray[i];

    // base case: if we have enough hours, substract the viewers from hoursPeriod ago
    if (i >= hoursPeriod) {
      currSum -= viewersPerHourArray[i - hoursPeriod];
    }

    if (currSum === viewersTarget) {
      const startHour = Math.max(0, i - hoursPeriod + 1);
      return {
        found: true,
        period: [startHour, i],
        viewers: viewersPerHourArray.slice(startHour, i + 1),
      };
    }
  }

  return { found: false };
}
// Test the functions
console.log("1. Looking for 4-hour period with 3000 viewers:");
console.log(findExactViewerPerPeriod(viewers, 4, 3000));
// { found: true, period: [ 7, 10 ], hours: [ 500, 800, 700, 1000 ] }

// 2. Find the best 6-hour window for maintenance ==> Sliding Window
/*
 const viewers = [
      1000, 500, 300, 200, 400, 800,    // 12 AM - 5 AM
      2000, 500, 800, 700, 1000, 5500, // 6 AM - 11 AM
      5000, 6000, 7000, 8000, 7500, 6500, // 12 PM - 5 PM
      6000, 5000, 4000, 3000, 2000, 1500  // 6 PM - 11 PM
  ];
 */
function findLowestViewerPeriod(viewersPerHourArray, hoursWindow) {
  let windowSum = 0;
  let minPeriod = [];
  let minSum = Infinity; // total viewers in the period

  // Calculate initial sum for first window
  for (let i = 0; i < hoursWindow; i++) {
    windowSum += viewersPerHourArray[i];
  }
  minSum = windowSum;
  minPeriod = [0, hoursWindow - 1];

  // Slide the window to the right
  for (let i = hoursWindow; i < viewersPerHourArray.length; i++) {
    // add the right side of the window and remove the left side
    console.log(i, windowSum);
    windowSum += viewersPerHourArray[i] - viewersPerHourArray[i - hoursWindow];
    console.log(i, windowSum);
    if (windowSum < minSum) {
      minSum = windowSum;
      minPeriod = [i - hoursWindow + 1, i];
    }
    console.log(minPeriod, minSum);
  }

  return {
    period: minPeriod,
    totalViewers: minSum,
    hours: viewersPerHourArray.slice(minPeriod[0], minPeriod[1] + 1),
  };
}
console.log("\n2. Best 6-hour maintenance window:");
console.log(findLowestViewerPeriod(viewers, 6));
/* 
  {
    period: [ 0, 5 ],
    totalViewers: 3200,
    hours: Array(6) [ 1000, 500, 300, 200, 400, 800 ]
  }
*/

// 3. Find periods with more than 10000 viewers
/*
 const viewers = [
      1000, 500, 300, 200, 400, 800,    // 12 AM - 5 AM
      2000, 500, 800, 700, 1000, 5500, // 6 AM - 11 AM
      5000, 6000, 7000, 8000, 7500, 6500, // 12 PM - 5 PM
      6000, 5000, 4000, 3000, 2000, 1500  // 6 PM - 11 PM
  ];
 */
function findPeakPeriods(arr, target) {
  let peaks = [];
  let currentSum = 0;
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum >= target) {
      peaks.push({
        period: [start, i],
        totalViewers: currentSum,
        hours: arr.slice(start, i + 1),
      });

      // reset the sum and start index
      currentSum = 0;
      start = i + 1;
    }
  }

  return peaks;
}

console.log("\n3. Periods with more than 10000 viewers:");
console.log(findPeakPeriods(viewers, 10000));
/* 
ensalada con arrachera
4 crujipollos 

Array(6) [
  {
    period: [ 0, 11 ],
    totalViewers: 13700,
    hours: Array(12) [ 1000, 500, 300, 200, 400, 800, 2000, 500, 800, 700, 1000, 5500 ]
  },
  { period: [ 11, 13 ], totalViewers: 11000, hours: [ 5500, 5000, 6000 ] },
  { period: [ 24, 15 ], totalViewers: 15000, hours: [] },
  { period: [ 39, 17 ], totalViewers: 14000, hours: [] },
  { period: [ 56, 19 ], totalViewers: 11000, hours: [] },
  { period: [ 75, 23 ], totalViewers: 10500, hours: [] }
]
*/
console.log("\n3. Periods with more than 30000 viewers:");
console.log(findPeakPeriods(viewers, 30000));
/*
[
  {
    period: [ 0, 14 ],
    totalViewers: 31700,
    hours: Array(15) [
      1000, 500, 300, 200, 400, 800, 2000, 500, 800, 700, 1000, 5500, 5000, 6000,
      7000
    ]
  },
  {
    period: [ 14, 19 ],
    totalViewers: 33000,
    hours: Array(6) [ 7000, 8000, 7500, 6500, 6000, 5000 ]
  }
]
*/
