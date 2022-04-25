// DLLNode, constructor need to be writen
// there are 3 things we need in double linked list next, previous, data.
// this.head points at first node, this.tail is pointing to last node.


// insertAtFront -
// 1. need to construct(create) a new node
// 2. this.head previous need to point to new Node.
// 3. newNode.next point to the head
// 4. reassign this.head to newNode

// insertAtBack - 
// 1. create a new node
// 2. reassign this.head to new node

/* 
TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
and the empty methods below the constructor.
*/
class ListNode{
    constructor(data){
      this.data = data;
      this.next = null;
      this.prev = null;
    }  
  }
  /**
   * A class to represent a doubly linked list and contain all of it's methods.
   * A doubly linked list is a singly linked list that can be traversed in both
   * directions.
   */
  class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
      // TODO: implement the constructor.
      this.head = null;
      this.tail = null;
    }
  
    isEmpty(){
      if(this.head == null){
       return true;
      }
      return false;
    }
    
    // 1. construct the DLLNODE
    // 2. this.head prev point to newNode
    // 3. newNode.next point to head
    // 4. reassign this.head to newNode
    // edge case: if the DLL is empty??
  
    insertAtFront(data) {
      let newNode = new ListNode(data);
      if(this.isEmpty()){
        this.head = newNode;
        this.tail = newNode;
      }
      else{
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
      return;
    }
    
    /**
     * Creates a new node and adds it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBack(data) {
      let newNode = new ListNode(data);
      if(this.isEmpty()){
        this.head = newNode;
        this.tail = newNode;
      }
      else{
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      return;
    }
  
    // EXTRA
    /**
     * Removes the middle node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the removed node.
     */
    removeMiddleNode() {
  
      
    }
  
    /**
     * Determines if this list is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if this list is empty.
     */
  
    /**
     * Converts this list to an array of the node's data.
     * - Time: O(n) linear, n = list length.
     * - Space: O(n) linear, array grows as list length increases.
     * @returns {Array<any>} All the data of the nodes.
     */
    toArray() {
      const vals = [];
      let runner = this.head;
  
      while (runner) {
        vals.push(runner.data);
        runner = runner.next;
      }
      return vals;
    }
  
  
  }
  
  const emptyList = new DoublyLinkedList();
  
  /**************** Uncomment these test lists after insertAtBack is created. ****************/
  const list1 = new DoublyLinkedList()
  list1.insertAtBack(1);
  list1.insertAtFront(2);
  list1.insertAtBack(3);
  list1.insertAtFront(4);
  console.log(list1.toArray());
  // console.log(list1.toArray())
  // const list2 = new DoublyLinkedList()
  // list2.insertAtBack(1)
  // list2.insertAtBack(2);
  // console.log(list2.toArray()) 
    // don't forget it's a DLL, for the constructor, 
    // we have both the head and the tail