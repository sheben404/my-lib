// 把  { 1: 222, 2: 123, 5: 888 }
// 转化为  [222, 123, null, null, 888, null, null, null, null, null, null, null];
const obj = { 1: 222, 2: 123, 5: 888 };
const result = Array.from({ length: 12 }).map(
  (_, index) => obj[index + 1] || null
);
console.log(result);

//[222, 123, null, null, 888, null, null, null, null, null, null, null];
