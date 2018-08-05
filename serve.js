'use strict';

var express = require('express');
var runServer = express();

runServer.use(express.static(__dirname));

runServer.set('view engine', 'html');
runServer.engine('.html', require('ejs').__express);

runServer.get('*', function(req, res){
    res.render(__dirname + '/index.html');
});

var bodyParser = require('body-parser');
runServer.use(bodyParser.json());
runServer.use(bodyParser.urlencoded({
    extended: true
}));

runServer.listen(3000, function execute () {

});