import { app } from "./elements.js"

class Router {

  routes = {}

  addPage(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) { // O event é o click (onclick)
    event = event || window.event // Verifica se eu passei algum evento, ou pega o evento que está na window
    event.preventDefault()
  
    window.history.pushState({}, '', event.target.href) // Ao clicar no botao (home, exploration, universe), ele busca o href do target (alvo), e coloca no histórico.
  
    this.handle()

  }
  
  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
  
    fetch(route) // Me retorna uma promessa (assíncrono), ou seja, ele pormete ir buscar a rota, e quando (then) concluir volta com os dados.
    .then(data => data.text()) // Transforma os dados em texto.
    .then(html => app.innerHTML = html)
  }

}

export { Router }