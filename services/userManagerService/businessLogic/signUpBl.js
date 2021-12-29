const model = require("../model/model");
const generate = require('./../../../utils/generateToken');
const uuid = require("uuid");
const moment = require("moment-jalaali");


const login = async (inputData)=>{
  try {
    const userData = await model.findUser({username: inputData.username});
    if(!userData) {
      throw {
        message:'کاربر مورد نظر یافت نشد',
        status:404
      }
    }
    if(userData.password === inputData.password) {
      const accessToken = generate.access(userData.phoneNumber);
      const refreshToken = generate.refresh(userData.phoneNumber);

      return {
        status:'success',
        data: {
          message: 'به سامانه حُـسن خوش آمدید',
          result:{
            accessToken,
            refreshToken,
            userData
          }
        }
      }
    } else {
      throw {
        message:'گذرواژه اشتباه است',
        status:400
      }
    }
  }

  catch(err) {
    let statusCode = err.status || 400;
    throw {
      status: statusCode,
      data: {
        message: err.message,
      }
    }
  }
}





module.exports = {
  login,
}

