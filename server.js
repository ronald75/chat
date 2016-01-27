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
	fs.readFile(filename,function(err,file){  
		if (err){
			return res.end(err.message);
		}
		res.end(file);	
});  
	
}

function onListening(){
	console.log("el servidor esta escuchando en el puerto: "+ port);
}


