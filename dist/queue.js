"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UIDQueue = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UIDQueue =
/*#__PURE__*/
function () {
  function UIDQueue() {
    _classCallCheck(this, UIDQueue);

    _defineProperty(this, "current", 1);
  }

  _createClass(UIDQueue, [{
    key: "getNext",
    value: function getNext() {
      return this.next;
    }
  }, {
    key: "next",
    get: function get() {
      return this.current++;
    }
  }]);

  return UIDQueue;
}();

exports.UIDQueue = UIDQueue;