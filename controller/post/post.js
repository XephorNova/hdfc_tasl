const {
  createPost,
  editPost,
  deletePost,
  getPost,
} = require("../../models/user_post");

const createpost = async (req, res) => {
  try {
    const { post_message } = req.body;
    const post = await createPost(req.params.user_id, post_message, 1);
    return res.status(200).json({
      errorCode: 0,
      message: "Post Created Succesfully",
    });
  } catch (error) {
    return res.status(500).json({
      errorCode: 1,
      message: "Internal Server Error",
    });
  }
};

const editpost = async (req, res) => {
  try {
    const { post_message } = req.body;
    const post_id = req.params.post_id;
    const { user_id } = req.auth;
    const post = await editPost(post_id, user_id, post_message);
    console.log(post);
    return res.status(200).json({
      errorCode: 0,
      message: "Post Updated Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      errorCode: 1,
      message: "Internal Server Error",
    });
  }
};

const deletepost = async (req, res) => {
  try {
    const post_id = req.params.post_id;
    const { user_id } = req.auth;
    const post = await deletePost(post_id, user_id);
    return res.status(200).json({
      errorCode: 0,
      message: "Post Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      errorCode: 1,
      message: "Internal Server Error",
    });
  }
};

const getAllPostByUser = async (req, res) => {
  try {
    const post = await getPost(req.params.user_id);
    return res.status(200).json({
      errorCode: 0,
      message: "all Post by user",
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      errorCode: 1,
      message: "Internal Server Error",
    });
  }
};

const getAllPost = async (req, res) => {
  try {
    const post = await getPost();
    return res.status(200).json({
      errorCode: 0,
      message: "Post Updated Successfully",
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      errorCode: 1,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createpost,
  deletepost,
  editpost,
  getAllPostByUser,
  getAllPost,
};
