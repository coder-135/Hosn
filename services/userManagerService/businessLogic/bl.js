const model = require('./../model/model');
const smsSender = require('./../../../utils/smsSending');
const User = require('./../../../utils/userDataSchema');
const utils = require('./signUpBl');
const moment = require('moment');
const visitModel = require('./../../visitManagerService/model/model');
const quesModel = require('./../../questionairManagerService/model/model');

async function  roleSignup(req) {
  try {

    let flag = req.params.flag;
    let userDB = await model.findUser({uid: req.userId});
    let role_ = userDB.role;

    let requestedRole = flag === 'f' ? 'farmer' : 'expert';

if (role_.includes(requestedRole)){
    throw {
        status:400,
        message:' کاربر گرامی شما قبلا با این نقش در سامانه ثبت نام شده اید'
    }
};

    let userClass = new User(flag);
    let reqData = req.body;
    let userData = userClass.userSchema(reqData);

    flag === 'f' ? role_.push('farmer') : role_.push('expert');
    userData.role = role_;

    if (requestedRole === 'farmer'){
       await visitModel.updateRequests(
         {phoneNumber : userData.phoneNumber} , {isFarmer : true , farmerCode : userData.farmerCode});
      
      const questionaire =
       await quesModel.getAnsweredQuestions({pid : 1 , product : 1} , {userId : req.userId});
      if (questionaire.length !== 0){
        questionaire.forEach(el => userData.questionaires.push(el.pid));}
      }
    userData.totalRates = 0;
    userData.raterCount = 0;
    userData.rate = 0;

    await model.updateUser(userData);
         
    let smsToken = await new smsSender().getSmsToken();
    const code = flag === 'f' ? userData.farmerCode : userData.expertCode;
    await new smsSender().sendSms(smsToken, req.body.phoneNumber, {idCode:code});
    const result = await model.findUser({phoneNumber:userData.phoneNumber});
    let expert = 'کارشناس';
    let role = flag === "f" ? "کشاورز" : expert;
    return {
      status: 200,
      data: {
        user : result,
        code ,
        status: "sucess",
        message: `شما با موفقیت ${role} دایان شدید `
      }
    }
  } catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
};

const searchUser= async (req) => {
  try {
    let query = {};
    let param = req.query;
    let flag = req.query.flag === 'f' ? 'farmer': 'expert';
    if(param.farmer) {
      query.farmerCode = {$ne:null}
    }
    if(param.expert) {
      query.expertCode = {$ne:null}
    }
    if(param.fullName){
      query.fullName = param.fullName
    }
    if(param.phoneNumber) {
      query.phoneNumber = param.phoneNumber
    }
    if(param.nationalCode) {
      query.nationalCode = param.nationalCode
    }
    if(param.date) {
      query.date = param.date
    }
    if(param.zone) {
      query.zone = param.zone
    }
    if(param.city) {
      query.city = param.city;
    }
    if(param.farmerCode) {
      query.farmerCode = param.farmerCode
    }
    if(param.province) {
      query.province = param.province
    }
    if(param.refferer) {
      query.refferer = param.refferer
    }
    if(param.expertCode) {
      query.expertCode = param.expertCode
    }

    let  findingData = await model.findUsers(query);
    if ( flag === 'farmer' ){
     findingData = findingData.filter( el => el.role.includes('farmer'));

    }else if (flag === 'expert'){
      findingData = findingData.filter(el => el.role.includes('expert'));
    }
    if(!findingData){
      throw{
        message:"کاربر مورد نظر یافت نشد"
      }
    }

    return {
        status:'success',
        message:'کاربر مورد نظر یافت شد',
        data: findingData

    }

  } catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
};

const changeRole = async (req) => {
  try {
    let reqData = {
      code: req.body.code,
      otpCode: req.body.otp || null
    };

    let flag = reqData.code.charAt(0);
    let role = flag === "f" ? "farmer" : "expert";
    let userDB;

    if (flag === 'f') {
      userDB = await model.findUser({farmerCode: reqData.code});
    } else {
      userDB = await model.findUser({expertCode: reqData.code});
    }
    ;

    if (!userDB) {
      throw{
        message: "کاربری بااین کد و نقش وجود ندارد",
        status: 404
      }
    };

    if (!reqData.otpCode) {

      let otpCode = await utils.smsConnection(userDB.phoneNumber);

      await model.updateUser(
        {
          phoneNumber: userDB.phoneNumber,
          otpCode,
          otpExpireTime: utils.calOtpExpireTime()
        });

      return {
        status: 200,
        data: {
          status: "success",
          message: 'رمز یک بار مصرف با موفقیت ارسال شد',
        }
      };
    } else if (reqData.otpCode) {

      if (!(userDB.otpCode == reqData.otpCode)) {
        throw{
          status: 400,
          message: 'کد یکبار مصرف ارسال شده معتبر نیست'
        }
      }
      let now = +moment().format('HHmm');
      if (userDB.otpExpireTime <= now) throw {
        status: 400,
        message: "کد منقضی شده است"
      }

      let user = await model.updateUser({
        phoneNumber: userDB.phoneNumber,
        activeRole: role,
      });

      return {
        status: 200,
        data: {
          status: "success",
          message: "نقش شما با موفقیت تغییر کرد",
          data: userDB
        }
      }
    }
    ;

  } catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
};


const users = async (req) => {
  try {
    let query = {}
    if(req.query.farmer) {
      query.farmerCode = {$exists:true}
    }
    if(req.query.expert) {
      query.expertCode = {$exists:true}
    }

    let result = await model.users(query);
    return {
      message:'کاربران با موفقیت دریافت شد',
      data:result
    }

  } catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
};


const getRole = async(req , res)=>{
  try {
   
    let user = await model.findUser({uid:req.userId});
     
     let data = {
      activeRole : user.activeRole,
      fullName : user.fullName,
      phoneNumber:user.phoneNumber,
      nationalCode : user.nationalCode
    }
    
     if(user.activeRole === 'expert'){
      data.expertCode = user.expertCode;
     }else if (user.activeRole === 'farmer'){
       data.farmerCode = user.farmerCode;
     }
    

    return{
      status:'success',
      message:'نقش کاربر فرستاده شد',
       data
    }

  } catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
}


const selfProfile = async (req) => {
  try {
    let reqProfile = await model.showProfile(req.params);
    return{
      status:200,
      message: 'اطلاعات کاربر با موفقیت دریافت شد',
      data: reqProfile
    }
  }catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
}



const updateProfile = async (req) => {
  try {
    let reqUpdate = await model.userProfile(req.query)
    return {
      status: 200,
      message: 'اطلاعات با موفقیت تغیر یافت',
      data: reqUpdate
    }

  }catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }

}



module.exports = {
  roleSignup,
  searchUser,
  changeRole,
  users,
  getRole,
  selfProfile,
  updateProfile
};