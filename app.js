var express = require('express');
var app = express();
var port = 3000

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('hero')
});

app.get('/search', function(req, res) {
    res.render('search');
});
app.get('/build', function(req, res) {
    res.render('build');
});
app.get('/community', function(req,res) {
    res.render('community');
})


app.listen(port, function() {
    console.log('server started')
})