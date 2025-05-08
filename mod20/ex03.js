const express = require("express")
const server = express()

server.use("/api", function(req, res, next){
    console.log("Inicio")
    next()
    console.log("fim")
})

server.use("/api", function(req, res, next){
    console.log("Resposta")
    res.send("<h1>API</h1>")

})

server.listen(5000, ()=>console.log("Executando Servidor"))