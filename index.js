require("dotenv").config();
const express = require("express");
const app = express();
const auth = require("./controller/auth/index");
const post = require("./controller/post/index");

app.use(express.json());

app.use("/", auth, post);

const db = require("./helper/db");
// const rolesSeeder = require("./helper/rolesDataSeeder");

app.listen(9000, async () => {
  await db.connectDb();

  console.log("Server Started Running ///");
});
