// 打印出 1 - 10000 之间的所有对称数
// 如 121  1221
const a = [...Array(10000).keys()].filter((x) => {
  return (
    x.toString().length > 1 &&
    x === Number(x.toString().split("").reverse().join(""))
  );
});

const b = [...Array(10000).keys()].filter((x) => {
  return (
    x.toString().length > 1 &&
    x.toString() === x.toString().split("").reverse().join("")
  );
});
