// Obtiene la conexión con la base de datos
const knex = require('../database/connection');

exports.find = (referencia) => { //Busco la referencia por su número
    return knex 
    .select('*')
    .from('usuarios2')
    .where ('referencia', referencia)
    .first();
}