// controllers/PagesController.js

// Importa el modelo de Usuarios
let UsersModel = require('../models/Dashboard')

// Reglas para la respuesta para la petición "/"
  exports.homepage = (req, res) => {
    // Definimos la vista a responder. Nota que se usa la función "render" y no "send".
    res.render('pages/homepage');
  }

  // Reglas para la respuesta para la petición "/LogIn"
  exports.login = (req, res) => {
    // Definimos la vista a responder. Nota que se usa la función "render" y no "send".
    res.render('users/login');
  }

// Reglas para la respuesta para la petición "/dashboard"
exports.dashboard = (req, res) => {
  // Nota que la consulta a los productos utiliza "promesas"
  // conoce más en: 
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise
  UsersModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let usuarios = data;
      // Enviamos los datos a la vista
      res.render('pages/dashboard', { usuarios: usuarios });
    });
}

