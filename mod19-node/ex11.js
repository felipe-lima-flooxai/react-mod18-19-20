//subindo servidor na mao

const http = require("http")

const server = http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end("<h1>Melhor usar o Express e não ficar subindo servidor na mão</h1>")
})


const porta = 3456
server.listen(porta, function(){
    console.log(`Escutando a porta ${porta}`)
})