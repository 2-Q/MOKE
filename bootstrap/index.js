//import express
import express from "express";
import routes from "../app/routes.js";

// init express
const app = express();

// basic route
app.use('/', routes);

// listen on port
app.listen(3000, () => console.log('Server Running at http://localhost:3000'));