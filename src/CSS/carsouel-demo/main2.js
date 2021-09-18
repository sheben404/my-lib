class Carousel {
  constructor(root) {
    this.root = root
    this.panels = Array.from(root.querySelectorAll('.panels a'))
    this.dotCt = root.querySelector('.dots')
    this.dots = Array.from(root.querySelectorAll('.dots span'))
    this.preBtn = root.querySelector('.pre')
    this.nextBtn = root.querySelector('.next')

    this.bind()
  }

  get index(){
    return this.dots.indexOf(this.root.querySelector('.dots .active'))
  }

  get preIndex(){
    return (this.index - 1 + this.dots.length) % this.dots.length
  }
  get nextIndex(){
    return (this.index + 1) % this.dots.length
  }

  bind(){
    this.dotCt.onclick = e => {
      if(e.target.tagName.toLowerCase() !== 'span') return
      let index = this.dots.indexOf(e.target)
      this.setActive(index)
    }
    this.preBtn.onclick = e =>{
      let index = this.preIndex
      this.setActive(index)
    }
    this.nextBtn.onclick = e =>{
      let index = this.nextIndex
      this.setActive(index)
    }

  }
  setActive(index){
    this.panels.forEach(panel => panel.classList.remove('active'))
    this.dots.forEach(dot => dot.classList.remove('active'))
    this.panels[index].classList.add('active')
    this.dots[index].classList.add('active')
  }
}
new Carousel(document.querySelector('.carousel'))