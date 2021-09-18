// 简易版
let request = XMLHttpRequest()
request.open('GET', 'http://google.com', true)//true指定AJAX请求是同步还是异步
request.onload = ()=>{console.log(responseText)}
request.send()

// 复杂一点版
let request = XMLHttpRequest()
request.open('GET', 'http://google.com', true)
request.onreadystatechange = function(){
    if(request.readyState === 4 && request.status === 200){
        console.log(request.responseText)
    }
}
request.send()

// 引入 Promise 版
function ajax(url){
    const p = new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open('GET',url,true)
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4  && xhr.status === 200){
                resolve(JSON.parse(xhr.responseText))
            }else if(xhr.readyState === 4  && xhr.status === 404){
                reject(new Error('404 Not Found'))
            }
        }
        xhr.send()
    })
    return p
}
// 调用
ajax(url)
.then(res=>console.log(res))
.catch(err=>console.error(err))
