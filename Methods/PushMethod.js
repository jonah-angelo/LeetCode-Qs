// step one: create new Node
// have last node point to it & tail
// inserting into empty list: have head and tail point to it

push(value){
    const newNode = new Node(value)
    if (!this.head){
        this.head = newNode
        this.head = newNode
    } else {
        this.tail.next = newNode // next points to the new node
        this.tail = newNode // points to tail
    }
    this.length++
    return this
}