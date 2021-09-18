const shallowCopy = (target) => {
  if (typeof target === 'object' && target !== null) {
    const newTarget = Array.isArray(target) ? [] : {}
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        newTarget[key] = target[key]
      }
    }
    return newTarget
  }
  return target
}


// ... 展开运算符
const obj = {a: 1, b: 2, c: {d: 3}}
const newObj = {...obj}


// Object.assign
const obj = {name: 'sheben', age: 20}
const newObj = Object.assign({}, obj, {name: 'newSheben'})


// concat 浅拷贝数组
const array = [1, 2, 3]
const newArray = array.concat()


// slice 浅拷贝
const array = [1, 2, 3]
const newArray = array.slice()

