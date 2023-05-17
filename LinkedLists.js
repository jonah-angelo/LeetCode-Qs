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

// WRITE NODE CLASS HERE //
//                       //
//                       //
//                       //
//                       //
///////////////////////////
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode;
        this.tail = newNode;
        this.length = 1
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
    
}

function test() {
    let myLinkedList = new LinkedList(4);

    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.getLength();
    console.log("\nLinked List:");
    myLinkedList.printList();
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1

    Linked List:
    4

*/