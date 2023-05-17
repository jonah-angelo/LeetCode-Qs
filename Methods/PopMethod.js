// removes item from the end and moves tail down

pop(value){
    if (!this.head) return undefined
    let temp = this.head
    let pre = this.head
    while (temp.next){
        pre = temp
        temp = temp.next
    }
    this.tail = pre
    this.tail.next = null
    this.length--
    if (this.length === 0){
        this.head = null
        this.tail = null
    }
    return temp
}