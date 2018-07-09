var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var app = express();
var port = 3000
mongoose.connect('mongodb://localhost/create_a_comp')

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

var compSchema = new mongoose.Schema({
    name: String,
    author: String,
    created: {type: Date, default: Date.now}
})
var Comp = mongoose.model('Comp', compSchema);

// Comp.create({
//     name: 'Test Pc',
//     Author: 'Collin'
// })

app.get('/', function(req, res) {
    res.redirect('/builds')
});
//INDEX ROUTE
app.get('/builds', function(req,res) {
 var comps = Comp.find({}, function(err, comps) {
     if(err){
         console.log(err)
     } else {
         res.render('index', {builds: comps})
     }
 });
});

//NEW ROUTE
app.get('/build', function(req, res){
    res.render('build');
});
//CREATE ROUTE
app.post('/builds', function(req, res) {
    Comp.create(req.body.comp ,function(err, newComp) {
        if (err) {
            res.render('build')
        } else {
            res.redirect('/builds');
        };
    });
});

//SHOW ROUTE
app.get('/build/:id', function(req, res) {
    Comp.findById(req.params.id, function(err, foundBuild) {
        if(err) {
            console.log(err)
        } else {
            res.render('show', {build: foundBuild})
        }
    })
});



app.get('/search', function(req, res) {
    res.render('search');
});

app.get('/community', function(req,res) {
    res.render('community');
})


app.listen(port, function() {
    console.log('server started')
})