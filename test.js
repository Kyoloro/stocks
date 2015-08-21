// var a = ['1','2'];

// console.log(a.length);
var url =require('url');
var http = require('http');
var request
var express = require('express');
var app = express();
// var url = 'http://web.juhe.cn:8080/finance/stock/hs?key=26d906ed9424c9151054f6698ddb7efe&dtype=json&gid=sz300059';
var url ='http://hq.sinajs.cn/list=sz300059';
 var getData= function(url){
 	http.get(url,function(res){
 		res.on('data',function(chunk){
 			console.log(chunk.toString());
 		})
	});
	setTimeout(function(){
		getData(url);
	},10);
 }
 getData(url);
 

