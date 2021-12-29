const express = require('express');
const router = express.Router();
const controller = require('./controller/controller');
const generateDir = require('../../middleware/generateDir');
const upload = require('../../middleware/uploadFile.js');



// مدیریت پروفایل

router.post('/uploadAvatar',
  upload.uploadAvatar.array('files'), controller.uploadAvatar);

router.delete('/avatar',controller.deleteAvatar)

router.put('/staticAvatar', controller.updateAvatar);

router.get('/staticAvatar',controller.staticAvatars);

router.get('/download/avatar', controller.downloadAvatar);

router.post('/farmerSurvey', controller.farmerSurvey);
router.post('/expertSurvey',controller.expertSurvey);

router.get('/farmerSurvey', controller.getFarmerSurvey);
router.get('/expertSurvey', controller.getExpertSurvey);

router.put('/farmerSurvey', controller.updateFarmerSurvey);
router.put('/expertSurvey', controller.updateExpertSurvey);

module.exports = router;