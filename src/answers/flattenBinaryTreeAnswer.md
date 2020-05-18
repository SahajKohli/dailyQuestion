---
title: "Flatten a Binary Tree"
date: "May 15th, 2020"
question: "flattenBinaryTree"
---

So there are actually two seperate answers to this problem that you can do. The first solution as you will see if much easier then the second solution. I'll show how the second solution optimizes the answer you can get.

Here's an example:

        10
       /  \
      5    15
     / \     \
    1   11    19

    The tree after being flattened would look like:

    1 <-> 5 <-> 11 <-> 10 <-> 15 <-> 19


The first thing that you might notice here is the way the doubly linked list has the numbers sorted. This is actually an inorder traversal. If this was a BST then the list would actually be in numerical order. That means that we have to do a in order traversal.

We can do that easily enough with recursion. Here's what that looks like

<div align="left">

    public static void flattenBinaryTreeSolutionRecursion(BinaryTree tree, ArrayList<BinaryTree> arrAnswer){

        flattenBinaryTreeSolutionRecursion(tree.left, arrAnswer);
        arrAnswer.add(tree);
        flattenBinaryTreeSolutionRecursion(tree.right, arrAnswer);
    }

</div>


That method above will give us the arraylist with the Binary Tree in a array. This will now allow us to basically just walk through the list and set the left and right values of the nodes to the nodes left and right of them. We just have to make sure that we deal with the case of index 0 and the last element.

Here's what that code looks like:

<div align="left">

    public static BinaryTree flattenBinaryTreeSolutionOne(BinaryTree root) {
        ArrayList<BinaryTree> inOrderArr = new ArrayList<>();
        flattenBinaryTreeSolutionRecursion(root, inOrderArr);
        BinaryTree prev = null;
        for(int i = 0; i< inOrderArr.size(); i++){
            BinaryTree currNode = inOrderArr.get(i);
            if(i == 0){
                currNode.left = null;
            } else{
                currNode.left = inOrderArr.get(i-1);
            }
            if(i == inOrderArr.size() -1){
                currNode.right = null;
            } else{
                currNode.right = inOrderArr.get(i+1);
            }
        }

        return inOrderArr.get(0);
    }

</div>

We now have a arraylist that has the nodes pointing to the left and right of where the node is. This was a relatively easy solution. But, the space time complexity here is o(n). This is because we are storing the elements of the binary tree in array. Can we optimize this?


Of course we can, it just requires more work.

If we take a look at this tree, do you notice a pattern to how the numbers are organized in the linked list?

        10
       /  \
      5    15
     / \     \
    1   11    19

    The tree after being flattened would look like:

    1 <-> 5 <-> 11 <-> 10 <-> 15 <-> 19

If we take a look at node 10, what do you notice the values left and right of it are in the arraylist?

The values are 11 and 19, lets take a look at another example:

        10
       /  \
      5    15
     / \    / \
    1   6  11  19

    The tree after being flattened would look like:

    1 <-> 5 <-> 6 <-> 10 <-> 11 <-> 15 <-> 19

If you look closely then you will notice that the value left is in the left subtree but is in the right most branch.
Also, the value right of the node is right subtree in the left most branch.

You will find that this property is followed thorughout the tree. In fact, if this was a BST this would make sense. the right most node in the left subtree is actually the closet value to the root node.

How can we use this property to make a algorythm?


We can create something like this:

<div align="left">

    public static BinaryTree[] flattenTree(BinaryTree tree){
        BinaryTree leftNode;
        BinaryTree rightNode;

        if(tree.left == null){
            leftNode = tree;
        } else{
            BinaryTree[] leftAndRightMostNode = flattenTree(tree.left);
            connectNodes(leftAndRightMostNode[1], tree);
            leftNode = leftAndRightMostNode[0];
        }

        if(tree.right == null){
            rightNode = tree;
        } else{
            BinaryTree[] rightAndLeftMost = flattenTree(tree.left);
            connectNodes(rightAndLeftMost[1], tree);
            rightNode = rightAndLeftMost[0];
        }
        return new BinaryTree[] {leftNode, rightNode};

    }

</div>

This will allow us to grab the left and nodes for each root recursively. here's all of the code together:

<div align="left">

    public static BinaryTree flattenBinaryTreeSolutionTwo(BinaryTree root) {
        flattenTree(root);
        return getLeftMost(root);
    }

    public static BinaryTree[] flattenTree(BinaryTree tree){
        BinaryTree leftNode;
        BinaryTree rightNode;

        if(tree.left == null){
            leftNode = tree;
        } else{
            BinaryTree[] leftAndRightMostNode = flattenTree(tree.left);
            connectNodes(leftAndRightMostNode[1], tree);
            leftNode = leftAndRightMostNode[0];
        }

        if(tree.right == null){
            rightNode = tree;
        } else{
            BinaryTree[] rightAndLeftMost = flattenTree(tree.left);
            connectNodes(rightAndLeftMost[1], tree);
            rightNode = rightAndLeftMost[0];
        }
        return new BinaryTree[] {leftNode, rightNode};

    }

    public static void connectNodes(BinaryTree left, BinaryTree right){
        left.right = right;
        right.left = left;
    }

    public static BinaryTree getLeftMost(BinaryTree node){
        while(node.left != null){
            node = node.left;
        }
        return node;
    }


</div>

That was a hard one, hopefully you understood most of it. It's important to understand how the recursive step works the most since that's what allows most of the logic to flow.

See you tomorrow for another question