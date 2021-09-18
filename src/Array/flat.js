// 如何把数组扁平化，即把多维数组转化为一维数组
// 1
{
  let array = [1, 2, 3, 4, [5, 6, 7, [8, 9, [10, 11]]]]
  array = array.flat()
}


// 2
{
  let array = [1, 2, 3, 4, [5, 6, 7, [8, 9, [10, 11]]]]
  let string = JSON.stringify(array)
  string = string.replace(/(\[|\])/g, '')
  string = '[' + string + ']'
  array = JSON.parse(string)
}


// 3
{
  let array = [1, 2, 3, 4, [5, 6, 7, [8, 9, [10, 11]]]]
  let flatten = function (array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      let item = array[i]
      if (Array.isArray(array[i])) {
        result = result.concat(flatten(item))
      } else {
        result.push(item)
      }
    }
    return result
  }
  flatten(array)
}


// 4
let array = [1, 2, 3, 4, [5, 6, 7, [8, 9, [10, 11]]]]

function flatten(array) {
  return array.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
}

console.log(flatten(array))


// 5
// 前置知识 [].concat(4,[5,6],[9,[10,11]]) 的结果是 [4, 5, 6, 9,[10, 11]]
function flatten(array) {
  const isDeep = array.some(item => item instanceof Array)
  if (!isDeep) {return array}
  const res = [].concat(...array)
  return flatten(res)
}

console.log(flatten([1, 2, 3, [4, 5, [6, 7]], 8]))
