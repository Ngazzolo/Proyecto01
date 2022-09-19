// controllers/register.js

// Importa el modelo de Registro
let RegisterModel = require('../models/Register')

// Reglas para la respuesta para la petición "/register"
exports.register = (req, res) => {
    // Definimos la vista a responder. Nota que se usa la función "render" y no "send".
    res.render('users/register');
}


// Reglas para la peticion de register/referencia, es decir el update par dar el "alta a nuestro usuario"
//este sirgve como un puente intermedio entre el verdaero registro, se encarga de validar que exista el usuario
exports.edit = (req, res) => {
    
    console.log(req.body)
    //Obtiene el id que viene en la url
    let referencia = req.body.referencia;  //ESTUPIDO PARAMS estaba con parm y por eso no jalaba

    RegisterModel.find(referencia).then((usuarios) => {
        //Si la referencia no existe manda error

        if(usuarios == null) {
          res.render('errors/reference4') // No existe referencia en el sistema error view
            return;
            //
        }else if (usuarios.nombre != null || usuarios.correo != null || usuarios.telefono != null) {
          res.render('errors/reference3') // Ya existe en el sistema error view
        }

        res.render('users/registerf',{usuarios}); //mando la vista con la referencia
        //rendereo una nueva vista, pasandole los datos del registro que ya encontramos que ya tenemos en usuarios.  //res.render('users/registerf');
        //mandar la referencia como input hidden
        
    });
}

exports.update = (req, res) => { //Actualización del usuario
    
    let referencia = req.body.referencia;
    // Busca dentro de la base de datos el usurio con la referencia indicada
    RegisterModel.find(referencia).then((usuarios) => {
      // Si el usuario no existe entonces
      if (usuarios == null) {
        // Regresa el error 404
        res.status(404).send('Not found');
        return;
      }
  
      // Define los datos del usuario actualizado
      let updateProduct = {
        nombre: req.body.nombre,
        correo: req.body.correo,
        telefono: req.body.telefono
      }
  
      // Actualiza al usuario y re dirige a la pantalla del ticket, mando el objeto de usuario que ya contiene el ticket, para en la vista pintarlo
      RegisterModel.update(usuarios.referencia, updateProduct)
        .then((referencia) => {
          // Al terminar manda a la vista del ticket
          res.render('users/ticket',{usuarios});
        });
    });
  }