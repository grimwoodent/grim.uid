"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _queue = require("./queue");

var _generator = require("./generator");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UID = function UID() {
  _classCallCheck(this, UID);
};

exports.default = UID;

_defineProperty(UID, "Queue", _queue.UIDQueue);

_defineProperty(UID, "Generator", _generator.UIDGenerator);