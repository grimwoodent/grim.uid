"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UIDGenerator = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var s4 = function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

var UIDGenerator =
/*#__PURE__*/
function () {
  function UIDGenerator() {
    _classCallCheck(this, UIDGenerator);
  }

  _createClass(UIDGenerator, [{
    key: "generate",
    value: function generate() {
      return this.next;
    }
  }, {
    key: "next",
    get: function get() {
      return Array(8).fill('').map(function () {
        return s4();
      }).join('');
    }
  }]);

  return UIDGenerator;
}();

exports.UIDGenerator = UIDGenerator;