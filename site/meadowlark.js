var greeting_sentences = [
    "hello, I am Duy",
    "Uawweee",
    "Osas",
    "Bruhhh"                
]
var express = require('express');
var app = express();
//set up handlebars view engine
var handlebars = require('express3-handlebars')
.create({ defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', (process.env.PORT || 9999));

//serve to the client without question
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    var greeting = greeting_sentences[Math.floor(Math.random()*greeting_sentences.length)];
    res.render('home',{greeting: greeting});
   });
   app.get('/about', function(req, res){
    res.render('about')
   });
   //404 
app.use(function(req, res){
    res.status(404);
    res.render('404');
});
//500
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});
app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});