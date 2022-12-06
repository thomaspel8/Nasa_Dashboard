const express = require('express')
const app = express()
const port = process.env.PORT || 8000
require("./DBConnection/conn")
const evenementRoute = require("./Routers/evenementRoute")

app.use(express.json())
app.use(evenementRoute)

app.listen(port, () =>{
    console.log('connection is setup at Port 8000')
})