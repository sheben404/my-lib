Array.prototype.myPush = function (...items) {
  let array = Object(this)
  let len = array.length >>> 0
  let argNum = items.length >>> 0

  // 2 ** 53 - 1 为JS能表示的最大正整数
  if (len + argNum > 2 ** 53 - 1) {
    throw new TypeError('The number of array is over the max value restricted!')
  }
  for (let i = 0; i < argNum; i++) {
    array[len + i] = items[i]
  }
  let newLength = len + argNum
  array.length = newLength
  return newLength
}

Array.prototype.myPop = function () {
  let array = Object(this)
  let len = this.length >>> 0
  if (len === 0) {
    array.length = 0
    return undefined
  }
  len--
  let value = array[len]
  delete array[len]
  array.length = len
  return value
}
