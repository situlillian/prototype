// dotenv allows us to declare environment variables in a .env file, \
// find out more here https://github.com/motdotla/dotenv
require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
// import passport from "passport";
import ShelterRoutes from "./routes/ShelterRoutes";

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
// TODO: mlab and heroku
mongoose.connect("mongodb://situlillian:situlillian@ds253587.mlab.com:53587/safespace");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

// app.get("*", (req, res, next) => {
//   res.sendFile("public/index.html");
// });
//
// app.use(function (err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send(err.message);
// });

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

app.use(ShelterRoutes);
