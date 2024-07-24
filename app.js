//Requires
traductor = require('./API/api.js')
body_parser = require('body-parser')
const express = require('express')
const { traductor_desde_morse_a_texto } = require('./API/api.js')

//Creation of the server
const app = express()
const port = 3000

//Middleware
app.use(body_parser.urlencoded({ extended: false })) //Para poder acceder a los parametros con POST, por medio del req.body[nombre_del-parametro]

app.use(express.static('traductor')) //Para enviar el archivo js.js, el css y las imagines

app.use(function middleware(req, res, next) {
  console.log("Se llamo a una direccion: ")
  console.log(req.method + " " + req.path + " - " + req.ip + " - " + req.url)
  console.log()
  next()
}) 

//Root
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

//For the API

//Traduce de texto a morse
//Recibe de parametro un texto en morse para traducir a texto normal
app.post('/api/texto_a_morse', function (req, res) {
  texto_a_traducir = req.body["texto"]
  //console.log("Texto a traducir: " + texto_a_traducir)
  texto_traducido = traductor.traductor_desde_texto_a_morse(texto_a_traducir)
  //console.log("La res del post es: " + texto_traducido)
  res.send(texto_traducido)
})

//Traduce de morse a texto
//Recibe de parametro un texto en morse para traducir a texto normal
app.post('/api/morse_a_texto', function (req, res) {
  morse_a_traducir = req.body["texto"] + " "
  //console.log("Texto a traducir: " + morse_a_traducir)
  texto_traducido = traductor.traductor_desde_morse_a_texto(morse_a_traducir)
  //console.log("La res del post es: " + texto_traducido)
  res.send(texto_traducido)
})

//Listen to the port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})