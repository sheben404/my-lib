Array.prototype.insertionSort = function(){
    for(let i = 1;i<this.length;i+=1){
        const temp = this[i]
        let j = i
        while(j>0){
            if(this[j-1]>temp){
                this[j] = this[j-1]
            }else{
                break
            }
            j -= 1;
        }
        this[j] = temp
    }
}
const arr = [1,2,9,6,7,8,3,4,5]
arr.insertionSort()