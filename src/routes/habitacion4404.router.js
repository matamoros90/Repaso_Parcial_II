const express = require('express');
const router = express.Router();
const Ctrl = require('../controllers/habitacion4404.controller');

router.get('/',        (req, res) => res.redirect('/carros4404')); // home
router.get('/carros4404',       Ctrl.index4404);
router.get('/carros4404/create',Ctrl.create4404);
router.post('/carros4404',      Ctrl.store4404);
router.get('/carros4404/:id',   Ctrl.show4404);

module.exports = router;