const bcrypt = require('bcryptjs');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()

  // Insert users
  const salt = bcrypt.genSaltSync(10)
  await knex('users').insert([
    { name: 'name 1', email: 'user1@email.com', password: bcrypt.hashSync('password', salt) },
    { name: 'name 1', email: 'user1@email.com', password: bcrypt.hashSync('password', salt) },
    { name: 'name 1', email: 'user1@email.com', password: bcrypt.hashSync('password', salt) }
  ]);
};
