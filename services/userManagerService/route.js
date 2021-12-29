const express = require("express");
const router = express.Router();
const controller = require("./controller/controller");

router.put('/login', controller.login);



router.put('/signup/role/:flag', controller.roleSignup);
router.get('/searchUser' , controller.searchUser);
router.put('/changeRole' , controller.changeRole);
router.get('/users',controller.users);
router.get('/getRole' , controller.getRole);

router.get('/showSelfProfile', controller.showSelfProfile);
router.put('/updateUserProfile', controller.updateUserProfile);

module.exports = router;    