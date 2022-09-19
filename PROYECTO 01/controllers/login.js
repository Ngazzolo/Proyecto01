// controllers/login.js

// Importa el modelo de Registro
let LoginModel = require('../models/login')

exports.ticket = (req, res) => {
    
    //Obtiene la referencia
    let referencia = req.body.referencia;  //ESTUPIDO PARAMS estaba con parm y por eso no jalaba

    LoginModel.find(referencia).then((usuarios) => {
        //Si la referencia no existe manda error

        if(usuarios == null) {
            res.render('errors/reference1')
            //
        }else if (usuarios.nombre == null && usuarios.correo == null && usuarios.telefono == null) { //Checo un registro nulo
            res.render('errors/reference2')
        }else if (usuarios.nombre == "" && usuarios.correo == "" && usuarios.telefono == "") { //Checo un registro vacio
            res.render('errors/reference2')
        }

        //Si existe por el momento mando otro error
        //res.status(404).send('Si existe');
        res.render('users/ticket',{usuarios}); //mando la vista con la referencia
        //rendereo una nueva vista, pasandole los datos del registro que ya encontramos que ya tenemos en usuarios.  //res.render('users/registerf');
        //mandar la referencia como input hidden
       
        
    });
}