"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ScissorsAlt(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19.0245572,21.4381547 L7.29019426,10.6533661 C4.82859652,8.39096707 3.44112962,5.19527366 3.47078462,1.85628255 L3.48727106,0 L22,18.4696377 L40.5127289,0 L40.5494481,1.69672459 C40.6226005,5.07695791 39.2411726,8.326594 36.7545595,10.6237248 L25.0103675,21.4729981 L30.1540053,26.6046633 C31.4966146,25.8551736 33.0444525,25.4279455 34.6923077,25.4279455 C39.8328042,25.4279455 44,29.5854415 44,34.7139728 C44,39.842504 39.8328042,44 34.6923077,44 C29.5518112,44 25.3846154,39.842504 25.3846154,34.7139728 C25.3846154,32.5840891 26.1033518,30.6216846 27.3120494,29.055002 L22.0440374,24.213291 L16.7355628,29.1172547 C17.9154993,30.673526 18.6153846,32.6122061 18.6153846,34.7139728 C18.6153846,39.842504 14.4481888,44 9.30769231,44 C4.16719579,44 0,39.842504 0,34.7139728 C0,29.5854415 4.16719579,25.4279455 9.30769231,25.4279455 C10.9555475,25.4279455 12.5033854,25.8551736 13.8459947,26.6046633 L19.0245572,21.4381547 Z M9.3,41 C12.6137085,41 15.3,38.3137085 15.3,35 C15.3,31.6862915 12.6137085,29 9.3,29 C5.9862915,29 3.3,31.6862915 3.3,35 C3.3,38.3137085 5.9862915,41 9.3,41 Z M34.7,41 C38.0137085,41 40.7,38.3137085 40.7,35 C40.7,31.6862915 38.0137085,29 34.7,29 C31.3862915,29 28.7,31.6862915 28.7,35 C28.7,38.3137085 31.3862915,41 34.7,41 Z M22,23 C22.8284271,23 23.5,22.3284271 23.5,21.5 C23.5,20.6715729 22.8284271,20 22,20 C21.1715729,20 20.5,20.6715729 20.5,21.5 C20.5,22.3284271 21.1715729,23 22,23 Z",
    transform: "translate(6 6)"
  }));
}

var _default = ScissorsAlt;
exports["default"] = _default;