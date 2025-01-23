/**
 * Newspapers
 *
 * You've begun your new job to organize newspapers. Each morning, you
 * are to separate the newspapers into smaller piles and assign each pile
 * to a co-worker. This way, your co-workers can read through the
 * newspapers and examine their contents simultaneously.
 *
 * Each newspaper is marked with a read time to finish all its contents.
 * A worker can read one newspaper at a time, and, when they finish one,
 * they can start reading the next. Your goal is to minimize the amount
 * of time needed for your co-workers to finish all newspapers.
 * Additionally, the newspapers came in a particular order, and you must
 * not disarrange the original ordering when distributing the newspapers.
 * In other words, you cannot pick and choose newspapers randomly from
 * the whole pile to assign to a co-worker, but rather you must take a
 * subsection of consecutive newspapers from the whole pile.
 *
 * What is the minimum amount of time it would take to have your
 * coworkers go through all the newspapers? That is, if you optimize the
 * distribution of newspapers, what is the longest reading time among all
 * piles?
 *
 * Constraints
 * 1 <= newspapers_read_times.length <= 10^5
 * 1 <= newspapers_read_times[i] <= 10^5
 * 1 <= num_coworkers <= 10^5
 *
 * Examples
 *
 * Example 1:
 *    Input: newspapers_read_times = [7,2,5,10,8], num_coworkers = 2
 *    Output: 18
 *    Explanation:
 *      Assign first 3 newspapers to one coworker then assign the rest to
 *      another. The time it takes for the first 3 newspapers is
 *      7 + 2 + 5 = 14 and for the last 2 is 10 + 8 = 18.
 *
 * Example 2:
 *    Input: newspapers_read_times = [2,3,5,7], num_coworkers = 3
 *    Output: 7
 *    Explanation:
 *    Assign [2, 3], [5], and [7] separately to workers.
 *    The minimum time is 7.
 *
 * *******************************************************
 * Feasibility Check: Intuitive Explanation
 * The feasibility check is essentially a simulation of how we'd
 * distribute newspapers to coworkers under a hypothetical maximum
 * reading time, mid. At its core, the algorithm emulates a conveyor belt
 * process: imagine each coworker standing ready, and as you pass them
 * newspapers, a timer keeps track of the accumulated reading time. Once
 * a coworker's accumulated time reaches or nearly reaches the mid value
 * and they don't have enough time to read the next newspaper, they step
 * back, and the next coworker steps forward to continue the task.
 *
 * By cycling through this process, we get an effective gauge on how many
 * coworkers would be needed to cover all newspapers under the stipulated
 * time limit, mid. If the number exceeds our available coworkers, the
 * time limit isn’t viable. If not, it's feasible.
 *
 * Essentially, the problem exhibits two sequences:
 *    1. A sequence of infeasible times, followed by
 *    2. A sequence of feasible times.
 *
 * The transition between these two sequences is what
 * we aim to find using binary search.
 *
 *  Observations:
 * - The smallest time any coworker would take is equal to the time
 *    taken to read the longest newspaper,
 *    i.e., max(newspapers_read_times).
 * - The largest time any coworker would take is if only one person reads
 *    all the newspapers, i.e., sum(newspapers_read_times).
 *
 * The optimal time lies between these two values.
 *
 */

function feasible(newspapersReadTimes, numCoworkers, limit) {
  let time = 0;
  let numWorkers = 0;

  for (const readTime of newspapersReadTimes) {
    if (time + readTime > limit) {
      time = 0;
      numWorkers += 1;
    }
    time += readTime;
  }

  if (time !== 0) {
    numWorkers += 1;
  }

  return numWorkers <= numCoworkers;
}

function newspaperSplit(newspapersReadTimes, numCoworkers) {
  let low = Math.max(...newspapersReadTimes);
  let high = newspapersReadTimes.reduce((acc, sum) => acc + sum, 0);
  let answer = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (feasible(newspapersReadTimes, numCoworkers, mid)) {
      answer = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return answer;
}

console.log(newspaperSplit([7, 2, 5, 10, 8], 2)); // ==> 18
console.log(newspaperSplit([2, 3, 5, 7], 3)); // ==> 7

//   low = 10 high = 32 mid = 21
//  timePerCoWorker = a[0] + a[1] + a[2] = 14 +10 = 24
//  maxTime = 0
//  timePerCoWorker > mid{
//   maxTime = timePerCoWorker - a[3]
//  }
