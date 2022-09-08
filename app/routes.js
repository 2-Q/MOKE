const LoginController = require("./Http/Controller/Auth/LoginController");
const TestController = require("./Http/Controller/TestController");
const { auth } = require("./Http/Middleware/AuthMiddleware")



module.exports = (app) => {
    // app.get('/', (req, res) => {
    //     return res.send('oke')
    // })
    app.get('/', TestController.index)
    app.post('/', TestController.upload)
    app.post('/login', LoginController.login)
    app.get('/authed', auth, TestController.index)
}