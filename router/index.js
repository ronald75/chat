const path = require ('path');
const st=require('st');        //modulo instalado que maneja archivos estaticos				
const mount = st({
	path:  path.join(__dirname,'..','public'),
	index: 'index.html'
})

function onRequest(req,res){
	mount(req,res,function(err){
		if (err){
			return res.end(err.message)
		}
		res.statusCode = 404
		res.end('Not found' + req.url)
	})
}
module.exports = onRequest;