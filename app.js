/**
 * Created by mac on 17/6/3.
 */
var express = require('express');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

app.set('views', './views/pages');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded());
app.use(serveStatic('bower_components'));
app.listen(port);

console.log('imooc started on port' + port);

app.get('/', function (req, res) {
    res.render('index', {
        title: 'imooc 首页',
        movies: [
            {
                title: '机械战警',
                _id: 1,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },
            {
                title: '机械战警',
                _id: 2,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },
            {
                title: '机械战警',
                _id: 3,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },
            {
                title: '机械战警',
                _id: 4,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            }
        ]
    });
});

app.get('/movie/:id', function (req, res) {
    res.render('detail', {
        title: 'imooc 详情页',
        movie: {
            doctor: '何塞·帕迪利亚',
            country: '美国',
            title: '机械战警',
            year: 2014,
            poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
            language: '英语',
            flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
            summary: '机械战警巴拉巴拉巴拉巴拉巴拉巴拉巴啦'
        }
    });
});

app.get('/admin/movie', function (req, res) {
    res.render('admin', {
        title: 'imooc 后台录入页',
        movie: {
            doctor: '',
            country: '',
            title: '',
            year: '',
            poster: '',
            language: '',
            flash: '',
            summary: ''
        }
    });
});

app.get('/admin/list', function (req, res) {
    res.render('list', {
        title: 'imooc 后台列表页',
        movies: [{
            doctor: '何塞·帕迪利亚',
            _id: 1,
            country: '美国',
            title: '机械战警',
            year: 2014,
            poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
            language: '英语',
            flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
            summary: '机械战警巴拉巴拉巴拉巴拉巴拉巴拉巴啦'
        }]
    });
});


