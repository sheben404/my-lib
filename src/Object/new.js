function myNew(myConstructor, ...args) {
  if (typeof myConstructor !== 'function') {
    throw ('constructor must be a function')
  }
  const obj = {}
  obj.__proto__ = Object.create(myConstructor.prototype)

  const res = myConstructor.apply(obj, ...args)

  const isObject = typeof res === 'object' && typeof res !== null
  const isFunction = typeof res === 'function'
  return isObject || isFunction ? res : obj
}

function myNewNew() {
  const obj = {};
  // 取 arguments 的第一个参数，也就是传进来的对象
  // 即 arguments.shift()，返回 arguments[0]
  Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;

  const res = Constructor.apply(obj, ...args)

  const isObject = typeof res === 'object' && typeof res !== null
  const isFunction = typeof res === 'function'
  return isObject || isFunction ? res : obj
}
