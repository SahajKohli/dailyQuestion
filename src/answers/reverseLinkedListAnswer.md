---
title: "Reverse Linked List"
date: "May 13th, 2020"
question: "reverseLinkedList"
---

Let's start by taking a look at this example:

Example 1:

    1->2->3->4->5->null
    
    Expected:
    5->4->3->2->1->null
    
This is what the class looks like:
 
<div align="left">

    static class LinkedList {
        int value;
        LinkedList next = null;

        public LinkedList(int value) {
            this.value = value;
        }
    }
</div>

Let's start by initializing a new node to null, this will be become our previous pointer. We will also keep a Current pointer that will point to the current node we are looking at. 
Using these two pointers we can iterate over the list and reverse it. Let's take a look how:

We have the following list: 

    1->2->3->4->5->null
    
    previousNode = null
    currentPointer = 1 (the head of the list)
    
We start our iteration by setting out start values of previousNode to null and currentPoint to head. 

Lets set up out loop so that we end when currentPointer is equal to null, that's when we know we've gone through the entire list.

    while(currentPointer != null){
    
        // logic
    
    }

Per loop we have to save the next node from currentNode that we are at so that we don't loose it (remember if you don't have any reference to a node you can't access it). Here's what that looks like:


    1->2->3->4->5->null
    
    previousNode = null
    currentPointer = 1 (the head of the list)
    tempNode = 2 (the next after currentPointer)

Now that we have access to the next one, we can set the value of next for the currentPointer to previousNode, so we set the next for 1 is now null. 

    1->2->3->4->5->null
    
    previousNode = null
    currentPointer = 1 (the head of the list)
    currentPointer.next = previousNode (null)
    tempNode = 2 (the next after currentPointer)
    
Then we set up for our next loop so we set our previousNode to currentPointer and currentPointer to the tempNode we saved earlier

    1->2->3->4->5->null
    
    previousNode = currentPointer (1)
    currentPointer = tempNode (2)
    tempNode = 2 
    
Now we keep doing this until we reach null for currentPointer and we will reach the end with all nodes reversed. 

Here's what the rest of the code looks like:

<div align="left">

    public static LinkedList reverseLinkedList(LinkedList head) {
        LinkedList prev = null;
        LinkedList curr = head;

        while(curr != null){
            LinkedList temp = curr;
            curr.next = prev;
            prev = temp;
            curr = curr.next;
        }
        return head;
    }
    
</div>

Hope you found this helpful, if you still don't understand the logic here, take a look at this explanation:
[Click Here for more](https://www.geeksforgeeks.org/reverse-a-linked-list/)



