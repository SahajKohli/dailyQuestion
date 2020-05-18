---
title: "Validate BST"
date: "May 16th, 2020"
question: "singleCycleCheck"
---

Hey there, back with another question. This one's fun to do.

At first this problem seems really simple, but there's a catch to the solution.

You might have said: "All I have to do is keep track of how many numbers I've visited and see if we visited all of them"

There's a couple of edge cases here that you need to consider before you can solve the problem. What happens if you hit a number like -5 on index 3? If all you did was add the number to the index you would end up at a negative index.

But, if all you did was subtract the length of the array from the new index you would be wrong. What would happen if you had a number like -100?

You can get around this problem by using the mod operator, this will give you remainder. You can use it for both getting negative number and positive numbers over the array length.

This code would look something like this:

<div align="left">

        if(currIndex < 0){
            int remainder = Math.abs(currIndex) % array.length;
            currIndex = array.length - remainder;
        }
        if(currIndex > array.length -1){
            int remainder = Math.abs(currIndex) % array.length;
            currIndex = remainder;
        }

</div>

This actually takes care of both of our edge cases here. We make sure if the new index is over the length we mod the new index and just move our pointer to that number. Or if the number was negative, we get the absolute value and then subtract the remainder form the length.

So the two cases are:

    newIndex = 26 where Array Length = 5
    25 % 5 = 1
    We now set our index to 1.

    newIndex = -26 where Array Length = 5
    Math.abs(-25) % 5 = 1
    We now set our index to Array.length - 1, which is 4. (Note that we need to subtract one from this number because our index for the array starts at 0 so its actually 4)


The rest of the code is relatively simple:

<div align="left">


    public static boolean hasSingleCycle(int[] array) {
            int indexsVisited = 0;
            int currIndex = 0;
            while(indexsVisited < array.length){
                if(currIndex == 0 && indexsVisited > 0 ){
                    return false;
                }
                int jumpNumber = array[currIndex];
                currIndex = jumpNumber + currIndex;
                System.out.println(currIndex);
                if(currIndex < 0){
                    int remainder = Math.abs(currIndex) % array.length;
                    currIndex = array.length - remainder;
                }
                if(currIndex > array.length -1){
                    int remainder = Math.abs(currIndex) % array.length;
                    currIndex = remainder;
                }
                indexsVisited++;

            }

            if(currIndex == 0){
                return true;
            } else{
                return false;
            }

        }

</div>


We check to make sure at the end we are at index 0 because that proves a cycle exists.

The other edge case we deal with here is when our index is 0 and the we've already visited a bunch of indexes. This means we've ended up on the first index without visiting all of the indexes.

- - - - - - -

Hopefully this was a fun one for you, see you tomorrow for another one!