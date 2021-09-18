class EventBus{
    map = {}
    
    on(type,handler){
        this.map[type] = (this.map[type] || []).concat(handler)
    }
    fire(type,data){
        this.map[type] && this.map[type].forEach(handler => handler(data))
    }
    off(type,handler){
        if(this.map[type]){
            if(!handler){
                delete this.map[type]
            }else{
                let index = this.map[type].indexOf(handler)
                this.map[type].splice(index,1)
            }
        }
    }
}