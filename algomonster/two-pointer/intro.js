/** A two pointer algorithm has these characteristics:
  1. Two moving pointers, regardless of directions, moving dependently or independently;
  2. A function that utilizes the entries referenced by the two pointers, which relates to the answer in a way;
  3. An easy way of deciding which pointer to move;
  4. A way to process the array when the pointers are moved.

  Classifications:
  
  - Same Directions
    These questions have two pointers that move in the same direction. Here is an example of a same direction two pointer question: Remove Duplicates.
    
  - Opposite Directions
    These questions have two pointers that move in the opposite direction. Here is an example of an opposite direction two pointer question: Two Sum Sorted.

  - Two Pointers vs Sliding Window
    Sliding window problems are similar to the same directions problems, only instead, the function performs on the entire interval between the two pointers. Usually, however, we keep track of the cumulative result of the window, and each time we insert/remove an item from the window, we simply update the window according to the changes instead of recalculating everything.
    As an example, Longest Substring without Repeating Characters is a classic sliding window problem.

  - Non-array Applications
      The two-pointer technique is not limited to arrays. Two pointer can be done on other structures, like linked list, as long as they are iterable.
      For example, in Happy Number, you are asked to detect a cycle from a linked list structure, and it can be solved using a two-pointer technique called Floyd's Cycle-Finding Algorithm.
*/
