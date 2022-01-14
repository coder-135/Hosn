const express = require('express');
const router = express.Router();
const controller = require('./controller/controller');

router.post('/student', controller.addStudent);

router.put('/student', controller.updateStudent);

router.delete('/student', controller.deleteStudent);

router.get('/student', controller.getStudent);

router.get('/students', controller.getStudents);


module.exports = router;