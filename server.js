require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose')


mongoose.connect(process.env.CONNECTIONSTRING/*isso é uma variavel de ambiente configure a sua propria como descrito no readme do projeto*/, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log('conectado ao banco de dados')
  app.emit('conexao feita')
})
.catch(e => console.log('erro'))


const routes = require("./routes")
const path = require('path')
const {middlewareGlobal} = require("./src/middlewares/middleware")

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))


app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(middlewareGlobal)//ele vai ser usado em todas as rotas

app.use(routes)

app.on('conexao feita', () =>{//esta funcao so sera executada quando o node se conectar ao mongo
  app.listen(3000, ()=> console.log('server iniciado'));//so vai começa a roda quando o node se conectar ao mongo
})


