"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _ShelterController = require("../controllers/ShelterController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get("/state", _ShelterController.list);
router.get("/", _ShelterController.list);
router.get("/state/:id", _ShelterController.show);
router.post("/state", _ShelterController.create);
router.delete("/state/:id", _ShelterController.remove);

exports.default = router;