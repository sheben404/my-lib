class Subject{
    observers = []

    addObserver(observer){
        this.observers.push(observer)
    }
    removeObserver(observer){
        let index = this.observers.indexOf(observer)
        if(index > -1){
            this.observers.splice(index,1)
        }
    }
    notify(){
        this.observers.forEach(observer=>{
            observer.update()
        })
    }
}
class Observer{
    update(){}
    subscribeTo(subject){
        subject.addObserver(this)
    }
}

//测试代码
let subject = new Subject()
let observer = new Observer()
observer.update = function() {
  console.log('observer update')
}
observer.subscribeTo(subject)  //观察者订阅主题

subject.notify()