function sleep1 (delay) {
  const start = (new Date()).getTime()
  while ((new Date()).getTime() - start < delay) {
    continue
  }
}

function sleep2 (time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

// 测试 sleep1
function test1 () {
  console.log('111')
  sleep1(2000)
  console.log('222')
}

test1()

// 测试 sleep2
sleep2(1000).then(() => {console.log('hello')})

// 或者
async function test2 () {
  console.log('111')
  await sleep2(2000)
  console.log('222')
}

test2()
