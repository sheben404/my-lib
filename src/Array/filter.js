Array.prototype.myFilter = function (callbackFn, thisArg) {
  if (this === null || this === undefined) {
    throw new TypeError(`Cannot read property 'filter' of null or undefined`)
  }
  if (Object.prototype.toString.call(callbackFn) !== '[object Function]') {
    throw new TypeError(callbackfn + ' is not a function')
  }

  let array = Object(this)
  let len = array.length >>> 0
  let res = []
  for (let i = 0; i < len; i++) {
    if (i in array) {
      if (callbackFn.call(thisArg, array[i], i, array)) {
        res.push(array[i])
      }
    }
  }
  return res
}
