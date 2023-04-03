const express = require("express");
const router = express.Router();
const authMiddleWare = require("../../utils/jwt");

const post = require("./post");

router.post("/:user_id/post", authMiddleWare.verifyToken, post.createpost);
router.put("/post/:post_id", authMiddleWare.verifyToken, post.editpost);
router.delete("/post/:post_id", authMiddleWare.verifyToken, post.deletepost);
router.get("/post/:user_id", post.getAllPostByUser);

module.exports = router;
