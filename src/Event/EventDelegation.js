//简单版
ul.addEventListener('click',function(e){
    if(e.target.tagName.toLowerCase() === 'li'){
        fn()
    }
})
//完整版
function delegate(element, eventType, selector, fn){
    element.addEventListener(eventType,e=>{
        let el = e.target
        while(!el.matches(selector)){
            if(el===element){
                el = null
                break
            }
            el = el.parentNode
        }
        el && fn.call(el,e,el)
    })
    return element
}