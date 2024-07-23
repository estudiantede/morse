const express = require('express')
const app = express()
const port = 3000

/*
app.get('/', (req, res) => {
      res.sendFile(__dirname + '/traductor/index.html')
})
      */

app.use(express.static('traductor'))

app.get('/', (req, res) => {
    console.log("Se llamo al lugar /")
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  