// API 深拷贝 JSON.parse(JSON.stringify())
const obj = {a: 1, b: 2, c: {d: 3}}
const newObj = JSON.parse(JSON.stringify(obj))

// 可以覆盖绝大多数场景，有三个缺点
// 1.无法解决循环引用的问题；2.无法拷贝如（Date，Set，Map）特殊的对象；
// 3.无法拷贝 函数！


// 简易版深拷贝
function deepCopy(target) {
  if (typeof target === 'object' && target !== null) {
    const newTarget = Array.isArray(target) === true ? [] : {}
    for (const key in target) {
      newTarget[key] = deepClone(target[key])
    }
    return newTarget
  } else {
    return target
  }
}

// 同样有三个问题：
// 1.无法解决循环引用的问题；2.无法拷贝如（Date，Set，Map）特殊的对象；
// 3.无法拷贝 函数！


// 解决循环引用
const deepCopy = (target, map = new Map()) => {
  if (map.get(target)) {
    return target
  }
  if (typeof target === 'object' && target !== null) {
    map.set(target, true)
    const newTarget = Array.isArray(target) ? [] : {}
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        newTarget[key] = deepCopy(target[key], map)
      }
    }
    return newTarget
  } else {
    return target
  }
}
// 现在看似解决了循环引用的问题，但是引入了新问题
// Map 中对对象的引用属于强引用，不允许垃圾回收
// 为了解决这个问题，我们需要使用 WeakMap
const deepCopy = (target, map = new WeakMap()) => {
  //...
}

// TODO
// 拷贝特殊对象和函数
