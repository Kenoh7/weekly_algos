// size: need to count the size, return total count of node (ex: 7);
// height: find out the height of the tree, (ex: 4) // hint: right height is different from left height, get the one with higher layer.
// isFull: have both left and right except for last node, true or faulse if it is a full tree.

/**
reference:
http://btv.melezinek.cz/binary-search-tree.html
 * Class to represent a Node in a Binary Search Tree (BST).
 * The properties in the constructor are how this node is 
 * connected to other nodes to form the tree. 
 * Similar to .next in a SinglyLinkedList except a BST node can
 * be connected to two other nodes. To start, new nodes are not
 * connected to any other nodes, these properties will be set 
 * after the new node is instantiated.
 */
class BSTNode { // TreeNode , node
    constructor(data) {
      this.data = data;
      this.left = null; // a BSTNode with a smaller value
      this.right = null; 
    }
  }
  
    /**
     * Represents an ordered tree of nodes where 
     * the data of left nodes are <= to their parent and
     * the data of right nodes are > their parent's data.
     */
    class BinarySearchTree {
      constructor() {
        this.root = null;
      }
  
    printInorder(curr = this.root){
      if(!curr){
        return;
      }
      if(curr){
        this.printInorder(curr.left);
        console.log(curr.data);
        this.printInorder(curr.right);
      } 
    }
  
    printPreorder(curr = this.root){
      if(!curr){
        return;
      }
      if(curr){
        console.log(curr.data);
        this.printInorder(curr.left);
        this.printInorder(curr.right);
      } 
    }  
  
    printPostorder(curr = this.root){
      if(!curr){
        return;
      }
      if(curr){
        this.printInorder(curr.left);
        this.printInorder(curr.right);
        console.log(curr.data);
      } 
    } 
      
    /**
     * Recursively counts the total number of nodes in this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during the traversal of this tree.
     * @returns {number} The total number of nodes.
     */
  
      
    size(node = this.root, count = 0) {
        if (!node) {
            return;
        }
        if (node) {
            count +=1;
            count = this.toArrInorder(curr.left, count);
            count = this.toArrInorder(curr.right, count);
        }
        return count;
      
    }
    // sizeTwo(node = this.root, count= 0){
    //   if(!node) {
    //     return count
    //   }
    //   if(node){
    //     if(!node.left || !node.right){
    //       count++
    //       this.sizeTwo(node.left, count)
    //       this.sizeTwo(node.right, count)
    //     }
    //   }
    //   return count
    // }
  // So... the method will run and count++ at last
      // that means, line 92 and 93 may not be able to know the latest update of the count. The count will keep updating to 0
    /**
     * Calculates the height of the tree which is based on how many nodes from
     * top to bottom (whichever side is taller).
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {number} The height of the tree.
     */
    
    // Option 1
    height(node = this.root) {
        if(node == null){
            return 0;
        }
        let left = this.height(node.left)
        let right = this.height(node.right)

        if(left > right){
            return 1 + left;
        }else{
        return 1 + right;
    }
}


    // Option 2
    height1(node = this.root){
        if(node == null){
            return 0;
        }
        return 1 + Math.max(this.height1(node.left), this.height1(node.right))
    }
    
    /**
     * Determines if this tree is a full tree. A full tree is a tree where every
     * node has both a left and a right except for the leaf nodes (last nodes)
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {boolean} Indicates if this tree is full.
     */
    isFull(node = this.root) {}
      
      
      // HELPER METHOD
      // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
      if (!node) {
        return;
      }
  
      spaceCnt += spaceIncr;
      this.print(node.right, spaceCnt);
  
      console.log(
        " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
          `${node.data}`
      );
  
      this.print(node.left, spaceCnt);
    }
  
    insert(newVal) {
      const node = new BSTNode(newVal);
  
      if (!this.root) {
        this.root = node;
        return this;
      }
  
      let current = this.root;
  
      while (true) {
        if (newVal <= current.data) {
          if (current.left === null) {
            current.left = node;
            return this;
          }
  
          current = current.left;
        } else {
          // newVal is greater than current.data
          if (current.right === null) {
            current.right = node;
            return this;
          }
  
          current = current.right;
        }
      }
    }
  
  
      
  }
  
  const emptyTree = new BinarySearchTree();
  const oneNodeTree = new BinarySearchTree();
  oneNodeTree.root = new BSTNode(10);
  // oneNodeTree.print()
  
  /* twoLevelTree
          root
          10
        /   \
      5     15
  */
  const twoLevelTree = new BinarySearchTree();
  twoLevelTree.root = new BSTNode(10);
  twoLevelTree.root.left = new BSTNode(5);
  twoLevelTree.root.right = new BSTNode(15);
  // twoLevelTree.print()
  console.log(twoLevelTree.size())
  /* threeLevelTree 
          root
          10
        /   \
      5     15
    / \    / \
  2   8  13  20
  */
  const threeLevelTree = new BinarySearchTree();
  threeLevelTree.insert(10)
  threeLevelTree.root = new BSTNode(10);
  threeLevelTree.root.left = new BSTNode(5);
  threeLevelTree.root.left.left = new BSTNode(2);
  threeLevelTree.root.left.right = new BSTNode(8);
  threeLevelTree.root.right = new BSTNode(15);
  threeLevelTree.root.right.right = new BSTNode(20);
  threeLevelTree.root.right.left = new BSTNode(13);
  threeLevelTree.print()
  /* fullTree
                      root
                  <-- 25 -->
                /            \
              15             50
            /    \         /    \
          10     22      35     70
        /   \   /  \    /  \   /  \
      4    12  18  24  31  44 66  90
  */
  
  
  const fullTree = new BinarySearchTree();
  fullTree
    .insert(25)
    .insert(15)
    .insert(10)
    .insert(22)
    .insert(4)
    .insert(12)
    .insert(18)
    .insert(24)
    .insert(50)
    .insert(35)
    .insert(70)
    .insert(31)
    .insert(44)
    .insert(66)
    .insert(90);
  