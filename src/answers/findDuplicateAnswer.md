---
title: "Find Duplicate Answer"
date: "May 20th, 2020"
question: "findDuplicate"
---

So there's a answer that will jump at you pretty quickly here

You could use a hashmap and store the number and return the numbers with values more then one. But that uses O(n) space and the question states that we shouldn't be using any more then constant space

The other solution that comes to mind is to sort the array and then run through it to find numbers that are the same as the previous numbers.

That would be at O(nLogN), we can do better

How can we solve this in linear time without using any other data structure?

What if as we went along and see a number we went to that number's corresponding index and changed it to a negative number?

That way we would know that we've seen that number before.

For example:

      1, 6, 5, 2, 3, 3, 2

      We start by visting 1's corresponding index which is 1 -1 = 0 and setting it to -1

      So now it's

      -1, 6, 5, 2, 3, 3, 2

      Move to the next index and the number at that index is 6, so we go to 6-1 and set that index to negative
    
      -1, 6, 5, 2, 3, -2

      Anytime we run into a negative value we know that number was visited before therefore it's a duplicate.


  Here's what that code looks like:

  <div align="left">

    public static void hasDuplicates(int[] arrA) {

          for (int i = 0; i < arrA.length; i++) {
              //check if element is negative, if yes the we have found the duplicate
              if (arrA[Math.abs(arrA[i])-1] < 0) {
                  System.out.println("Array has duplicates : " + (Math.abs(arrA[i])));
              } else {
                  arrA[Math.abs(arrA[i])-1] = arrA[Math.abs(arrA[i])-1] * -1;
              }
          }
      }

  </div>

  Hope you enjoyed that question! See you on the next one!