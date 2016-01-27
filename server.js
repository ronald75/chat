'use strict'

const http = require('http');
const port = process.env.PORT || 8080;

const server=http.createServer();

server.on('request',onRequest);
server.on('listening',onListening);
server.listen(port);

function onRequest(req,res){
	res.end("hola io.js");
}

function onListening(){
	console.log("el servidor esta escuchando en el puerto: "+ port);
}


