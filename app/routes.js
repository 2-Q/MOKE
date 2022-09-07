const { login } = require("./Http/Controller/Auth/LoginController")
const { index } = require("./Http/Controller/UserController")
const { auth } = require("./Http/Middleware/Auth")


module.exports = (app) => {
    app.get('/', index)
    app.post('/login', login)
    app.get('/authed', auth, index)
}