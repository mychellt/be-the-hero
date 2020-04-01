
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table){
    table.increments();

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();https://www.youtube.com/watch?v=U3dq0rSnx08https://www.youtube.com/watch?v=U3dq0rSnx08

    table.string('ong_id').notNullable();   

    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
    return knex.dropTable('incidents');
};
