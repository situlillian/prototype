"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _ShelterRoutes = require("./routes/ShelterRoutes");

var _ShelterRoutes2 = _interopRequireDefault(_ShelterRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dotenv allows us to declare environment variables in a .env file, \
// find out more here https://github.com/motdotla/dotenv
require("dotenv").config();
// import passport from "passport";


_mongoose2.default.set("debug", true);
_mongoose2.default.Promise = global.Promise;
// TODO: mlab and heroku
_mongoose2.default.connect("mongodb://situlillian:situlillian@ds253587.mlab.com:53587/safespace");

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());
app.use(_express2.default.static("public"));

// app.get("*", (req, res, next) => {
//   res.sendFile("public/index.html");
// });
//
// app.use(function (err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send(err.message);
// });

var port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log("Listening on port:" + port);
});

app.use(_ShelterRoutes2.default);