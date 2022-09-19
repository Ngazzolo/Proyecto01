// Obtiene la conexión con la base de datos
const knex = require('../database/connection');

// Obtiene todos los usuarios en la base
exports.all = () => {
  // Realiza la consulta dentro de knex
  return knex
    .select('*')
    .from('usuarios2');
}