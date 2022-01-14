const Model = require('../model/model');
const userModel = require('../../userManagerService/model/model')
const path = require("path");

class Bl {
  constructor() {
  }

  async addStudent(inputData) {
    await new Model().addsStudent(inputData);
    return {
      status: 'success',
      data: {
        message: "دانش آموز با موفقیت اضافه شد",
        result: inputData
      }
    }
  }

  async getStudent(inputData) {
    inputData = await new Model().getStudent(inputData);
    return {
      status: 'success',
      data: {
        message: 'دریافت اطلاعات دانش آموز با موفقیت انجام شد',
        result: inputData
      }
    }
  }

  async updateStudent(inputData) {
    inputData = await new Model().updateStudent(inputData);
    return {
      status: 'success',
      data: {
        message: 'اطلاعات دانش آموز با موفقیت ویرایش شد',
        result: inputData
      }
    }
  }

  async deleteStudent(inputData) {
    await new Model().deleteStudent(inputData);
    return {
      status: 'success',
      data: {
        message: 'دانش آموز با موفقیت حذف شد'
      }
    }
  }

  async getStudents(inputData){
    inputData = await new Model().getStudents(inputData);

    return {
      status: 'success',
      data: {
        message: 'دریافت دانش آموز ها با موفقیت انجام شد',
        result: inputData
      }
    }
  }

}


module.exports = Bl;