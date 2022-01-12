const bl = require('../businessLogic/bl');
const accessManager = require('../../accessManager/accessControl');
const uuid = require("uuid");
const moment = require("moment-jalaali");


const addStudent = async (req, res) => {
  try {

    // const inputData = {
    //   userId : req.userId
    // }
    // let result = await bl.deleteAvatar(inputData);
    const result = {
      status: 'success',
      result: {
        message: 'دانش آموز با موفقیت در سیستم اضافه شد',
        data: req.body
      }
    }

    res.status(200).send(result);

  } catch (err) {
    err.status = err.status || 400;
    res.status(err.status).send({
      status: 'fail',
      message: err.message
    })
  }
}
const getStudent = async (req, res) => {
  try {

    if (!req.query.userId) {
      throw {
        status: 400,
        data: {
          message: 'پارامتر های ورودی بررسی شود'
        }
      }
    }
    // const inputData = {
    //   userId : req.userId
    // }
    // let result = await bl.deleteAvatar(inputData);
    const data = {
      name: 'حسنا',
      family: 'زارع',
      userId: 'asda-asdase-fdvc-zxcsd-asdas',
      fatherName: 'علی',
      primaryPhoneNumber: '09353133959',
      secondaryPhoneNumber: '09151002030',
      address: 'گلشهر، شفیغی 27 ، پلاک 8',
      educationalDegree: 'دکترا',
      favoriteField: 'برنامه نویسی',
      individualSkills: 'برنامه نویسی ، انگلیسی ، طراحی ، کورل',
    }
    const result = {
      status: 'success',
      result: {
        message: 'دریافت اطلاعات دانش آموز با موفقیت انجام شد',
        data
      }
    }
    res.status(200).send(result);

  } catch (err) {
    const status = err.status || 400;
    res.status(status).send({
      status: 'fail',
      message: err.data
    })
  }
}

const updateStudent = async (req, res) => {
  try {

    // const inputData = {
    //   userId : req.userId
    // }
    // let result = await bl.deleteAvatar(inputData);
    const result = {
      status: 'success',
      result: {
        message: 'اطلاعات دانش آموز با موفقیت ویرایش شد',
        data: req.body
      }
    }
    res.status(200).send(result);

  } catch (err) {
    err.status = err.status || 400;
    res.status(err.status).send({
      status: 'fail',
      message: err.message
    })
  }
}
const deleteStudent = async (req, res) => {
  try {
    if (!req.query.userId) {
      throw {
        status: 400,
        data: {
          message: 'پارامتر های ورودی بررسی شود'
        }
      }
    }
    // const inputData = {
    //   userId : req.userId
    // }
    // let result = await bl.deleteAvatar(inputData);
    const result = {
      status: 'success',
      result: {
        message: 'دانش آموز با موفقیت از سیستم شد شد'
      }
    }

    res.status(200).send(result);

  } catch (err) {
    err.status = err.status || 400;
    res.status(err.status).send({
      status: 'fail',
      message: err.data
    })
  }
}


const getStudents = async (req, res) => {
  try {
    // const inputData = {
    //   userId : req.userId
    // }
    // let result = await bl.deleteAvatar(inputData);
    const data = [
      {
        name: 'حسنا',
        family: 'زارع',
        fatherName: 'علی',
        userId: 'asda-asdase-fdvc-zxcsd-asdas',
        primaryPhoneNumber: '09353133959',
        secondaryPhoneNumber: '09151002030',
        address: 'گلشهر، شفیغی 27 ، پلاک 8',
        educationalDegree: 'دکترا',
        favoriteField: 'برنامه نویسی',
        individualSkills: 'برنامه نویسی ، انگلیسی ، طراحی ، کورل',
      },
      {
        name: 'حسن',
        family: 'زارع',
        fatherName: 'علی',
        userId: 'asda-asdase-fdvc-zxcsd-asdas',
        primaryPhoneNumber: '09353133959',
        secondaryPhoneNumber: '09151002030',
        address: 'گلشهر، شفیغی 27 ، پلاک 8',
        educationalDegree: 'دکترا',
        favoriteField: 'برنامه نویسی',
        individualSkills: 'برنامه نویسی ، انگلیسی ، طراحی ، کورل',
      },
      {
        name: 'یاسین',
        family: 'زارع',
        fatherName: 'علی',
        userId: 'asda-asdase-fdvc-zxcsd-asdas',
        primaryPhoneNumber: '09353133959',
        secondaryPhoneNumber: '09151002030',
        address: 'گلشهر، شفیغی 27 ، پلاک 8',
        educationalDegree: 'دکترا',
        favoriteField: 'برنامه نویسی',
        individualSkills: 'برنامه نویسی ، انگلیسی ، طراحی ، کورل',
      },
      {
        name: 'حسین',
        family: 'زارع',
        fatherName: 'علی',
        userId: 'asda-asdase-fdvc-zxcsd-asdas',
        primaryPhoneNumber: '09353133959',
        secondaryPhoneNumber: '09151002030',
        address: 'گلشهر، شفیغی 27 ، پلاک 8',
        educationalDegree: 'دکترا',
        favoriteField: 'برنامه نویسی',
        individualSkills: 'برنامه نویسی ، انگلیسی ، طراحی ، کورل',
      },
      {
        name: 'محسن',
        family: 'زارع',
        fatherName: 'علی',
        userId: 'asda-asdase-fdvc-zxcsd-asdas',
        primaryPhoneNumber: '09353133959',
        secondaryPhoneNumber: '09151002030',
        address: 'گلشهر، شفیغی 27 ، پلاک 8',
        educationalDegree: 'دکترا',
        favoriteField: 'برنامه نویسی',
        individualSkills: 'برنامه نویسی ، انگلیسی ، طراحی ، کورل',
      }
    ]
    const result = {
      status: 'success',
      result: {
        message: 'دریافت دانش آموز ها با موفقیت انجام شد',
        data
      }
    }

    res.status(200).send(result);

  } catch (err) {
    const status = err.status || 400;
    res.status(status).send({
      status: "fail",
      data: err.data
    });
  }
}


module.exports = {

  addStudent,
  getStudent,
  getStudents,
  updateStudent,
  deleteStudent
};