Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i += 1) {
    for (let j = 0; j < this.length - 1 - i; j += 1) {
      //这里的减 i 也算是一个小优化
      if (this[j] > this[j + 1]) {
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
};


function maopao(arr) {
    const array = [...arr];
    for (let i = 0, len = array.length; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        if (array[i] > array[j]) {
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
    return array;
  }