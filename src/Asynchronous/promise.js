//promise
function Guess(guess) {
  return new Promise((resolve, reject) => {
    //需要把n传出去，但是不能用return，所以要用resolve/reject函数
    setTimeout(() => {
      let n = parseInt(Math.random() * 6 + 1, 10) // 1~6
      if (n > 3) {
        if (guess === 'big') resolve(n)
        else reject(n)
      } else {
        if (guess === 'big') reject(n)
        else resolve(n)
      }
    }, 1000)
  })
}

Guess('big').then(result => {console.log('promise结果是:' + result + ' 赢大钱啦!')}, error => {console.log('promise结果是:' + error + ' 输光了呜呜')})

//promise1 and promise2
let promise1 = Guess('big')
console.log('promise1')
console.log(promise1)
console.log('----------------')
let promise2 = Guess('big')
console.log('promise2')
console.log(promise2)

//Promise.all
Promise.all([promise1, promise2]).then(result => {console.log('.all结果是:' + result + ' 赢啦!')}, error => {console.log('.all结果是:' + error + ' 输了呜呜')})

//Promise.race
Promise.race([promise1, promise2]).then(result => {console.log('.race结果是:' + result + ' 赢啦!')}, error => {console.log('.race结果是:' + error + ' 输了呜呜')})