import { Router } from './router.js'
import './events.js'

const routerClass = new Router()

routerClass.addPage('/', 'pages/home.html')
routerClass.addPage('/universe', '/pages/universe.html')
routerClass.addPage('/exploration', '/pages/exploration.html')
routerClass.addPage('404', '/pages/404.html')

routerClass.handle()

window.onpopstate = () => routerClass.handle()
window.route = () => routerClass.route()