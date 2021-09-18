function Guess(guess) {
  return new Promise((resolve, reject) => {
    //需要把n传出去，但是不能用return，所以要用resolve/reject函数
    setTimeout(() => {
      let n =parseInt(Math.random() * 6 + 1, 10); // 1~6
      if (n > 3) {
        if (guess === "big") resolve(n) 
        else reject(n)
      } else {
          if (guess === "big") reject(n)
          else resolve(n) 
        }
    }, 1000);
  });
}

async function AsyncGuess() {
  try {
    let result = await Promise.all([Guess("big"), Guess("big")]);
    console.log('结果是:' + result + " 赢大钱啦！！");
  } catch (error) {
    console.log('结果是:' + error + " 输光了呜呜~");
  }
}

let test = AsyncGuess();
console.log(test)