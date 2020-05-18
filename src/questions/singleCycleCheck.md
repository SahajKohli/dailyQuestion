---
title: "Reverse a Linked List"
date: "May 16th, 2020"
answer: "singleCycleCheckAnswer"
---

Say you're given an array of integers, where the number in the represents jumps you can take. For example the number 3 represents 3 jumps from the index you are currently at.

If the number makes you jump passed the index length then it loops around to the start. Similarly, if you were to get a negative number you will go backwards from the index.

Return true or false if the array represents a single cycle. This means that every element in the array is visited exactly once before landing back to the original starting index.

For Example:

    array = [2 , 3, 1, -4, -4, 2]

    answer = true;

Here's the method signature:

<div align="left">

  public static boolean hasSingleCycle(int[] array) {
    // Write your code here.
    return false;
  }

</div>

Good luck and after you think you've figured take a look at the answer.

