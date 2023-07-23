const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connect = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "Node-Notes",
    });
    console.log(`Data base connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnection;
