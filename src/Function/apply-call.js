Function.prototype.myApply = function (thisArg, args) {
  // 声明一个独有的 Symbol 属性, 防止 fn 覆盖已有属性
  // 当然也可以生成随机字符串
  const fn = Symbol("fn");
  thisArg = thisArg || window; // 若没有传入this, 默认绑定window对象
  thisArg[fn] = this; // this指向调用call的对象,即我们要改变this指向的函数
  const result = thisArg[fn](...args); // 执行当前函数
  delete thisArg[fn]; // 删除我们声明的fn属性
  return result; // 返回函数执行结果
};

Function.prototype.myCall = function (thisArg, ...args) {
  // 声明一个独有的 Symbol 属性, 防止 fn 覆盖已有属性
  // 当然也可以生成随机字符串
  const fn = Symbol("fn");
  thisArg = thisArg || window; // 若没有传入this, 默认绑定window对象
  thisArg[fn] = this; // this指向调用call的对象,即我们要改变this指向的函数
  const result = thisArg[fn](...args); // 执行当前函数
  delete thisArg[fn]; // 删除我们声明的fn属性
  return result; // 返回函数执行结果
};

// 测试

function foo(arg1,arg2) {
  console.log(this.name)
  console.log(arg1)
  console.log(arg2)
}
const obj = {
  name: 'sheben'
}
foo(1, 2)                 // 1 2
foo.myCall(obj, 1, 2)     // sheben 1 2
foo.myApply(obj, [1, 2])  // sheben 1 2
