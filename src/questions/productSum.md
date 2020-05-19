---
title: "Product Sum"
date: "May 19th, 2020"
answer: "productSumAnswer"
---

Hey there! I wanted to start off the day with a question I've seen over and over again

Write a function that takes in an "special" array and returns its product sum. A "special" array is a non=empty array that contains either integers or other "special" arrays.
The product sum of a "special" array is the sum of its element, where "special" array inside it are summed themselves and then multiplied by their level of depth.

For example the product sum of [x, y] is [x+y]: the product sum of [x, [y, z]] is x + 2y + 2z.a

Example:

    Array: [5, 2, [7, -1], 3, [6, [-13, 0], 4]]

    Answer: 12


The method signature looks like this:

<div align="left">

    public static int productSum(List<Object> array) {
        return productSumRec(array, 1);
    }

</div>