insert(index, value){
    if (index === 0) return this.unshift(value) // if it's in the end
    if (index === this.length) return this.push(value) 
    if (index < 0 || index > this.length) return false
    
    const newNode = new Node(value)
    const temp = this.get(index - 1)

    newNode.next = temp.next
    temp.next = newNode
    this.length++
    return true
}