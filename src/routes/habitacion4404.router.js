// src/routes/habitacion4404.router.js
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/habitacion4404.controller');

router.get('/',       ctrl.index);
router.get('/create', ctrl.create);
router.post('/',      ctrl.store);
router.get('/:id',    ctrl.show);

module.exports = router;