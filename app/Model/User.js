const { Model } = require('objection');
const db = require('../../config/db');

Model.knex(db);

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