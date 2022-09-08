// load file
const express = require("express");
const app = express()
require('dotenv').config();
const bodyParser = require('body-parser')
const multer = require('multer')()
const routes = require("./app/routes.js");

// middleware
app.use(express.static(__dirname));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(multer.any()) // for parsing multipart/form-data

// load route
routes(app)

// handle not found
app.use('/', (req, res) => {
    return res.status(404).json({
        'message': 'Endpoint not found'
    });
});

// listen on port
const port = Number((process.env.PORT) ?? 8000)
app.listen(
    port,
    () => console.log(`Server Running at http://localhost:${port}`)
);