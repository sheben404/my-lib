// 递归版本：
const factorial1 = (n) => {
  if (n <= 1) {
    return n;
  }
  return n * factorial1(n - 1);
};

// 尾递归版本
const factorial2 = (n, result = 1) => {
  return n === 1 ? result : factorial2(n - 1, result * n);
};
