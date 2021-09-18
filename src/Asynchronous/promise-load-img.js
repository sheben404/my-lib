function loadImg(src){
    return new Promise((resolve,reject)=>{
        const img = document.createElement('img')
        img.onload = ()=>{
            resolve(img)
        }
        img.onerror = ()=>{
            const err = new Error(`图片加载失败 ${src}`)
        }
        img.src = src
    })
}