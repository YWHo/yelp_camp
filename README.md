# yelp_camp
A fictional web development project about campsites

## To run the local server
1. open two terminals, and cd to the same yelp_camp directory
1. In any of the terminal, run: npm install
2. Then run: npm run mongo-mac
(if using window, run mongo-win; read more at https://www.jokecamp.com/blog/running-local-mongodb-with-npm-scripts/)
3. In another terminal, run: npm run start (or npm run dev)

## Technology used
* body-parser - parse incoming request bodies in a middleware
* express - a minimal and flexible Node.js web application framework
* ejs - simple templating language to generate HTML markup with plain JavaScript
* npm - package manager for the JavaScript programming language
* MongoDB - a popular NoSQL (non-relational) database
* mongoose - an object modeling middleware to interface with MongoDB server. It is designed to work in an asynchronous environment


## RESTful routes
name    url             verb  desc.
INDEX   /campsites      GET   Display a list of all campsites
NEW     /campsites/new  GET   Displays form to submit a new campsite
CREATE  /campsites      POST  Add new campsite to DB


## When the server is running, add new campsite in '/campgrounds/new' (if '/campgrounds' show nothing)
* name: "Salmon Creek", image: "images/image-01.jpg"
* name: "Granite Hill", image: "images/image-02.jpg"
* name: "Mountain Goat's Rest", image: "images/image-03.jpg",
* name: "Cloud Peak", image: "images/image-04.jpg",
* name: "Red Rock Mountain", image: "images/image-05.jpg",
* name: "Martin Hill", image: "images/image-06.jpg",
* name: "Mangy Wood", image: "images/image-07.jpg",
* name: "Little Canyon", image: "images/image-08.jpg",
* name: "Silverthorne Rest", image: "images/image-09.jpg"

