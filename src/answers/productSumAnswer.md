---
title: "Product Sum Answer"
date: "May 19th, 2020"
question: "productSum"
---

So this question is a good way to recognize a recursive problem. the question states that there are arrays embedded inside other arrays. This generally speaks to a pattern that can be solved with recursion.

We can start by seeing how we would deal with a regular list that only has number. This sub problem is easy enough to solve, we just sum up the numbers in the array by iterating over them.

<div align="left">

    sum += (int) array.get(i);

</div>

That's easy enough, now we need to realize that anything inside of the array needs to mutiplied by a mutiplier that increases as we go into more arrays. A array with 3 arrays inside of it is going to have the multipliers of 1, 2, 3 (increasing as we go into arrays).

Now for the recursive part, we need to check is the index we are on is a instance of a arraylist and then increase the multiplier. Then we can recurse on that array to grab the sum of the things inside.

<div align="left">

    if(array.get(i) instanceof ArrayList){
        ArrayList<Object> ls = (ArrayList<Object>) array.get(i);
        sum += productSumRec(ls, multiplier +1);
    }

</div>

Now we just put it all together:

<div align="left">

    public static int productSum(List<Object> array) {
        return productSumRec(array, 1);
    }

    public static int productSumRec(List<Object> array, int multiplier){
        int sum = 0;
        for(int i = 0; i < array.size(); i++ ){
            if(array.get(i) instanceof ArrayList){
                ArrayList<Object> ls = (ArrayList<Object>) array.get(i);
                sum += productSumRec(ls, multiplier +1);
            } else{
                sum += (int) array.get(i);
            }
        }
        return multiplier * sum;
    }

</div>