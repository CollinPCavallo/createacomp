var express = require('express'),
    mongoose = require('mongoose'),
    mysql = require('mysql');
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var app = express();
var port = 3000
// mongoose.connect('mongodb://localhost/create_a_comp')
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user:'root',
    password:'root',
    database: 'create_a_comp'
    })
connection.connect(function(err) {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`)
})

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));


app.get('/', function(req, res) {
    res.redirect('/builds')
});
//INDEX ROUTE
app.get('/builds', function(req,res) {

     connection.query('select * from build', function (err, results) {
        if (err) throw err
        console.log(results)
        res.render('index', {builds: results})
     })
});

//NEW ROUTE
app.get('/build', function(req, res){
    res.render('build');
});
//CREATE ROUTE
app.post('/builds', function(req, res) {

    connection.query(
        `insert into build set ?`,
        {
            name: req.body.comp.name,
            author: req.body.comp.author
        }
        , function(err, results) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/builds');
        }
    });
});

//SHOW ROUTE
app.get('/build/:id', function(req, res) {

    connection.query(
        'select * from build where ?', {
            id: req.params.id
        },function(err, result) {
            if (err) {
                console.log(err)
            } else {
                res.render('show', {build: result[0]})
            }
        })
});
//EDIT ROUTE
app.get('/build/:id/edit' ,function (req, res) {
    connection.query(
        'select * from build where ?', {
            id :req.params.id
        }, function(err, foundBuild) {
            if (err) {
                console.log(err)
            } else {
                res.render('edit', {build : foundBuild[0]})
            };
        }
    );
});
//UPDATE ROUTE
app.put('/build/:id', function (req,res) {
    

    connection.query(
        `update build set ? where id = ${req.params.id}`, {
            name: req.body.comp.name,
            author: req.body.comp.author,
            
        }, function (err, updatedBuild) {
            if (err) {
                console.log(err)
            } else {
                res.redirect(`/build/${req.params.id}`);
            }
        }
    )
})


app.get('/search', function(req, res) {
    res.render('search');
});

app.get('/community', function(req,res) {
    res.render('community');
})


app.listen(port, function() {
    console.log('server started')
})