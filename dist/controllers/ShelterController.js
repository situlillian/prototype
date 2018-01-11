"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

exports.create = create;
exports.list = list;
exports.show = show;
exports.remove = remove;

var _ShelterModel = require("../models/ShelterModel");

var _ShelterModel2 = _interopRequireDefault(_ShelterModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create(req, res, next) {
  var shelter = new _ShelterModel2.default((0, _extends3.default)({}, req.body));
  shelter.save().then(function (s) {
    return res.json(s);
  }).catch(function (err) {
    return next(err);
  });
}

function list(request, response) {
  _ShelterModel2.default.find({}).exec().then(function (shelters) {
    return response.json(shelters);
  });
}

function show(request, response) {
  _ShelterModel2.default.findById(request.params.id).exec().then(function (shelter) {
    return response.json(shelter);
  });
}

function remove(request, response) {
  _ShelterModel2.default.findByIdAndRemove(request.params.id).exec().then(function (shelters) {
    return response.json(shelters);
  });
}