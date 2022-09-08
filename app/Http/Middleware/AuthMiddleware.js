const UserModel = require('../../Model/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.auth = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).end()
    const authSplit = authorization.split(' ')
    const [AuthType, AuthToken] = [authSplit[0], authSplit[1]]

    if (AuthType !== 'Bearer') return res.status(401).end()

    jwt.verify(AuthToken, (process.env.KEY_APP ?? 'ThePrivateKey'), async function (err, decoded) {
        if (err) return res.status(401).end();

        // sync check db
        const { id, email } = decoded
        const user = await UserModel.query().where({ id, email }).first();
        if (!user) return res.status(401).end();

        // add to locals
        res.user = user;
    })

    next()
}