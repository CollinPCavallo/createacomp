# createacomp
Passion Project, allows users to build the custom pc of their dreams


//ROUTES NEEDED
GET /SEARCH //VIEW THE SEARCH PAGE
GET /SEARCH/:CATEGORY/:SUBCATEGORY?QUERY=SOMETHING& //SEARCH FOR SOMETHING IN THE DB FIRST THEN THE API
app.get('/SEARCH/:CATAGORY/:SUBCATAGORY', FUNCTION(REQ, RES) {
    var params = req.params.category && req.params.subcategory
    var query = req.params.query
    var postData = req.body.prop
})

//BUILD ROUTES
GET /BUILDS // SHOW ALL BUILDS
GET /BUILD/CREATE // VIEW THE FORM TO CREATE BUILD
POST /BUILD/CREATE // POST A NEW BUILD
GET /BUILD/:ID //VIEW BUILD
GET /BUILD/EDIT/:ID //VIEW THE FORM TO EDIT
POST /BUILD/EDIT/:ID // POST THE FORM TO DATABASE
PUT /BUILD/EDIT/:ID // UPDATE THE DATABASE
DELETE /BUILD/EDIT/:ID // REMOVE THE BUILD
db.builds.find({mobo: 'asus'})
comp = {
    name: COLLIN COMP
    author,
    desc,
    parts : [
        {mobo : id jhfidskijfaskdf findbyid}
        
    ]
    

}
part : {
    {
        type: mobo
        spec: {
            chipset,
            usbports,
            size,
        }
        id,
        name,
        
    },
    {
        type cpu,
        spec:{

        }
        id,
        name
    }
    
}