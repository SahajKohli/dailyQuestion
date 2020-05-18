---
title: "Flatten a Binary Tree"
date: "May 15th, 2020"
answer: "flattenBinaryTreeAnswer"
---

Back with another question today, this one's a little harder then the other ones.

###I want to easily go through a binary tree without having to traverse it in a tree way, so I'm going to ask you to flatten the tree. A flattened tree is similar to the binary tree execpt it uses its left and right pointers like a doubly linked list.

Here's an example:

        10
       /  \
      5    15
     / \     \
    1   11    19

    The tree after being flattened would look like:

    1 <-> 5 <-> 11 <-> 10 <-> 19 <-> 15


Assume your class (if your working with Java) looks like this:

<div align="left">

        static class BinaryTree {
            int value;
            BinaryTree left = null;
            BinaryTree right = null;

            public BinaryTree(int value) {
                this.value = value;
            }
        }


</div>