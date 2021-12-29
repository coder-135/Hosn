const bl = require('../businessLogic/bl');
const accessManager = require('../../accessManager/accessControl');
const uuid = require("uuid");
const moment = require("moment-jalaali");

const uploadAvatar = async (req, res) => {
  try {
    await accessManager(req, res, 'avatar');
    if (!req.files) throw {
      status: 400,
      message: 'عکسی انتخاب نشده است'
    }
    let result = await bl.setAvatar(req);
    res.status(200).send(result);

  } catch (err) {
    err.status = err.status || 400;
    res.status(err.status).send({
      status: 'fail',
      message: err.message
    })
  }
}


const deleteAvatar = async (req,res)=>{
  try {
    await accessManager(req, res, 'avatar');
    const inputData = {
      userId : req.userId
    }
    let result = await bl.deleteAvatar(inputData);
    res.status(200).send(result);

  } catch (err) {
    err.status = err.status || 400;
    res.status(err.status).send({
      status: 'fail',
      message: err.message
    })
  }
}

const downloadAvatar = async (req, res) => {
  try {
    let result = bl.downloadImage(req);
    res.status(200).download(result.data);
  } catch (err) {
    err.status = err.status || 400;
    res.status(err.status).send({
      status: 'fail',
      message: err.message
    });
  }
}

const updateAvatar = async (req, res) => {
  try {
    await accessManager(req, res, 'avatar');
    if(!req.body.avatarUrl) throw {message:'عکس پروفایل فرستاده نشده است'}
    const inputData = {
      avatarUrl: req.body.avatarUrl,
      userId : req.userId
    }
    let result = await bl.updateAvatar(inputData);
    res.status(200).send(result);
  } catch (err) {
    err.status = err.status || 400;
    res.status(err.status).send({
      status: 'fail',
      message: err.message
    });
  }
}

const staticAvatars = async (req,res)=>{
  try {
    const result = await bl.staticAvatars();
    res.status(200).send(result);
  } catch (err) {
    err.status = err.status || 400;
    res.status(err.status).send({
      status: 'fail',
      message: err.message
    });
  }
}

const farmerSurvey = async (req,res) => {
  try {
    // await accessManager(req,res,'survey');

    const farmerSampleSurvey = {
      id: uuid.v4(),
      farmerCode: req.body.farmerCode,
      expertCode: req.body.expertCode,
      visitCode: req.body.visitCode ? req.body.visitCode : null,
      date: null,
      time: null,
      expertRate: null,
      description: null,
      status: false
    }
    let result = await bl.farmerSurvey(farmerSampleSurvey);
    result.data = farmerSampleSurvey;
    res.status(200).send(result);

  } catch (err) {
    const status = err.status || 400;
    res.status(status).send({
      status:'fail',
      message: err.message
    })

  }
}


const expertSurvey = async (req,res) => {
  try {
    // await accessManager(req,res,'survey');

    const expertSampleSurvey = {
      id: uuid.v4(),
      farmerCode: req.farmerCode,
      expertCode: req.expertCode,
      visitCode: req.body.visitCode ? req.body.visitCode : null,
      date:null,
      time: null,
      description: null,
      status: false
    };
    let result = await bl.expertSurvey(expertSampleSurvey);
    result.data = expertSampleSurvey;
    res.status(200).send(result);
  } catch (err){
    const status = err.status || 400;
    res.status(status).send({
      status:'fail',
      message: err.message
    })
  }
  }

const getFarmerSurvey = async (req,res) => {
  try {
    // await accessManager(req,res, 'survey');
    if(!req.query.farmerCode)
      throw {message:'شناسه کشاورز ارسال نشده است'};
   const result = await bl.getFarmerSurvey(req.query.farmerCode);

    res.status(200).send(result);

  } catch (err) {

    const status = err.status || 400;
    res.status(status).send({
      status: 'fail',
      message: err.message

    })
  }
}
const getExpertSurvey = async (req,res) => {
  try {
    // await accessManager(req,res, 'survey');

    if(!req.query.expertCode)
        throw {message:'شناسه کارشناس ارسال نشده است'};
      const result = await bl.getExpertSurvey(req.query.expertCode);

    res.status(200).send(result);

  }
  catch (err) {
    const status = err.status || 400;
    res.status(status).send({
      status: 'fail',
      message: err.message
    })
  }
}


const updateFarmerSurvey = async (req, res) => {
  try {
    if(!req.body.id)
      throw { message:'شناسه نظر سنجی ارسال نشده است' };
    const inputData = {
      id: req.body.id,
      expertRate: req.body.expertRate,
      expertCode: req.body.expertCode,
      description: req.body.description,
      date: +moment().format('jYYYYjMMjDD'),
      time: moment().format('HH:mm:ss'),
      status: true
    }
    const result = await bl.updateFarmerSurvey(inputData);
    res.status(200).send(result);

  } catch (err) {
    const status = err.status || 400;
    res.status(status).send({
      status: 'fail',
      message: err.message
    })
  }
}
const updateExpertSurvey = async (req, res) => {
  try {
    if(!req.body.id)
      throw {message:'شناسه نظر سنجی ارسال نشده است'}
    const inputData = {
      id: req.body.id,
      description: req.body.description,
      date: +moment().format('jYYYYjMMjDD'),
      time: moment().format('HH:mm:ss'),
      status: true
    }
    const result = await bl.updateExpertSurvey(inputData);
    res.status(200).send(result);

  } catch (err) {
    const status = err.status || 400;
    res.status(status).send({
      status: 'fail',
      message: err.message
    })
  }
}

module.exports = {
  uploadAvatar,
  deleteAvatar,
  downloadAvatar,
  updateAvatar,
  staticAvatars,
  farmerSurvey,
  expertSurvey,
  getFarmerSurvey,
  getExpertSurvey,
  updateFarmerSurvey,
  updateExpertSurvey
};