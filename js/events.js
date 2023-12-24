import * as elements from './elements.js'

elements.home.addEventListener('click', () => {
  elements.body.classList.remove('universe')
  elements.body.classList.remove('exploration')
  elements.body.classList.add('home')
})

elements.universe.addEventListener('click', () => {
  elements.body.classList.remove('home')
  elements.body.classList.remove('exploration')
  elements.body.classList.add('universe')
})

elements.exploration.addEventListener('click', () => {
  elements.body.classList.remove('home')
  elements.body.classList.remove('universe')
  elements.body.classList.add('exploration')
})