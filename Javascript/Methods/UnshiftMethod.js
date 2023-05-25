// create a new node and set it equal to head

unshift(value){
    const newNode = new Node (value)
    if(!this.head){
        this.head = newNode
        this.tail = newNode
    } else {
        newNode.next = this.head
        this.head = newNode
    }
    length++
    return this
}