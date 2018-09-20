
exports.up = function(knex, Promise) {
  return knex.schema.createTable('visits', (table) => {
    table.increments();
    table.integer('datetime');
    table.integer('user');
    table.integer('os');
    table.integer('device');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('visits');
};
