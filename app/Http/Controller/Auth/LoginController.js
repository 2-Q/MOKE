const UserModel = require("../../../Model/User");
const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.login = async (req, res) => {
    const { email, password } = req.body

    const user = await UserModel.where({ email }).first();

    if (!user) return res.status(401).end()

    const checkPassword = await bcrypt.compare(password, user.password)

    if (!checkPassword) return res.status(401).end()

    const token = jwt.sign({
        id: user.id,
        email: user.email
    }, (process.env.KEY_APP ?? 'ThePrivateKey'), {
        expiresIn: '7d'
    })

    res.status(200).json({
        message: "hello",
        token
    })
}