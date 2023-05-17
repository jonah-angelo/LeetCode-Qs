// removes item from the end and moves tail down

pop(value){
    let temp = this.head
    let pre = this.head
    while (temp.next){
        pre = temp
        temp = temp.next
        
        if (!this.head){
            return undefined
        } 
    }
}