const express = require("express")
const server = express()
const bodyParser = require("body-parser")
const connectDB = require('./connection/db') //DB CONNECTION
const client = require('./connection/twilio') //TWILIO CONNECTION

server.use(bodyParser.urlencoded({extended: false})) //no interpretar como obj.

//CONECTO BASE DE DATOS
connectDB()

//INICIO DEL SERVIDOR
server.listen(3500, function (){
    console.log("server listening on port 3500")
})

// ENDPOINTS
server.get("/", async (req, res)=>{
    res.send("Servidor habilitado")
})

//Recibir mensajes enviados al bot
server.post("/inbound", async (req, res) => {
  let numUser = req.body.To
  let message = await req.body.Body
  console.log(numUser, message)
})





