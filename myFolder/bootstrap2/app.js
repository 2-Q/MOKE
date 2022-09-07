//load file
import express from "express"
import routes from "../app/routes.js"
import localVariables from "./localVariables.js";

// init express
const app = express();

// load helper
app.locals = { ...app.locals, ...localVariables }

// load route
app.use('/', routes);

// listen on port
app.listen(
    app.locals.port,
    () => console.log(`Server Running at http://localhost:${app.locals.port}`)
);