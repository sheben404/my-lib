Array.prototype.myForEach = function (callbackFn, thisArg) {
  if (this === null || this === undefined) {
    throw new TypeError(`Cannot read property 'filter' of null or undefined`)
  }
  if (Object.prototype.toString.call(callbackFn) !== '[object Function]') {
    throw new TypeError(callbackfn + ' is not a function')
  }

  let array = Object(this)
  let len = array.length >>> 0
  for (let i = 0; i < len; i++) {
    callbackFn.call(thisArg, array[i], i, array)
  }
}
