const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

function buscarUsuario(req, res) {
  // buscando usuario en la base de datos

  res.json({ usuario: 'Tommy' })
}


function loginUsuario(req, res) {
  const { usuario, password } = req.body

  // const usuario = req.body.usuario
  // const password = req.body.password

  res.status(200).json({ usuario, password })
}

function crearUsuario(req, res) {
  const { usuario, password } = req.body

  // const usuario = req.body.usuario
  // const password = req.body.password

  res.status(200).json({ usuario, password })
}

app.get('/user', buscarUsuario)
app.post('/user', crearUsuario)


app.post('/login', loginUsuario)

const server = app.listen(4000, function () {
  console.log('server funcionando en puerto 4000')
})



// GET Mandame informacion
// POST Crea informacion
// PUT Modificar Informacion 
// PATCH Modificar informacion selectivamente
// DELETE Borrar informacion