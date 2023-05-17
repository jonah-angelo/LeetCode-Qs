// Linked lists are 0(1) big O

// popping from end of Linked list is 0(n) because it iterates once through the array

// Removing first from LL is 0(1)

// Inserting into the middle of array is 0(n) because it needs to iterate to get to the middle


// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
// class LinkedList {
//     constructor(value){
//         const newNode = new Node(value); // creates a new node
//         this.head = newNode; // tracks the beginning of the linked list
//         this.tail = this.head; // tracks the end of the linked list
//         this.length = 1; // keeps track of length of linked list
//     }

// }

// let myLinkedList = new LinkedList(4);

// console.log(myLinkedList);

// _____________________________________________________________
//                          Exercises
// _____________________________________________________________

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
 
    pop() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
 
    unshift(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

}
 


let myLinkedList = new LinkedList(2);
myLinkedList.push(3);

console.log("Before unshift():");
console.log("-----------------");
myLinkedList.getHead();
myLinkedList.getTail();
myLinkedList.getLength();

console.log("\nLinked List:");
myLinkedList.printList();

myLinkedList.unshift(1);

console.log("\nAfter unshift():");
console.log("----------------");
myLinkedList.getHead();
myLinkedList.getTail();
myLinkedList.getLength();

console.log("\nLinked List:");
myLinkedList.printList();


/*
    EXPECTED OUTPUT:

    Before unshift():
    -----------------
    Head: 2
    Tail: 3
    Length: 2

    Linked List:
    2
    3

    After unshift():
    ----------------
    Head: 1
    Tail: 3
    Length: 3

    Linked List:
    1
    2
    3

*/