const config = require("../config/config");

const MongoClient = require("mongodb").MongoClient;

let db = null;

function get() {
  return db;
}

async function connectDb() {
  try {
    const mclient = await MongoClient.connect(config.mongoURI, {
      useNewUrlParser: true,
    });
    if (!mclient) {
      return console.log("cannot connect to db...");
    } else {
      console.log("Connected to db..");
      db = await mclient.db("postapp");
    }
    return;
  } catch (error) {
    return error;
  }
}

module.exports = {
  get,
  connectDb,
};
