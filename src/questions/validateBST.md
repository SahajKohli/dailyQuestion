---
title: "Validate BST"
date: "May 14th, 2020"
answer: "validateBSTAnswer"
---


Back with another question today, this one seems to be asked by a lot of interviewers

###I created a Binary Search Tree ([what's a BST?](https://yourbasic.org/algorithms/binary-search-tree/)) and I want to make sure that it actually follows the properties of being a BST. Write a function that can take in a tree node and return true or false if it's a BST or not.

Example:

   ![Image from programiz ](https://cdn.programiz.com/sites/tutorial2program/files/bst-vs-not-bst.jpg)

    Image from https://cdn.programiz.com/sites/tutorial2program/files/bst-vs-not-bst.jpg

The left tree above is a BST but one on the right is not because the 2 is not bigger then 3. (Remember left side of the tree node contains values that are smaller, while the right side contain larger or equal values)

Assume your class (if your working with Java) looks like this. You can choose to add other variables to the class:

<div align="left">

    static class BST {
        public int value;
        public BST left;
        public BST right;

        public BST(int value) {
            this.value = value;
        }
    }

</div>