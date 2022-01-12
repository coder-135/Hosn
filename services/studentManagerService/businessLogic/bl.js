const model = require('../model/model');
const userModel = require('../../userManagerService/model/model')
const path = require("path");


const setAvatar = async (req) => {
  try {
    const inputData = {
      userId: req.userId,
      avatarUrl: `https://agrodayan.ir/uploads/avatars/${req.files[0].filename}`
    }

    await model.updateAvatar(inputData);

    return {
      status: 'success',
      data: inputData,
      message: 'عکس پروفایل با موفقیت آپدیت شد',
    }
  } catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
}

const deleteAvatar = async (inputData) => {
  try {
    await model.deleteAvatar(inputData);
    return {
      status: 'success',
      data: inputData,
      message: 'عکس پروفایل با موفقیت آپدیت شد',
    }
  } catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
}

const downloadImage = (req) => {
  try {
    let fileName = req.query.file;
    let filePath = path.join(process.cwd(), `uploads/avatars/${fileName}`)
    return {
      status: 200,
      data: filePath
    }
  } catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
}

const updateAvatar = async (inputData) => {
  try {
    await model.updateAvatar(inputData);
    return {
      status: 'success',
      message: 'عکس پروفایل با موفقیت بارگزاری شد'
    }
  } catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
}

const staticAvatars = async () => {
  try {
    const avatars = await model.staticAvatars();
    return {
      status: 200,
      data: avatars
    }
  } catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
}


const farmerSurvey = async (farmerSampleSurvey) => {
  try {
    await model.farmerSurvey(farmerSampleSurvey)
    return {
      status: 'Success',
      message: 'نظرسنجی برای کشاورز مورد نظر ایجاد شد'
    }

  } catch (err){
  throw {
    status: 400,
    message: err.message
  }
  }
}


const expertSurvey = async (expertSampleSurvey) => {
  try {
    await model.expertSurvey(expertSampleSurvey);
    return {
      status: 'Success',
      message: 'نظرسنجی برای کارشناس مورد نظر ایجاد شد'
    }
  } catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
}
const getFarmerSurvey = async (farmerCode) => {
  try {
    const query = {
      status: false,
      farmerCode
    }
    const result= await model.getFarmerSurvey(query);
    return {
      status: 'success',
      data: result
    }
  } catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
}
const getExpertSurvey = async (expertCode) => {
  try {
    const query = {
      status: false,
      expertCode
    }
    const result = await model.getExpertSurvey(query);
    return {
      status:'success',
      data:result
    }

  } catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
}


const updateFarmerSurvey = async (surveyData) => {
  try {

    const expertDetails = await userModel.findUser({expertCode:surveyData.expertCode});

    const expertDataRate = {
      expertCode: surveyData.expertCode,
      totalRates : expertDetails.totalRates + surveyData.expertRate,
      raterCount : expertDetails.raterCount+1,
      rate : (expertDetails.totalRates + surveyData.expertRate) / ( expertDetails.raterCount+1)
    }
     await model.updateFarmerSurvey(surveyData, expertDataRate);
    return {
      status:'success',
      message: 'نظر شما با موفقیت ثبت شد',
    }
  } catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
}
const updateExpertSurvey = async (surveyData) => {
  try {
     await model.updateExpertSurvey(surveyData);
    return {
      status:'success',
      message: 'نظر شما با موفقیت ثبت شد',
    }
  } catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
}




module.exports = {
  setAvatar,
  deleteAvatar,
  downloadImage,
  updateAvatar,
  staticAvatars,
  farmerSurvey,
  expertSurvey,
  getFarmerSurvey,
  getExpertSurvey,
  updateFarmerSurvey,
  updateExpertSurvey
};