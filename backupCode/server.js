
import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()

function env(key) {
    return process.env[key]
}

class App {
    express;

    constructor() {
        this.express = express()
        this.#loadConfig()
    }

    #loadConfig() {
        this.express.get('/', (req, res) => {
            res.send('Hello World');
        });
    }
}


(new App).express.listen(env('PORT'), () => console.log(`Server Running at http://localhost:${env('PORT')}`));