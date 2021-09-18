function trim2 (str) {
  for (let i = 0; i < str.length;) {
    if (str[i] === ' ') {
      str = str.replace(' ', '')
    } else { break }
  }
  let newStr = str.split('').reverse().join('')
  for (let j = 0; j < newStr.length;) {
    if (newStr[j] === ' ') {
      newStr = newStr.replace(' ', '')
    } else { break }
  }
  return newStr.split('').reverse().join('')
}

//注意substr的第二个参数是截去的字符串的长度
function trim1 (str) {
  let head = 0
  let foot = str.length
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      head++
    } else { break }
  }
  for (let j = str.length - 1; j >= 0; j--) {
    if (str[j] === ' ') {
      foot--
    } else { break }
  }
  return str.substr(head, foot - head)
}

//使用正则表达式
function _trim (string) {
  return string.replace(/^\s+|\s+$/g, '')
}
