function MyPromise(fn){
  // Promise resolve 时的回调函数集
  this.cbs = []

  // 传递给 Promise 处理函数的 resolve
  // 这里直接往实例上挂个 data
  // 然后把 onResolvedCallback 数组里的函数依次执行一遍即可

  const resolve = (value) => {
    // 注意 promise 的 then 函数需要异步执行
    setTimeout(() => {
      this.data = value
      this.cbs.forEach((cb) => {
        return cb(value)
      })
    })
  }

  // 执行用户传入的函数
  // 并把 resolve 方法交给用户执行
  fn(resolve)
}

MyPromise.prototype.then = function(onResolved){
  // 这里叫做 promise2
  return new MyPromise((resolve) => {
    this.cbs.push(() => {
      // onResolved就对应then传入的函数
      const res = onResolved(this.data)
      if(res instanceof MyPromise){
        // resolve 的权力被交给了 user promise
        res.then(resolve)
      }else{
        // 如果是普通值，就直接 resolve
        // 依次执行 cbs 里的函数，并且把值传递给 cbs
        resolve(res)
      }
    })
  })
}

const fn = (resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 500);
};

new MyPromise(fn);
