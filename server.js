var express = require('express');

var app = express();

var PORT = 3000;

var middleware = {
	requireAuthentication: function(res, req, next) {
		console.log('private route hit');
		next();
	},
	logger: function(req, res, next) {
		//var date = new Date().toString();
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};
// app.get('/', function(req, res) {
// 	res.send('Hello from Express!');
// });
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication function(req, res) {
	res.send('About us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('Server is listening on port ' + PORT);
});

