# Proyecto01

<h2> Para iniciar el proyecto </h2>

 Crear una nueva carpeta en la cúal se va a alojar este proyecto.
 Utiziar el siguiente comando para instalaar las dependencias:
```
npm init -y
```
El contenido de el package.json debe de verse de la siguiente manera
```
{
  "name": "proyecto-01",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^16.0.2",
    "express": "^4.18.1",
    "express-handlebars": "^6.0.6",
    "knex": "^2.2.0",
    "method-override": "^3.0.0",
    "mysql2": "^2.3.3"
  }
}
```

<h2> Configurar la base de datos </h2>

Para que el proyecto funcione correctamente, se debe contar con una base de datos ya creada, en la máquina a probar

Para ello se le pide al usuario que cambie en el archivo .env la configuración correspondiente a su servidor de BD, debe de verse algo de la siguiente manera,
debe cambiar el puerto a el que le corresponda y indicar si su root user usa una contraseña o no

```
# Define el puerto en dónde se va a ejecutar Express.js
EXPRESS_PORT=3000

# ... Otras variables de ambiente ...
DB_DEVELOPMENT_HOST=127.0.0.1
DB_DEVELOPMENT_PORT=3306
DB_DEVELOPMENT_NAME=rifayakult
DB_DEVELOPMENT_USER=root
DB_DEVELOPMENT_PASSWORD=
```

<h3> Creación de tabla y población de datos</h3>

Para el proyecto se dejara en la carpeta <b>migrations</b> un .js que le creara una tabla en la BD que el usuario configure de antemano en su archivo de .env
Dicho archivo en mi caso se ve de la siguiente manera:

```
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
  ```
  
  En el se indica el nombre de la tabla a crear, con sus respectivas columnas y tipos de datos, cabe mencionar que para 3 de estos datos, deben de aceptar nulos,
  debido a unas consideraciones dadas en el proyecto
  
   Para crar las tabla se usa el comando
  ```
   knex migrate:latest
   ```
  
  Y por último en el folder de <b>seeds</b> se encuentra otro archivo js que le permitira poblar los datos a la tabla ya creada
  
   ```
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
 ```
 Para migrar los datos se usa el comando
  ```
   knex seed:run
   ```
   
   <h2> Demostración de proyecto por medio de video</h2>
   
   En la siguiente liga se muestra el proyecto en funcionamiento
   https://youtu.be/bZpHfxUeNM4
