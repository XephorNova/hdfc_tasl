const { ObjectId } = require("mongodb");
const db = require("../helper/db");

const createPost = async (user_id, post_message, is_active = 1) => {
  try {
    const post = await db
      .get()
      .collection("user_post")
      .insertOne({
        post_id: new ObjectId(),
        user_id: new ObjectId(user_id),
        post_message,
        previous_message: [],
        is_active,
      });
    return post;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const editPost = async (post_id, user_id, post_message) => {
  try {
    console.log(post_id, user_id);
    const postBeforeEdit = await db
      .get()
      .collection("user_post")
      .findOne({
        post_id: new ObjectId(post_id),
      });
    console.log(postBeforeEdit);
    const post = await db
      .get()
      .collection("user_post")
      .updateOne(
        { user_id: new ObjectId(user_id), post_id: new ObjectId(post_id) },

        {
          $push: {
            previous_message: postBeforeEdit.post_message,
          },
          $set: {
            post_message: post_message,
          },
        }
      );
    return post;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deletePost = async (post_id, user_id) => {
  try {
    console.log(post_id, user_id);
    const post = await db
      .get()
      .collection("user_post")
      .findOneAndUpdate(
        {
          post_id: new ObjectId(post_id),
          user_id: new ObjectId(user_id),
        },
        {
          $set: {
            is_active: 0,
          },
        }
      );
    return post;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getPost = async (user_id) => {
  try {
    const posts = await db
      .get()
      .collection("user_post")
      .find({
        ...(user_id ? { user_id: new ObjectId(user_id) } : {}),
      })
      .toArray();
    return posts;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  createPost,
  editPost,
  deletePost,
  getPost,
};
