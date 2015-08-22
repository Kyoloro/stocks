var http =require('http');
var url = 'http://www.mi.com/index.html';
http.get(url,function(res){
 		res.on('data',function(chunk){
 			console.log(chunk.toString());
 		})
	});
