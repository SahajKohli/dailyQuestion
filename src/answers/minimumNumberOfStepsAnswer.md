---
title: "Reverse Linked List"
date: "May 17th, 2020"
question: "minimumNumberOfSteps"
---

Hey ya'll, here's the solution for this problem:

The first thing we can do here is to realize that can use a hashmap to store the characters from the first string. Then we can go through with the second string and delete the elements from the first string.

We know that we can change the char if that char does not exist in the map anymore, this is because the char is now extra.

Take a look here:

For the first example, we have:

    Input: s = "bab", t = "aba"
    Output: 1

    Map[
    b 2
    a 1
    ]

    Now if we go through the second string, we can delete chars as we do:

    Step 1:
    a  b  a
    ^
    delete a

    Map[
    b 2
    ]

    Step 2:
    a  b  a
       ^
    delete b

    Map[
    b 1
    ]

    Step 2:
    a  b  a
          ^
    delete a

    Map[
    b 1
    ]

    There's no a left in the array so we increment a counter


That's pretty much all we have to do here!

Here's the code:

<div align="left">

    public int minSteps(String s, String t){

        HashMap<Character, Integer> mappedString = new HashMap<>();

        for(int i =0; i < s.length(); i++){
            Character currChar = s.charAt(i);
            if(mappedString.containsKey(currChar)){
                mappedString.put(currChar, mappedString.get(currChar) +1);
            } else{
                mappedString.put(currChar, 1);
            }
        }

        int count = 0;
        for(int p =0; p < t.length(); p++){
            Character currChar = t.charAt(p);
            if(mappedString.containsKey(currChar)){
                if(mappedString.get(currChar) == 1){
                    mappedString.remove(currChar);
                } else{
                    mappedString.put(currChar, mappedString.get(currChar) - 1);
                }
            } else{
                count++;
            }
        }
        return count;
    }

</div>

This was a fun problem to work on, hopefully you enjoyed it as well. See you back here tomorrow for another!

