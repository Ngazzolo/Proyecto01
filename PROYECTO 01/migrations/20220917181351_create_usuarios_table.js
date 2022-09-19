exports.up = function(knex) {
    return knex.schema
      .createTable('usuarios', (table) => {
        table.increments('id');
        table.integer('referencia', 6).notNullable();
        table.string('nombre', 512).nullable();
        table.string('telefono', 512).nullable();
        table.string('correo', 512).nullable();
        table.integer('ticket', 6).notNullable();
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('usuarios');
  };