const express = require('express');
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const hostname = 'localhost'
const port = 3000

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())


const dishRoute = require('./routes/dishRouter')
app.use('/dishes',dishRoute.router)

var leaderRouter = require('./routes/leaderRouter');
app.use('/leadership', leaderRouter.router);

var promoRouter = require('./routes/promoRouter');
app.use('/promotions', promoRouter.router);

app.use(express.static(__dirname+"/public"))


const server = http.createServer(app)

server.listen(port,hostname,()=>{
    console.log(`Server Running at http://${hostname}:${port}`)
})