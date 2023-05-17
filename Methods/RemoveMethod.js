remove(index){
    if(index === 0) return index.shift()
    if(index === this.length -1) return this.pop()
    if (index < 0 || index >= this.length) return undefined

    const before = this.get(index - 1)
    const temp = before.next

    before.next = temp.next
    temp.next = null
    this.length--
    return temp
}