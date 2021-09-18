// call()、bind()、apply()的用法，改变this的指向，区别在于
// f.call(obj, arg1, arg2...),
// f.apply(obj, [arg1, arg2, .]),
// f.bind(obj, arg1, arg2,...)()

function changeThis1(f, thisTarget) {
  return function () {
    return f.call(thisTarget, ...arguments);
  };
}

function changeThis2(f, thisTarget) {
  return function () {
    return f.apply(thisTarget, arguments);
  };
}

function changeThis3(f, thisTarget) {
  return f.bind(thisTarget);
}

const r = changeThis1(
  function (a, b) {
    return this.test + a + b;
  },
  { test: 2 }
);

console.log(r(2,3) === 7) // true