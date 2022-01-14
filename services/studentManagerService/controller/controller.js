const bl = require('../businessLogic/bl');
const accessManager = require('../../accessManager/accessControl');
const uuid = require("uuid");
const moment = require("moment-jalaali");


const addStudent = async (req, res) => {
  try {

    const inputData = {
      name: req.body.name,
      family: req.body.family,
      userId: uuid.v4(),
      fatherName: req.body.fatherName,
      primaryPhoneNumber: req.body.primaryPhoneNumber,
      secondaryPhoneNumber: req.body.secondaryPhoneNumber,
      address: req.body.address,
      educationalDegree: req.body.educationalDegree,
      favoriteField: req.body.favoriteField,
      individualSkills: req.body.individualSkills,
      insertDate: moment().format('jYYYYjMMjDD'),
      insertTime: moment().format('HH:mm:ss'),
      updateDate: null
    }
    let result = await new bl().addStudent(inputData);


    res.status(200).send(result);

  } catch (err) {
    err.status = err.status || 400;
    res.status(err.status).send({
      status: 'fail',
      data: err.data
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
    const inputData = {
      userId: req.query.userId
    }
    const result = await new bl().getStudent(inputData)
    res.status(200).send(result);

  } catch (err) {
    const status = err.status || 400;
    res.status(status).send({
      status: 'fail',
      data: err.data
    })
  }
}

const updateStudent = async (req, res) => {
  try {
    if (!req.body.userId) {
      {
        throw {
          data: {
            message: 'شناسه کاربر ارسال نشده است'
          }
        }
      }
    }
    const inputData = req.body;
    inputData.updateData = moment().format('jYYYYjMMjDD')
    const result = await new bl().updateStudent(inputData)
    res.status(200).send(result);

  } catch (err) {
    err.status = err.status || 400;
    res.status(err.status).send({
      status: 'fail',
      data: err.data
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
    const inputData = {
      userId: req.query.userId
    }
    const result = await new bl().deleteStudent(inputData);
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
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : 5;
    const inputData = {
      page,
      limit
    }
    const result = await new bl().getStudents(inputData);
    res.status(200).send(result);

  } catch (err) {
    const status = err.status || 400;
    res.status(status).send({
      status: "fail",
      data: {message: err.message}
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