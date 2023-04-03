/* mySeedScript.js */

// require the necessary libraries
const MongoClient = require("mongodb").MongoClient;

async function seedDB() {
  // Connection URL
  const uri =
    "mongodb+srv://kevaldave:Qazplm321*@cluster0.ze09swh.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Connected correctly to server");

    const collection = client.db("postapp").collection("roles");

    // The drop() command destroys all data from a collection.
    // Make sure you run it against proper database and collection.
    collection.drop();

    await collection.insertMany([
      {
        role_id: 1,
        role_name: "Admin",
      },
      {
        role_id: 2,
        role_name: "application_user",
      },
      {
        role_id: 3,
        role_name: "tester",
      },
    ]);

    console.log("Database seeded! :)");
    client.close();
  } catch (err) {
    console.log(err.stack);
  }
}

seedDB();
