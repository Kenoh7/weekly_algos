// Stack = First in last out (example: control Z)
/**
 *
 * is empty = this.top is null
 *
 *
 * push - push a number into stack, make it this.top
 * add another number, push and use .next to make it this.top
 *
 * pop - reassign this.top and pop
 *
 * peek - return this.top
 *
 * size - use .length
 *
 * printStack() - rewrite it
 */
//ref:
//https://isaaccomputerscience.org/concepts/dsa_datastruct_stack?examBoard=all&stage=all

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Stack{
    constructor(){
      this.top=null;
    }
  
    isEmpty(){
      if (this.top == null){
        return true;
      } else {
        return false;
      }
      //check if the stack is empty
      //return a boolean 
    }
  
    push(data){
      let newNode = new Node(data);
      if(this.isEmpty()){
        this.top = newNode;
        return;
      }
      newNode.next = this.top;
      this.top = newNode;
      return;
      //create a node from the data
      // newNode point to the old top
      // reassign the new top
    }
  
    pop(){
      let shortStack;
      if(this.isEmpty()){
        return;
      }
      if(this.top.next == null){
        shortStack = this.top;
        this.top = null;
        return shortStack.data;
      }
      
      shortStack = this.top;
      this.top = this.top.next;
      shortStack.next = null;
      return shortStack.data;
      
      // remove and return the top item 
    }
  
    peek(){
      return this.top;
      //return the top item without removing it
    }
  
    size(){
        if(this.isEmpty()){
            return 0;
        }
        let count = 0;
        while(this.top){
            this.pop();
            count++;
        }
        return count;
      //return the size of the stack 
      // using only the above 4 operations.
    }
  
    printStack(){ // For learning purpose
      console.log("TOP")
      let runner = this.top;
      while(runner){
        console.log(runner.data);
        runner= runner.next
      }
    }
  }
  
  let s1 = new Stack();
  s1.push(1);
  s1.push(2);
  s1.push(3);
  s1.printStack(); 
  //expected:
  // TOP
  // [ 3 ] 
  // [ 2 ]
  // [ 1 ]
  
  console.log(s1.pop()); //expected: [ 3 ]
  s1.printStack();
  console.log(s1.peek());
  //expected: 3
  // TOP
  // [ 2 ] 
  // [ 1 ]