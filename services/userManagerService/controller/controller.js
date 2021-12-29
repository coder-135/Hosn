const userSchema = require("../userSchema.json");
const accessManager = require('./../../accessManager/accessControl');
const validate = require("../../../middleware/validate");
const bl = require("../businessLogic/signUpBl");
// const bl = require('./../businessLogic/bl');


const login = async (req, res) => {
  try {
    if (!req.body.username || !req.body.password)
      throw {
        data: {
          message: "نام کاربری یا گذرواژه ارسال نشده است"
        }
      }
    const inputData = {
      username: req.body.username,
      password: req.body.password
    }
    let result = await bl.login(inputData);
    res.status(200).send(result);
  } catch (err) {
    const status = err.status || 400;
    res.status(status).send({
      status: "fail",
      data: err.data
    });
  }
};

const roleSignup = async (req, res, next) => {
  try {

    await accessManager(req, res, 'roleSignUp');

    let result = await bl.roleSignup(req);
    res.status(result.status).send(result.data);

  } catch (err) {
    err.status = err.status || 400;
    res.status(err.status).send({
      status: "fail",
      message: err.message,
    });
  }

};

const searchUser = async (req, res) => {
  try {
    await accessManager(req, res, 'searchUser');

    let result = await bl.searchUser(req);
    res.status(200).send(result);

  } catch (err) {
    err.status = err.status || 400;
    res.status(err.status).send({
      status: "fail",
      message: err.message,
    });
  }
};

const changeRole = async (req, res) => {
  try {
    // await accessManager(req, res, 'promoteUser');

    let result = await bl.changeRole(req);
    res.status(result.status).send(result.data);

  } catch (err) {

    res.status(err.status).send({
      status: "fail",
      message: err.message,
    });

  }
}


const users = async (req, res) => {
  try {
    // await accessManager(req, res, 'promoteUser');

    let result = await bl.users(req);
    res.status(200).send(result);

  } catch (err) {

    res.status(err.status).send({
      status: "fail",
      message: err.message,
    });

  }
};


const getRole = async (req, res) => {

  try {
    await accessManager(req, res, 'getRole');

    let result = await bl.getRole(req);
    res.status(200).send(result);

  } catch (err) {
    let status = err.status || 400;
    res.status(status).send({
      status: "fail",
      message: err.message,
    });

  }


};


const showSelfProfile = async (req, res) => {
  try {
    let result = await bl.selfProfile(req);
    res.status(200).send(result);

  } catch (err) {
    const status = err.status || 400;
    const message = err.message || "failed";
    res.status(status).send({
      status: "fail",
      message,
    });
  }
}


const updateUserProfile = async (req, res) => {
  try {
    let result = await bl.updateProfile(req);
    res.status(200).send(result);

  } catch (err) {

    res.status(err.status).send({
      status: "fail",
      message: err.message,
    });


  }
}


module.exports = {
  login,
  roleSignup,
  searchUser,
  changeRole,
  users,
  getRole,
  showSelfProfile,
  updateUserProfile
};