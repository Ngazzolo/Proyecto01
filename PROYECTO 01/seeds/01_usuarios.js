exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('usuarios').del()
    .then(function () {
      // Inserts seed entries
      return knex('usuarios').insert([
        { referencia: 1 , nombre:"Nicolas", telefono: '6655334212', correo: 'Miguelito@prueba.tec.mx', ticket:1234 },
        { referencia: 2 , nombre:"Juan", telefono: '3456773456', correo: 'Miguelito@prueba.tec.mx', ticket:4312 },
        { referencia: 3 , nombre:"David", telefono: '345634564', correo: 'Miguelito@prueba.tec.mx', ticket:1234 },
        { referencia: 4 , nombre: null, telefono: null, correo: null, ticket:6987 },
        { referencia: 5 , nombre: null, telefono: null, correo: null, ticket:4312 },
        { referencia: 6 , nombre: null, telefono: null, correo: null, ticket:2222 },
      ]);
    });
};