// 方法 1
function swapString1(str) {
  const arr = str.split("");
  const newArr = arr.map((item) => {
    return item === item.toUpperCase()
      ? item.toLowerCase()
      : item.toUpperCase();
  });
  return newArr.join("");
}

// 方法 2
function swapString2(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    item === item.toUpperCase()
      ? (result += item.toLowerCase())
      : (result += item.toUpperCase());
  }
  return result;
}

console.log(swapString1("ADasfADads123!@$!@#"));
console.log(swapString2("ADasfADads123!@$!@#"));
