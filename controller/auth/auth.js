const { tokenGenerator } = require("../../utils/jwt");
const { authenticate } = require("../../utils/passwordUtil");
const { register } = require("../../utils/passwordUtil");
const users = require("../../models/user");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userDetails = await authenticate({ email, password });
    const token = tokenGenerator(email, userDetails.user_id);
    return res.status(200).json({
      errorCode: 0,
      auth: true,
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res
      .json({
        errorCode: 1,
        message: "Internal Server Error",
      })
      .status(5000);
  }
};

const registeration = async (req, res) => {
  try {
    const { name, email, password, role_name } = req.body;
    const getRoleId =
      {
        Admin: 1,
        application_user: 2,
        tester: 3,
      }[role_name] || 2;
    const createuser = await register({
      name,
      email,
      password,
      role_id: getRoleId,
    });
    console.log(createuser);
    return res.status(200).json({
      errorCode: 0,
      message: "Registration Successful",
      data: {
        _id: createuser.insertedId,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .json({
        errorCode: 1,
        message: "Internal Server Error",
      })
      .status(500);
  }
};

const getUserDetail = async (req, res, next) => {
  try {
    const user_id = req.params.user_id;
    const allUsers = await users.getUserDetail(user_id);
    return res.status(200).json({
      errorCode: 0,
      message: "Registration Successful",
      data: allUsers,
    });
  } catch (error) {
    console.log(error);
    return res
      .json({
        errorCode: 1,
        message: "Internal Server Error",
      })
      .status(5000);
  }
};

module.exports = {
  login,
  registeration,
  getUserDetail,
};
