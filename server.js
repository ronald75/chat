'use strict'

const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 8080;

const server=http.createServer();

server.on('request',onRequest);
server.on('listening',onListening);
server.listen(port);

function onRequest(req,res){
	let filename = path.join(__dirname,"public","index.html");

	res.setHeader('Content-Type','text/html');
	let rs = fs.createReadStream(filename);   // se define el stream de lectura
	rs.pipe(res);
	rs.on('error',function(err){
		rs.end(err.message);
	})
}

function onListening(){
	console.log("el servidor esta escuchando en el puerto: "+ port);
}


