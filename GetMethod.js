get(index){
    if (index < 0 || index >= this.length ){
        return undefined
    }
    let temp = this.head
    for(i = 0; i < index; i++){
        temp = temp.next
    }
    return temp
}