import express from 'express'
import { Server } from 'socket.io'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import productsRouter from './routes/products.router.js'
import { __dirname } from './utils.js'

const app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.json());

// handlebars
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views')

app.use('/', viewsRouter)
app.use('/products', productsRouter)

const httpServer = app.listen(8080, () => {
  console.log('Escuchando al puerto 8080')
})

// socket
const socketServer = new Server(httpServer)

socketServer.on('connection', (socket) => {
  console.log('cliente conectado ', socket.id)
  socket.on('disconnect', () => {
    console.log('cliente desconectado')
  })
  socket.on('onchange', async (data) => {
  })
})