'use strict'

const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 8080;

const server=http.createServer();

server.on('request',onRequest);
server.on('listening',onListening);
server.listen(port);

function onRequest(req,res){
	let file =fs.readFileSync("public/index.html");  //nunca!! se debe utilizar metodos sincronos para leer archivos
	res.end(file);
}

function onListening(){
	console.log("el servidor esta escuchando en el puerto: "+ port);
}


