function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { UIDQueue } from './queue';
import { UIDGenerator } from './generator';

var UID = function UID() {
  _classCallCheck(this, UID);
};

_defineProperty(UID, "Queue", UIDQueue);

_defineProperty(UID, "Generator", UIDGenerator);

export { UID as default };