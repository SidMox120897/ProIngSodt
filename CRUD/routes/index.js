const express = require('express');
const router = express.Router();
const user = require('./user');
const alumno = require('./alumno');
const docente = require('./docente');
const equipo = require('./equipo');
const grupo = require('./grupo');



router.use('/user', user);
router.use('/alumno', alumno);
router.use('/docente', docente);
router.use('/equipo', equipo);
router.use('/grupo', grupo);

module.exports = router;