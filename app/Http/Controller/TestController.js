


const UserModel = require("../../Model/User");
const Controller = require("./Controller");

class TestController extends Controller {

    static async index(req, res) {
        const users = await UserModel
            .query()
            .orderBy('name', 'ASC');

        return res.status(200).json({
            message: 'oke',
            user: users
        })
    }

    static async upload(req, res, next) {

        res.json({
            message: 'On progress'
        })
    }
}

module.exports = TestController