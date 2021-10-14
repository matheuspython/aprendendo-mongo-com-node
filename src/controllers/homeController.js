const HomeModel = require('../models/HomeModel')
HomeModel.find() //ira buscar todos os dados
HomeModel.create({
  titulo: 'um titulo de teste',
  descricao: 'uma descricao'
})

.then(dados => console.log(dados))
.catch(e => console.log(e))

exports.paginaInicial = (req, res)=>{
    res.render('index');
    // console.log(`oi ${req.session.nome}`)
    // next();
}

exports.trataPost = (req, res) =>{
  const {nome} = req.body
  res.send(req.body)
}