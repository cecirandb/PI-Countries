const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routerCountry = require('./country.js');
const routerActivity = require('./activity.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', routerCountry);
router.use('/activity', routerActivity);

module.exports = router;
