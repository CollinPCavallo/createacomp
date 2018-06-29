var express = require('express');
var app = express();
var port = 3000

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('hero')
})


app.listen(port, function() {
    console.log('server started')
})