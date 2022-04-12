// contain -- check to see if is larger than the current.data
// if larger then you have to check the branches on the right.
// if(searchKey > curr.data) means you need to move to the right.
//  curr = curr.right
// if(searchKey < curr.data)
// cur = curr.left // return true
// search if the contains searchVal is in the tree

// containsRecursive
// dont use a while loop, use a if statement
// return the same function


// range
// search for the range, search for max and min.
// max - min = range.


/**
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
      this.left = null;
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
  
      isEmpty() {
        if(this.root){
          return false;
      }  
        else{
          return true;
      }
    }
  
    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal : The number to search for
     * @returns {boolean} : Indicates if the searchVal was found.
     */
    contains(searchVal) {
      let current = this.root;
      if (this.isEmpty()){
        return; 
      }
      while(current){
      if (searchVal > current.data){
        current = current.right;
        }
      else if (searchVal < current.data){
        current = current.left;
      }
      else{
          return true
      }
    }
    return false;
}
  
      /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal: The number to search for in the node's data.
     * @returns {boolean} : Indicates if the searchVal was found.
     */
    containsRecursive(searchVal, current = this.root) {
        if(current == null){
            console.log("Empty tree")
            return;
        }
        else if (current.data == searchVal){
            return true;
        }
        else if (current.data < searchVal){
            return this.containsRecursive(searchVal, current.right);
        }
        else if(current.data > searchVal){
            current = current.left;
            return this.containsRecursive(searchVal, current.left);
        }
        return this.containsRecursive(searchVal, current);
    }
  
    /**
     * Calculates the range (max - min) from the given startNode.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} startNode : The node to start from 
     * @returns {number|null} : The range of this tree or a sub tree 
     * depending on if the startNode is the root or not.
     *   
     */
    range(startNode = this.root) {

    }
  
  
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
  
  /* threeLevelTree 
          root
          10
        /   \
      5     15
    / \    / \
  2   8  13  20
  */
  const threeLevelTree = new BinarySearchTree();
  threeLevelTree.root = new BSTNode(10);
  threeLevelTree.root.left = new BSTNode(5);
  threeLevelTree.root.left.left = new BSTNode(2);
  threeLevelTree.root.left.right = new BSTNode(8);
  threeLevelTree.root.right = new BSTNode(15);
  threeLevelTree.root.right.right = new BSTNode(20);
  threeLevelTree.root.right.left = new BSTNode(13);
  threeLevelTree.print()
//   console.log(threeLevelTree.contains(3))
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
  
  