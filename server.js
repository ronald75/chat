'use strict'

const http = require('http');
const fs = require('fs');
const path = require('path');
const router = require(path.join(__dirname,'router','index.js'));  //modulo creado
const port = process.env.PORT || 8080;


const server=http.createServer();

server.on('request',router);
server.on('listening',onListening);
server.listen(port);

function onListening(){
	console.log('el servidor esta escuchando en el puerto: '+port);
}


