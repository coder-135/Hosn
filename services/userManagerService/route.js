const express = require("express");
const router = express.Router();
const controller = require("./controller/controller");

router.put('/login', controller.login);
router.get('/logout', controller.logout);
router.post('/test',controller.test)

module.exports = router;    