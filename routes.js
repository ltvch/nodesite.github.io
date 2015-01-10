var app = require('./app');

app.get ('/', function (req, res, next){//маршрутизация запросов
		req.url = '/index.html';
		next();
	});

//общий маршрут для всех страниц сайта
app.get('/*.html', function(req, res, next){
	//hire is all request end on .html
	res.render('pages/' + req.params[0], {
		root: '',
		staticRoot: ''
	});
})
