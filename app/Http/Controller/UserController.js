const UserModel = require("../../Model/User");

exports.index = async (req, res) => {
    const users = await UserModel
        .query()
        .orderBy('name', 'ASC');

    res.json(users)
}