const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/habitacion04.controller');

router.get('/',       ctrl.index);   // lista
router.get('/create', ctrl.create);  // formulario
router.post('/',      ctrl.store);   // guarda
router.get('/:id',    ctrl.show);    // detalle

module.exports = router;