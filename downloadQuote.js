//--------- download the http request-------------------

var http = require('http');
var fs = require('fs');
var url = 'www.cricbuzz.com';

var options = {					// this is the options for the request function;
	host: url,
	method:"GET"
}


var onResponse = function(res){
	var data = '';
	res.on('data',function(chunck){
		data += chunck;
	});
	res.on('end',function(){
		console.log(data)
		fs.writeFileSync("cricbuzz.html",data); 		// writing the data into file;
	});
};

var onErr = function(err){
	console.log(err);
}

http.request(options,onResponse).on("error",onErr).end();




//-------------------------------------------------------------------------------

// var http = require('http');

// //The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
// var options = {
//   host: 'www.random.org',
//   path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
// };

// var callback = function(response) {
//   var str = '';

//   //another chunk of data has been recieved, so append it to `str`
//   response.on('data', function (chunk) {
//     str += chunk;
//   });

//   //the whole response has been recieved, so we just print it out here
//   response.on('end', function () {
//     console.log(str);
//   });
// }
// http.request(options, callback).end();

// //----------------------------------------------------------------------------------

// var http = require('http');

// //The url we want is `www.nodejitsu.com:1337/`
// var options = {
//   host: 'www.nodejitsu.com',
//   path: '/',
//   //since we are listening on a custom port, we need to specify it by hand
//   port: '1337',
//   //This is what changes the request to a POST request
//   method: 'POST'
// };

// callback = function(response) {
//   var str = ''
//   response.on('data', function (chunk) {
//     str += chunk;
//   });

//   response.on('end', function () {
//     console.log(str);
//   });
// }

// var req = http.request(options, callback);
// //This is the data we are posting, it needs to be a string or a buffer
// req.write("hello world!");
// req.end();

//--------------------------------------------------------------------------------------







// var onResponse = function(res){
// 	var body = '';
// 	console.log('statusCode',res.statusCode);
// 	console.log('headers',res.headers);
// 	res.on('data', function(d){
// 		body += d;
// 	}).on('end', function(){
// 		fs.writeFileSync('./a.jpg',body)
// 	})
// }

// var options = {
//   hostname: 'www.google.com',
//   path: 'http://manufacturing.stanford.edu/processes/Turning&LatheBasics.pdf',
//   method: 'get',
// };

// console.log(http)

// http.request(options).on('response',onResponse).on('error',function(){return "hh"}).end();

// var http = require('http');
// var requestListener = function (req, res) {
//   res.writeHead(200);
//   res.end('Hello, World!\n');
// }

// var server = http.createServer(requestListener);
// server.listen(8080);
