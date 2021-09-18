function myInstanceof(A,B){
    // 如果是基本数据类型直接返回 false
    if(typeof A !== 'object' || B === null){
        return false
    }
    // getProtypeOf是Object对象自带的一个方法，能够拿到参数的原型对象
    let proto = Object.getPrototypeOf(A)
    while (proto){
        if(proto === B.prototype){
            return true
        }
        proto = Object.getPrototypeOf(proto)
    }
    return false
}
