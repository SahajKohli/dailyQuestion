---
title: "Reverse a Linked List"
date: "May 13th, 2020"
answer: "reverseLinkedListAnswer"
---

For the first question of the site, let's start with something easy. How do you reverse a linked list? 

###Say you're a pointer to the head of a node of a linked list, your job as a software engineer is to reverse the linked  list. You have to do this without using any other data structure.

Here are some examples:

Example 1:

    1->2->3->4->5->null
    
    Expected:
    5->4->3->2->1->null
    
Example 2:

    Given:
    5->4->3->2->1->null
    
    Expected:
    1->2->3->4->5->null
    
Assume your class (if your working with Java) looks like this:

<div align="left">

    static class LinkedList {
        int value;
        LinkedList next = null;

        public LinkedList(int value) {
            this.value = value;
        }
    }
</div>