let jwt = require('jsonwebtoken');
const model = require("./model/model");
const {promisify} = require("util");
const generate = require('../../utils/generateToken');


const accessManager = async (req, res, feature) => {
  try {
    let token;
    const header = req.headers;
    if (header.hasOwnProperty.call(header, 'refresh-token')) {
      let refreshToken = header['refresh-token'];
      let jwtPayload = parseJwt(refreshToken);
      let uid = jwtPayload.id;
      let user = await model.findUserRole({uid});
      if (user) {
        try {
          await promisify(jwt.verify)(refreshToken, process.env.REFRESH_JWT_SECRET);
        } catch (err) {
          res.removeHeader('refresh-token');
          throw{
            message: 'لطفا دوباره وارد شوید',
            status: 401
          };

        }

        token = generate.access(uid);
        res.setHeader('access-token', token);
      } else {
        throw {
          message: 'کاربری با این توکن وجود ندارد'
        }
      }

    }
    let accessToken = header['access-token'] || token;
    if(!accessToken)
      throw {message:'توکنی ارسال نشده است'}
    let jwtPayload = parseJwt(accessToken);
    let uid = jwtPayload.id;
    let userData = await model.findUserRole({uid});
    if(userData === null) {
      throw {
        status : 401,
        message: 'توکن منقضی شده است دوباره لاگین کنید'
      }
    }
    let {activeRole} = userData;
    let {features} = await model.findFeature({role: activeRole});

    if (!(features.includes(feature))) {
      throw {
        status: 403,
        message: "شما اجازه دسترسی به این پلت فرم را ندارید",
      }
    };
    try {
      await promisify(jwt.verify)(accessToken, process.env.ACCESS_JWT_SECRET);
    } catch (e) {
      throw {
        status: 401,
        message: 'توکن ارسالی منقضی شده است لطفا دوباره درخواست دهید'
      }
    }

    req.userId = uid;
    req.userRole = activeRole;
    return;


//      const header = req.headers;
//      if (!header.hasOwnProperty.call(header, 'access-token')) {
//          throw {
//              status: 403,
//              message: "توکن نامعتبر میباشد"
//          }
//      }
//      let token = header['access-token'];
//     //  let refreshToken = header['refresh-token'];
//      let jwtPayload = parseJwt(token);
//      let uid = jwtPayload.id;
//      let {activeRole , refreshToken} = await model.findUserRole({uid});
//      let {features} = await model.findFeature({role:activeRole});
//      if (!(features.includes(feature))){
//          throw {
//              status: 403,
//              message: "شما اجازه دسترسی به این پلت فرم را ندارید",
//          }
//      };
//     try {
//       await promisify(jwt.verify)(token, process.env.ACCESS_JWT_EXPIRES_IN);
//     } catch (err) {
//          try {
//              await promisify(jwt.verify)(refreshToken, process.env.REFRESH_JWT_SECRET);
//              let token = generate.access(uid);
//              res.setHeader('access-token',token);
//          } catch (err){
//              res.removeHeader('refresh-token');
//              throw {message : 'لطفا دوباره وارد شوید'}
//          }
//     }
//     req.userId = uid;
//     req.userRole = activeRole;
//      return;


  } catch (err) {
    err.status = err.status || 400;
    throw{
      status: err.status,
      message: err.message
    }
  }

}


function parseJwt(token) {
  let base64Url = token.split('.')[1];
  let payload = Buffer.from(base64Url, 'base64');
  return JSON.parse(payload.toString());
};


module.exports = accessManager;