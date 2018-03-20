const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const port = process.env.PORT || 3000
const mongoose = require("mongoose")

app.listen(port, function() {
    console.log("The YelpCamp Server Has Started!")
})

mongoose.connect("mongodb://localhost/yelp_camp")

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

app.set("view engine", "ejs")

app.get("/", function(req, res) {
    res.render("landing")
});

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
})

var Campgrounds = mongoose.model("Campgrounds", campgroundSchema)


// var campgrounds = [
//     {name: "Salmon Creek", image: "images/image-01.jpg"},
//     {name: "Granite Hill", image: "images/image-02.jpg"},
//     {name: "Mountain Goat's Rest", image: "images/image-03.jpg"},
//     {name: "Cloud Peak", image: "images/image-04.jpg"},
//     {name: "Red Rock Mountain", image: "images/image-05.jpg"},
//     {name: "Martin Hill", image: "images/image-06.jpg"},
//     {name: "Mangy Wood", image: "images/image-07.jpg"},
//     {name: "Little Canyon", image: "images/image-08.jpg"},
//     {name: "Silverthorne Rest", image: "images/image-09.jpg"}
// ]

app.get("/campgrounds", function(req, res) {
    Campgrounds.find({}, function(err, campgrounds) {
        if (err) {
            console.log(err)
            res.redirect("/")
        } else {
            res.render("index", {campgrounds: campgrounds});
        }
    })
})

app.get("/campgrounds/new", function(req, res) {
    res.render("new")
})

app.get("/campgrounds/:id", function(req, res) {
    Campgrounds.findById(req.params.id, function(err, foundItem) {
        if (err) {
            console.log(err)
            res.redirect("campgrounds")
        } else {
            res.render("show", {campground: foundItem})
        }
    })

})

app.post("/campgrounds", function(req, res) {
    let name = req.body.name
    let image = req.body.image
    let description = req.body.description
    let newCampground = {name, image, description}

    Campgrounds.create(newCampground, function(err, item) {
        if (err) {
            console.log(err)
            res.redirect("/campgrounds/new")
        } else {
            res.redirect("/campgrounds")
        }
    })

})