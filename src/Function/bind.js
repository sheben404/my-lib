// bind 函数做了什么？
// 对于普通函数，绑定 this 指向
// 对于构造函数，保证原函数的原型对象上的属性不能丢失

Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new Error('Function.prototype.bind - what is trying to be bound is not callable');
  }

  // 使用 self 保存调用 bind 的函数
  const self = this
  const newFn = function () {}
  const fnBound = function () {
    self.apply(
      context, args.concat(Array.prototype.slice().call(arguments))
    )
  }
  newFn.prototype = this.prototype
  fnBound.prototype = new newFn()

  return fnBound
}
