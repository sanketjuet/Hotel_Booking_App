/*M
const mongoose = require("mongoose");

var MONGO_URI =
  "mongodb+srv://Sanket%3AVMwP122NizOfSBHM%40cluster0.p5u5g3q.mongodb.net/mern-rooms";

module.exports = connectdb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    .then(() => {
      console.log(`connection successful and db connected`);
    })
    .catch((err) => {
      console.log(err);
    });
};
*/

/*
const { default: mongoose } = require("mongoose");

var mongoURL =
  "mongodb+srv://Sanket:VMwP122NizOfSBHM@cluster0.p5u5g3q.mongodb.net/test";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;

connection.on("error", () => {
  console.log("Mongo DB connection failed");
});

connection.on("Connected", () => {
  console.log("Mongo DB Connection Successful");
});

module.exports = mongoose;
*/
const mongoose = require("mongoose");

var mongoDBURL =
  "mongodb+srv://Sanket:VMwP122NizOfSBHM@cluster0.p5u5g3q.mongodb.net/mern-rooms";

mongoose.connect(mongoDBURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var dbconnect = mongoose.connection;

dbconnect.on("error", () => {
  console.log(`Mongo DB Connection Failed`);
});

dbconnect.on("connected", () => {
  console.log(`Mongo DB Connection Successfull`);
});

module.exports = mongoose;
