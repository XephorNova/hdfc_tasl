const express = require("express");
const router = express.Router();

const auth = require("./auth");

router.post("/login", auth.login);
router.post("/user", auth.registeration);
router.get("/user/:user_id", auth.getUserDetail);

module.exports = router;
