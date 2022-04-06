/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
 class ListNode{
    constructor(data){
      this.data = data;
      this.next = null;
    }  
  }
  
  /**
   * SLL(Singly Linked List) 
   * keeps track of the start (head) of the list and to store all the
   * functionality (methods) that each list should have.
   */
  class SLL{
    constructor(){
      this.head = null;
    }
  
   insertAtBack(data) {
      var newNode = new ListNode(data);
     
      if(!this.head){
       this.head = newNode; 
      }
      var runner = this.head;
      while (runner) {
        // console.log(runner.data)
        runner = runner.next
      }
      runner = newNode;
      // console.log(runner.data);
      // use data to make new node to insert into back of list
      // ListNode.push(data)
  
    }
  
  
    // -----------W1D3 -------------
      /**
     * Creates a new node with the given data and inserts that node at the front
     * of the list.
     * @param {any} data The data for the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtFront(data){
      var newNode = new ListNode(data);
    //   if (this.head == null){ // empty list
    //     this.head = newNode; 
    //   }else{ // the list is not empty
        newNode.next = this.head;
        this.head = newNode; 
    //   }
      // instantiate the ListNode based on data
      // pointer of the newNode to the original head
      // reassign the head
      // newNode.next 
  
      // how do we handle an empty list
    }
  
      /**
     * Removes the first node of this list.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The data from the removed node.
     */
    removeHead() {
        if(this.head) {
            this.head = this.head.next;
        }else{
            console.log("Empty List")
        }
    }
    
    
    //given
    printList(){
      if(!this.head){
          console.log("Empty list");
          return
      }
      var runner = this.head;
      while(runner){ // while(runner != null)
          console.log(runner.data);
          runner = runner.next;            
      }
    }
  }
  
  
  
  
  
  
  var sll1 = new SLL(); // EMPTY LIST
  sll1.insertAtFront(3);
  sll1.insertAtFront(2);
  sll1.insertAtFront(1);
  sll1.printList();
  
  
  // Insert at Back
  var sll2 = new SLL(); 
  sll2.insertAtBack(5);
  sll2.insertAtBack(6);
  sll2.insertAtBack(7);
  
  // Insert at Front
  sll2.insertAtFront(4);
  sll2.insertAtFront(3);
  sll2.insertAtFront(2);
  
  // HEAD
  // (5) -> (6) -> (7) -> NULL
  
  sll2.printList();
  sll2.removeHead();