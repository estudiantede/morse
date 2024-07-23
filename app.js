const express = require('express')
const app = express()
const port = 3000

app.use(express.static('traductor'))

app.get('/', (req, res) => {
    console.log("Se llamo al lugar /")
    console.log(__dirname)
    res.sendFile(__dirname + '/views/index.html')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  