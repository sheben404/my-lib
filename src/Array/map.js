// easy mode
Array.prototype.myMap = function (fn) {
  let result = []
  let arr = this

  if (typeof fn !== 'function') {
    throw '参数必须为函数'
  }
  if (!Array.isArray(arr)) {
    throw '只能对数组使用map方法'
  }

  for (let index = 0; index < arr.length; index++) {
    result.push(fn(arr[index], index, arr))
  }
  return result
}

// complex mode 仿照草案
Array.prototype.myMap = function (callBackFn, thisArg) {
  // 处理数组类型异常
  if (this === null || this === undefined) {
    throw new TypeError(`Cannot read property 'map' of null or undefined`)
  }

  // 处理回调类型异常
  if (Object.prototype.toString.call(callBackFn) !== '[object Function]') {
    throw new TypeError(callBackFn + ' is not a function')
  }

  let array = Object(this)
  let T = thisArg

  let len = array.length >>> 0;
  // length >>> 0, 字面意思是指"右移 0 位"
  // 实际上是把前面的空位用0填充
  // 这里的作用是保证len为数字且为整数
  // null >>> 0                 //0
  // undefined >>> 0            //0
  // void(0) >>> 0              //0
  // function a (){};  a >>> 0  //0
  // [] >>> 0                   //0
  // var a = {}; a >>> 0        //0
  // 123123 >>> 0               //123123
  // 45.2 >>> 0                 //45
  // 0 >>> 0                    //0
  // -0 >>> 0                   //0
  // -1 >>> 0                   //4294967295
  // -1212 >>> 0                //4294966084

  let res = new Array(len)
  for (let key = 0; key < len; key++) {
    if (key in array) {
      let kValue = array[key]
      res[key] = callBackFn.call(T, kValue, key, array)
    }
  }
  return res;
}
