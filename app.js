
traductor = require('./API/api.js')
body_parser = require('body-parser')

const express = require('express')
const { traductor_desde_morse_a_texto } = require('./API/api.js')
const app = express()
const port = 3000

app.use(body_parser.urlencoded({ extended: false }));
app.use(express.static('traductor'))

app.get('/', (req, res) => {
    console.log("Se llamo al lugar /")
    console.log(__dirname)
    res.sendFile(__dirname + '/views/index.html')
})

app.post('/api/texto_a_morse', function (req, res) {
  texto_a_traducir = req.body["texto"]
  console.log("Texto a traducir: " + texto_a_traducir)
  console.log(traductor)
  texto_traducido = traductor.traductor_desde_texto_a_morse(texto_a_traducir)
  res.send(texto_traducido)
})

app.post('/api/morse_a_texto', function (req, res) {
  morse_a_traducir = req.body["texto"]
  console.log("Texto a traducir: " + texto_a_traducir)
  console.log(traductor)
  texto_traducido = traductor.traductor_desde_morse_a_texto(morse_a_traducir)
  res.send(texto_traducido)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})