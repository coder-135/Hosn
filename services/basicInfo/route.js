const express = require('express');
const router = express.Router();
const controller = require('./controller/controller');


router.get('/provinces',controller.provinces);
router.get('/cities',controller.cities);

module.exports = router;