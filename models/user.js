const { ObjectId } = require("mongodb");
const db = require("../helper/db");

const createUser = async (name, email, password, role_id = 2) => {
  try {
    const insertUser = await db.get().collection("user").insertOne({
      user_id: new ObjectId(),
      name: name,
      email,
      password,
      role_id,
    });
    return insertUser;
  } catch (error) {
    throw error;
  }
};

const getUser = async (email) => {
  try {
    const user = await db.get().collection("user").findOne({
      email,
    });
    return user;
  } catch (error) {
    throw error;
  }
};

const getUserDetail = async (user_id) => {
  try {
    const users = await db
      .get()
      .collection("user")
      .aggregate([
        {
          $match: {
            user_id: new ObjectId(user_id),
          },
        },
        {
          $lookup: {
            from: "roles",
            localField: "role_id",
            foreignField: "role_id",
            as: "role",
          },
        },
        {
          $project: {
            _id: 0,
            user_id: 1,
            name: 1,
            email: 1,
            role: 1,
          },
        },
      ])
      .toArray();
    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  createUser,
  getUser,
  getUserDetail,
};
