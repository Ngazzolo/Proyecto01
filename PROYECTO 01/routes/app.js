// routes/app.js
// De express obtiene una instancia del componente Router
let router = require('express').Router();

// Importa el controlador que creamos
let PagesController = require('../controllers/PagesController');
let RegisterController = require('../controllers/Register');
let LoginModel = require('../controllers/login');

// Establece que al hacer una petición GET a la ruta "/"" se rediriga a dicha vista

router.get('/', PagesController.homepage);

router.get('/dashboard', PagesController.dashboard);

router.get('/register', RegisterController.register);

router.post('/register', RegisterController.edit);

router.get('/login', PagesController.login);

router.post('/registerf', RegisterController.update);

router.post('/ticket', LoginModel.ticket);

// Exporta las configuraciones
module.exports = router;