const json = {
    a:{b:{c:1}},
    A:{B:{C:{D:1}}}
}
const path = ['a','b','c']

let p = json
path.forEach((key)=>{
    p = p[key]
})
console.log(p)
