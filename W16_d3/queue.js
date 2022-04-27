// deque = this.front = this.front.next
// use a temp variable to return this.front to remove

// if there is only 1 item, we should have this.front and this.rear point to null.

/**
* getFront - return the front data.
 * enqueue - 1st contstruct new node, move the pointer of this.rear, reassign the rear.
 * contains - not allowd to use anything but the methods. 
 * 
 * 1. create a temp
 * 2. Dequeue the queue until it is empty
 * 3. enque the dequeued item into the tempQ
 * 4. figure out the logic
 * 5. dequeue the tempQ to enqueue to this queue
 */


class Node{
	constructor(data){
		this.data = data;
		this.next = null;
	}
}

class SLLQueue{
	constructor(){
		this.front = null;
		this.rear = null;

	}

	isEmpty(){
        if (this.front == null){
            return true;
        } else {
            return false;
        }
	}

	getFront(){
		if(this.isEmpty()){
            return null
        }
        return this.front.data;
	}
	enqueue(data){
		// construct a new node and add to the current queue
    // 1 construct a new node
    // 2 move the pointer of this.rear
    // 3 reassign the rear
    let newNode = new Node(data);
    if(this.isEmpty()){
        this.front = newNode;
        this.rear = newNode;
        this.front.next = newNode;
    }
    this.rear.next = newNode;
    this.rear = newNode;
    return;
	}

	dequeue(){
		// remove and return from the front of the queue
    // 1. store the old front
    // 2. move the front
    let oldFront = this.front;
    this.front = this.front.next;
    if(!this.front){
        this.rear = null;
        return;
    }
    return oldFront.data;
	}

  // bonus
	contains(target) {
    // check if the queue contains the target
    if(this.isEmpty()){
        return true;
    }
    while(this.front){
        if(this.front.data == target){
            if(this.front.data == target){
                return true;
            }
        }else{
            this.dequeue();
        }
        }
    return false;
  	}

  	printQueue(){ //for learning puspose
		console.log("Front: " + this.front.data);
		var runner = this.front;
		while(runner){
			console.log(runner.data)
			runner= runner.next;
		}
		console.log("Rear: " +this.rear.data);
	}
}


var q = new SLLQueue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.enqueue("d");
q.printQueue(); //expected: front: "a", rear : "d"

q.dequeue(); 
q.printQueue(); //expected: front: "b", rear : "d"


