async function async1(){
    console.log('async1 start')
    await async2()
    // await 后面的都作为回调函数
    console.log('async1 end')
}
async function async2(){
    console.log('async2')
}

console.log('script start')

setTimeout(function(){ // 宏任务
    console.log('setTimeout')
},0)

async1()

// 初始化 Promise 的时候，传入的参数会立即执行
new Promise(function(resolve){
    console.log('Promise')
    resolve()
}).then(function(){ // 微任务 // then 是异步
    console.log('Promise2')
})

console.log('script end')

// 打印结果：
// script start
// async1 start
// async2
// Promise
// script end
// async1 end
// Promise2
// setTimeout
