const hasher = require("bcrypt");
const userModel = require("../models/user");

async function register({ name, email, password, role_id }) {
  try {
    password = hasher.hashSync(password, 10);
    let user;
    if (role_id) {
      user = await userModel.createUser(name, email, password, role_id);
    } else {
      user = await userModel.createUser(name, email, password);
    }
    return user;
  } catch (error) {
    throw error;
  }
}

async function authenticate({ email, password }) {
  // get account from database
  try {
    const account = await userModel.getUser(email);
    console.log(account);
    // check account found and verify password
    if (!account || !hasher.compareSync(password, account.password)) {
      // authentication failed
      return false;
    } else {
      // authentication successful
      return account;
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
  register,
  authenticate,
};
