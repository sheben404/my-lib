const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const dotCt = $('.carousel .dots')
const preBtn = $('.carousel .pre')
const nextBtn = $('.carousel .next')

const panels = Array.from($$('.carousel .panels > a'))
const dots = Array.from($$('.carousel .dots span'))

const setActive = pageIndex => {
  panels.forEach(panel => panel.classList.remove('active'))
  dots.forEach(dot => dot.classList.remove('active'))
  panels[pageIndex].classList.add('active')
  dots[pageIndex].classList.add('active')
}

const getIndex = () => dots.indexOf($('.carousel .dots .active'))
const preIndex = () => (getIndex() - 1 + dots.length) % dots.length
const nextIndex = () => (getIndex() + 1) % dots.length

dotCt.onclick = e =>{
  if(e.target.tagName.toLowerCase() !== 'span') return
  let index = dots.indexOf(e.target)
  setActive(index)
}
preBtn.onclick = e => {
  let index = preIndex()
  setActive(index)
}
nextBtn.onclick = e => {
  let index = nextIndex()
  setActive(index)
}
