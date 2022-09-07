// load file
const express = require("express");
const routes = require("./app/routes.js");
require('dotenv').config();

// init app
const app = express();

/*
app.use((req, res, next) => {
    res.user = 'dwiki'
    next()
})
*/

// load route
routes(app)

// listen on port
const port = Number((process.env.PORT) ?? 8000)
app.listen(
    port,
    () => console.log(`Server Running at http://localhost:${port}`)
);