// 递归版本
const Fibonacci1 = (n) => {
  return n === 0 ? 0 : n === 1 ? 1 : Fibonacci1(n - 1) + Fibonacci1(n - 2);
};

// 尾递归版本

const Fibonacci2 = (n, preResult = 0, result = 1) => {
  return n === 0
    ? preResult
    : n === 1
    ? result
    : Fibonacci2(n - 1, result, result + preResult);
};
