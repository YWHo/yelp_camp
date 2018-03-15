const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.listen(port, function() {
    console.log("The YelpCamp Server Has Started!")
})

app.set("view engine", "ejs")

app.get("/", function(req, res) {
    res.render("landing")
});

app.get("/campgrounds", function(req, res) {
    let campgrounds = [
        {name: "Salmon Creek", image: "https://pixabay.com/get/eb37b60e20f6093ed1584d05fb1d4e97e07ee3d21cac104497f1c17ea7e9b1b8_340.jpg"},
        {name: "Granite Hill", image: "https://pixabay.com/get/eb31b00e28f2083ed1584d05fb1d4e97e07ee3d21cac104497f1c17ea7e9b1b8_340.jpg"},
        {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/e830b50c2bf5023ed1584d05fb1d4e97e07ee3d21cac104497f1c17fa4eeb6b0_340.jpg"}
    ]

    res.render("campgrounds", {campgrounds: campgrounds});

})