Array.prototype.selectionSort = function(){
    for(let i = 0;i<this.length-1;i++){
        let indexMin = i
        for(let j = i; j<this.length;j++){
            if(this[j]< this[indexMin]){
                indexMin = j
            }                
        }
        if(indexMin !== i){
            const temp = this[i]
            this[i] = this[indexMin]
            this[indexMin] = temp
        }        
    }
}
const arr = [1,2,9,6,7,8,3,4,5]
arr.selectionSort()