const find = (bigStr, str) => {
  if (bigStr.length < str.length) return -1;
  for (let i = 0; i < bigStr.length; i++) {
    if (bigStr.slice(i, i + str.length) === str) return i;
  }
  return -1;
};

console.log(find('01234567','3456'))