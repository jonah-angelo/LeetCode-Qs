reverse(index){
    const temp = this.head
    this.head = this.tail
    this.tail = this.head
    let next = temp.next
    let prev = null

    for (i = 0; i < this.length; i++){
        next = temp.next
        temp.next = prev
        prev = temp
        temp = next
    }
    return this
}