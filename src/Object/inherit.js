//不使用class
function A(name) {
  this.name = name
}
A.prototype.sayName = function () {console.log(this.name)}

function B(name, age) {
  A.call(this, name)
  this.age = age
}

function temp() {}
temp.prototype = A.prototype
B.prototype = new temp()

B.prototype.constructor = B
B.prototype.sayAge = function () {}
let b = new B


//使用class
class C {
  constructor(name) {
    this.name = name
  }
  sayName() {console.log(this.name)}
}
class D extends C {
  constructor(name, age) {
    super(name)
    this.age = age
  }
  sayAge() {console.log(this.age)}
}


//细数class(逃
class Point {
  constructor() {}
  toString() {}
  toValue() {}
}
// 等同于
Point.prototype = {
  constructor() {},
  toString() {},
  toValue() {},
}

