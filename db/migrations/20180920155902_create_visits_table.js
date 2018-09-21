
exports.up = function(knex, Promise) {
  return knex.schema.createTable('visits', (table) => {
    table.increments(); // id serial primary key
    table.integer('datetime');
    table.bigInteger('user');
    table.integer('os');
    table.integer('device');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('visits');
};
