const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.get("/", function(req, res) {
    res.send("this will be the landing page soon!")
})

app.listen(port, function() {
    console.log("The YelpCamp Server Has Started!")
})

