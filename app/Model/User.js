const { Model } = require('objection');
const { dbConnection } = require('../../config/db');

Model.knex(dbConnection);

class UserModel extends Model {
    static get tableName() {
        return 'users';
    }

    static get relationMappings() {
        return {
            // phone: {
            //     relation: Model.HasManyRelation,
            //     modelClass: PhoneModel,
            //     join: {
            //         from: 'users.id',
            //         to: 'phone.user_id'
            //     }
            // }
        };
    }
}

module.exports = UserModel;