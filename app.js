const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const port = process.env.PORT || 3000
const MongoClient = require("mongodb").MongoClient

MongoClient.connect('mongodb://127.0.0.1:27017', function(err, db) {

    if (err) {
        console.log('Error: Local MongoDB server is not available!!!')
        throw err
    } else {
        console.log("DB is Connected")
        app.listen(port, function() {
            console.log("The YelpCamp Server Has Started!")
        })
    }

    db.close();

})



app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

app.set("view engine", "ejs")

app.get("/", function(req, res) {
    res.render("landing")
});

var campgrounds = [
    {name: "Salmon Creek", image: "images/image-01.jpg"},
    {name: "Granite Hill", image: "images/image-02.jpg"},
    {name: "Mountain Goat's Rest", image: "images/image-03.jpg"},
    {name: "Cloud Peak", image: "images/image-04.jpg"},
    {name: "Red Rock Mountain", image: "images/image-05.jpg"},
    {name: "Martin Hill", image: "images/image-06.jpg"},
    {name: "Mangy Wood", image: "images/image-07.jpg"},
    {name: "Little Canyon", image: "images/image-08.jpg"},
    {name: "Silverthorne Rest", image: "images/image-09.jpg"}
]

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
})

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs")
})

app.post("/campgrounds", function(req, res) {
    let name = req.body.name
    let image = req.body.image
    let newCampground = {name, image}
    campgrounds.push(newCampground)
    res.redirect("/campgrounds")

})