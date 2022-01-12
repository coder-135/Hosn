const bl = require("../businessLogic/signUpBl");


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


module.exports = {
  login
};