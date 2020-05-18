---
title: "Shift Linked List "
date: "May 18th, 2020"
question: "shiftlinkedlist"
---

So did you get this one? How'd you do?

There's multiple ways of solving this problem so the solution I have might be different from the one you came up with.18th

Let's start by making the problem simplier, lets only think about moving the nodes one space and not think about the negative instances.

If we only have to move one node for this case, how do we do that?

Well if you notice that a one node movement here pretty much just means that the last node becomes the head and the second to last node becomes the new tail

Something like this:

  head = 0 -> 1 -> 2 -> 3 -> 4 -> 5

  1 movement over

  head = 5 -> 0 -> 1 -> 2 -> 3 -> 4

It's not that much work if we look at the end state like that. If we just update the head and tail the rest of the list will follow.

This code does just that:

<div align="left">

    LinkedList curr = moveOneSpot(head, negative);
    LinkedList lastNode = curr.next;
    curr.next = null;
    lastNode.next = head;
    head = lastNode;
    System.out.println(head.value);

        public static LinkedList moveOneSpot(LinkedList head, Boolean negative){
            LinkedList curr = head;
    				while(curr.next.next != null){
    					curr = curr.next;
    				}
    			return curr;

        }

</div>

The moveOneSpot method just returns the second to last node so that we change the tail and head

Now that we have that we can deal with the case of the negative numbers. In a megative number we still change the tail and head just the other way. So we can keep using the methof moveOneSpot but just adjust what replaces the head and tail.

Like so:

<div align="left">

    LinkedList curr = moveOneSpot(head, negative);
    LinkedList oldHead = head;
    head = head.next;
    oldHead.next = null;
    curr.next.next = oldHead;
    System.out.println(head.value);

</div>

Now all we have to do is track the negative so that we know when to use the former:

<div align="left">

    public static LinkedList shiftLinkedList(LinkedList head, int k) {

                int counter =0;
				boolean negative = false;
        while(counter != Math.abs(k)){
					if(k < 0) negative = true;
					if(!negative){
						LinkedList curr = moveOneSpot(head, negative);
						LinkedList lastNode = curr.next;
						curr.next = null;
						lastNode.next = head;
						head = lastNode;
						System.out.println(head.value);
					} else{
						LinkedList curr = moveOneSpot(head, negative);
						LinkedList oldHead = head;
						head = head.next;
						oldHead.next = null;
						curr.next.next = oldHead;
						System.out.println(head.value);
					}

					counter++;
        }
        return head;
    }

    public static LinkedList moveOneSpot(LinkedList head, Boolean negative){
        LinkedList curr = head;
				while(curr.next.next != null){
					curr = curr.next;
				}
			return curr;

    }

</div>

We can make this code a little simplier by using the mod operator and not doing the extra work of moving nodes k times, but that a optimization you can think about that.moveOneSpot

Well, seeya next time!