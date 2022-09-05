const { Model } = require('objection');
const knex = require('../../db_connections/PresenceDB');

Model.knex(knex);

class UserModel extends Model {
    static get tableName() {
        return 'users';
    }
}

module.exports = UserModel;