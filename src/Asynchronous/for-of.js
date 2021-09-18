function muti(num){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(num * num)
        },1000)
    })
}

const nums = [1,2,3]

// nums.forEach(async (i)=>{
//     const res = await muti(i)
//     console.log(res)
// })


// for...of 是一步一步执行
!(async function(){
    for(let i of nums){
        const res = await muti(i)
        console.log(res) 
    }
})()