/** Least Consecutive Cards to Match

  A bunch of cards is laid out in front of you in a line, where the value of each card ranges 
  from 0 to 10^6. A pair of cards is matching if they have the same number value.
  
  Given a list of integers cards, your goal is to match a pair of cards, 
  but you can only pick up cards in a consecutive manner.
  What's the minimum number of cards that you need to pick up to make a pair? 
  If there are no matching pairs, return -1.

  For example: 
    Input: cards = [3, 4, 2, 3, 4, 7], 
    Output: 4
    Explanation: 
      Picking up [3, 4, 2, 3] makes a pair of 3s.
      Picking up [4, 2, 3, 4] matches two 4s. 
      We need 4 consecutive cards to match a pair of 3s and 4 consecutive cards to match 4s, 
      so you need to pick up at least 4 cards to make a match.
  
  ****************************************************************************************
        This question is asking for the shortest subarray that contains a duplicate.
              Use the Flexible Sliding Window Template to solve this problem.

        function slidingWindowFlexibleShortest(input) {
          initialize window, ans
          var left = 0;
          for (var right = 0; right < input.length; ++right) {
              append input[right] to window
              while (valid(window)) {
                  ans = min(ans, window);   // window is guaranteed to be valid here
                  remove input[left] from window
                  ++left;
              }
          }
          return ans;
        }
  ****************************************************************************************
  
*/

function leastConsecutiveCardsToMatch(cards) {
  let window = new Map();
  let shortest = cards.length + 1;
  let left = 0;

  for (let right = 0; right < cards.length; right++) {
    // add card to window
    window.set(cards[right], (window.get(cards[right]) || 0) + 1);
    // loop until window has no duplicate
    while (window.get(cards[right]) == 2) {
      // get shortest window
      shortest = Math.min(shortest, right - left + 1);
      // remove card from window
      window.set(cards[left], window.get(cards[left]) - 1);
      //move left pointer
      left++;
    }
  }

  console.log(shortest !== cards.length, shortest, cards.length + 1);
  /*
  [ true, 4, 7 ] 
  [ true, 6, 6 ] 
  [ true, 2, 6 ] 
  [ true, 3, 7 ] 
  [ false, 6, 7 ]
   The +1 is added to the cards.length as safety net to return -1 if no duplicate found
   and to return the correct shortest window if a duplicate is found
  */
  return shortest !== cards.length + 1 ? shortest : -1;
}

console.log(leastConsecutiveCardsToMatch([3, 4, 2, 3, 4, 7])); // ==> 4
console.log(leastConsecutiveCardsToMatch([1, 2, 3, 4, 5])); // ==> -1
console.log(leastConsecutiveCardsToMatch([1, 1, 1, 1, 1])); // ==> 2
console.log(leastConsecutiveCardsToMatch([1, 2, 1, 2, 1, 2])); // ==> 3
console.log(leastConsecutiveCardsToMatch([1, 3, 4, 5, 6, 1])); // ==> 3
