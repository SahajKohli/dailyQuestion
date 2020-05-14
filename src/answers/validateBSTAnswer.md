---
title: "Validate BST"
date: "May 14th, 2020"
question: "validateBST"
---

There are a couple ways to solve the problem, but alot of people get caught up in the wrong way of evaluating the BST.

If your first thought when looking at this problem was: "all I have to do is compare the left node with the root node and right node with the node to check is left is smaller and right is bigger and I'm done" then you're not the only one.

There are a couple more steps to answer then just that. If we were to compare only the right and left nodes to root then we wouldn't find something like:

        10
       /  \
      5    15
     / \     \
    1   11    11

If you were to use the method mentioned above your solution would return true here. But, the number 11 on the right side of 5 is bigger then 10. We can't have a number on the left hand side of a BST that's bigger then the root.

We do learn something from this though, along with making sure that our left and right of our current root are balanced (left is smaller then current root and right is bigger or equal to our current root) we have to make sure that the left hand side of the tree doesn't contain any nodes with values over the root they belong to.
In this case that means anything to the left of 10 is not bigger then 10.

    So we have make sure of this:

    parent.left.value < parent.value
    If parent is 10: 5 < 10

    But ALSO:

   if currentNode is left child of parentNode

   currentNode.left < parentNode.value;
   currentNode.right < parentNode.value;


But what does this tell us about the right side of the tree?
If the left side has a ceiling of how high the values can go then the right side must have a floor. This is because the property of BST states that we must have only higher numbers then the root on the right side.

    So we have make sure of this for the right side:

    parent.right.value >= parent.value
    If parent is 10: 15 > 10

    But ALSO:

   if currentNode is right child of parentNode

   currentNode.right > parentNode.value;
   currentNode.left > parentNode.value;


So now we know that we along side making sure that left and right node of the current node are lower and higher values we have enforce the ceiling and floor of each side.  We can do it by passing along a max and min value to ur function.


### Implementations

#### Iterative

I feel like in this case it will help to gain a better understanding of the cases using a iterative implementation, but I'll also include a recursive answer.

I'll paste the code below, but I'll go over the basic algo here:

    1. Create a Queue and push the starting node into it, initialize the max and min for every node in the BST to MAX_VALUE and MIN_VALUE by editing the TreeNode class
    2. Loop through the Queue until it is empty
    3. Pop the first node in queue (will refer to that as currentNode)
    4. Check if the left node exists on the current node
    5. Check to see if the left node is larger then currentNode value
    6. If both the properties above are false then we set the max value of the left node to value of the currentNode and then add it back to the queue
    7. Check if the right node exists on the current node
    8. Check to see if the right node is smaller then currentNode value, check to see if the right node is bigger then the max value of the current node, check to see if the right node is smaller then the min value of the current node
    9. If both the properties above are false then we set the max value of the left node to value of the currentNode.max and the min property to the right to value of the current node then add it back to the queue
    10. If we reach the end of the while loop then the BST is balanced

Here's the Code:

<div align="left">

    public static boolean validateBst(BST tree) {
        Queue<BST> nodes = new LinkedList<>();
        BST current = tree;

        nodes.add(current);
        while(!nodes.isEmpty()){
            BST curr = nodes.poll();

            if(curr.left != null ){
                if(curr.left.value >= curr.value || curr.left.value < curr.lowestVal){
                    return false;
                } else{

                    curr.left.highestVal = curr.value;
                    nodes.add(curr.left);
                }
            }

            if(curr.right != null){
                if(curr.right.value < curr.value || curr.right.value >= curr.highestVal || curr.right.value < curr.lowestVal){
                    return false;
                } else{
                    curr.right.lowestVal = curr.value;
                    curr.right.highestVal = curr.highestVal;
                    nodes.add(curr.right);
                }
            }

        }
        return true;
    }

        static class BST {
            public int value;
            public BST left;
            public BST right;
            public int highestVal;
            public int lowestVal;

            public BST(int value) {
                this.value = value;
                this.highestVal = Integer.MAX_VALUE;
                this.lowestVal = Integer.MIN_VALUE;
            }
        }

</div>

#### Recursive

I came up with two methods to do this, the first one popped up into my head randomly so I'll go over that one. The second method is alot cleaner though, if you're looking for a quick and easy way.it

    1. Our end statement will be that our currentNode is null, we know we've reach the last node and then we'll return true
    2. Setup two booleans, one for checking the right subtree and one for left
    3. Check to see the current node satisfy's the behavior we're looking for:
        - Check to see if it's greater then the highest value
        - Check to see it's lower then the least value
    4. If it satisfies though behavior we set our boolean to node.left and node.right and recurse


Here's the Code:

<div align="left">

    public static boolean validateBSTRecursive(BST tree, int highest, int lowest){
        if(tree == null){
            return true;
        }
        boolean left = false;
        boolean right = false;

        if(tree.value > highest){
            return false;
        } else{
            System.out.println(highest);
             left = validateBSTRecursive(tree.left, tree.value, Integer.MIN_VALUE);
        }

        if(tree.value <= lowest || tree.value > highest){
            return false;
        } else{
            System.out.println(highest);
            right = validateBSTRecursive(tree.right, highest, lowest);
        }

        return (left && right);
    }

</div>


Here's the code for the cleaner version:


<div align = "left">

    public static boolean validateBSTRecursive2(BST tree, int highest, int lowest){

        if(tree.value >= highest || tree.value < lowest){
            return false;
        }
        if(tree.left != null && !validateBSTRecursive2(tree.left, tree.value, Integer.MIN_VALUE)){
            return false;
        }
        if(tree.right != null && !validateBSTRecursive2(tree.right, highest, tree.value)){
            return false;
        }

        return true;
    }

</div>


Hope you had fun with this one, see ya'll tomorrow!