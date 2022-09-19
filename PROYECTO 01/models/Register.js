// Obtiene la conexión con la base de datos
const knex = require('../database/connection');

exports.factory = (referencia, nombre, telefono, correo) => {
    return {
      referencia: referencia,
      nombre: nombre,
      telefono: telefono,
      correo: correo
    }
}
  
exports.find = (referencia) => { //Busco la referencia por su número
    return knex 
    .select('*')
    .from('usuarios2')
    .where ('referencia', referencia)
    .first();
   
}
exports.update = (referencia, usuarios) => { //Actualizo el registro en base a la referencia
    return knex('usuarios2')
    .update(usuarios)
    .where('referencia',referencia);
}