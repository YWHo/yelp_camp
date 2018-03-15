const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.listen(port, function() {
    console.log("The YelpCamp Server Has Started!");
})

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
})

