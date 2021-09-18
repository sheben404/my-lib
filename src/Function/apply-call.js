Function.prototype.myApply = function (context, args) {
  context = (typeof context === 'object' ? context : window)
  context.fn = this
  let res = context.fn(...args)
  delete context.fn
  return res
}


Function.prototype.myCall = function (context, ...args) {
  context = (typeof context === 'object' ? context : window)
  context.fn = this
  let res = context.fn(...args)
  delete context.fn
  return res
}
