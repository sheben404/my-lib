// 使用 Set，因为 Set 是类数组，需要转化为数组
Array.prototype.unique = function () {
  return Array.from(new Set(this));
  // return [... new Set(this)]
};

// 使用 Map
Array.prototype.unique = function () {
  const res = new Map();
  return this.filter((item) => !res.has(item) && res.set(item, 1));
};

// 使用 indexOf
Array.prototype.unique = function () {
  const args = this;
  const len = args.length;
  const result = [];
  let flag = true;
  for (let i = 0; i < len; i++) {
    if (args.indexOf(args[i]) != -1) {
      // NaN 不等于任何，包括他自身,所以 args.indexOf(args[i]) 遇到 NaN 永远返回 -1
      if (i === args.indexOf(args[i])) {
        result.push(args[i]);
      }
    } else if (flag) {
      result.push(args[i]);
      flag = false;
    }
  }
  return result;
};

function unique(arr) {
  return [...new Set(arr)];
  //return Array.from(new Set(arr))
}

function unique(arr) {
  const res = new Map();
  return arr.filter((item) => !res.has(item) && res.set(item, 1));
}

function unique(arr){
  return Array.prototype.filter.call(arr,function(item,index){
      return arr.indexOf(item) === index
  })
}

function unique(arr){
  let res = []
  for(let i = 0;i<arr.length;i++){
      if(res.indexOf(arr[i]) === -1){
          res.push(arr[i])
      }
  }
  return res
}

// 对于只有数字的数字，相邻元素去重
function unique(arr) {
  arr = arr.sort();
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) res.push(arr[i]);
  }
  return res;
}

//利用对象属性去重
function unique(arr) {
  let res = [];
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      res.push(arr[i]);
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  return res;
}

//双循环
function unique(arr){
  let res = [arr[0]]
  for(let i = 1;i<arr.length;i++){
      let flag = true
      for(let j = 0;j<res.length;j++){
          if(arr[i]===res[j]){
              flag = false
              break
          }
      }
      if(flag){
          res.push(arr[i])
      }
  }
  return res
} 