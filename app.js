//здесь располагаем основную конфигурацию приложения и
//middleware - функции выполняющиеся на каждый запрос
var express = require('express'),
 morgan = require('morgan'),
 stylus = require('stylus');
var app = module.exports = exports = express();//создание и конфигурация приложения

//Configuration
app.set('port', process.env.PORT || 8123);//если не дефолтный порт то 8123
app.set('views', './views');
app.set('view engine', 'jade');

//middleware

//app.use(express.logger('dev'));//express 3.0 only
app.use(morgan('dev'));
//app.use(app.router);
app.use(stylus.middleware({
	src:'./public',
	compress: true
}));
app.use(express.static(__dirname + '/public'));

//app.use('/static', express.static('/public'));