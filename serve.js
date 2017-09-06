const express 	= require('express');
const app 		= express();

app.set('port', (process.env.PORT || 3002));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

app.use('/', express.static('public'));

var api = require("./api");

app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin',"*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers','Content-Type');
  next();
})

app.get('/api/config', function (req, res) {
    var config= api.loadConfig();
    //console.log('config' + config.token);
    res.status(200).json(config);
    });

app.get('/api/questions', function (req,res){
    var questions = api.questions();
    res.status(200).json(questions);
});

