"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function RectangleFillBadgeXmark(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 49.8668 10.1221 L 16.0558 10.1221 C 11.9930 10.1221 9.9421 12.1340 9.9421 16.1772 L 9.9421 27.2327 C 16.8566 27.2327 22.5406 32.9167 22.5406 39.8312 C 22.5406 42.0970 21.9156 44.2260 20.8413 46.0816 L 49.8668 46.0816 C 53.9491 46.0816 56 44.0503 56 40.0265 L 56 16.1772 C 56 12.1535 53.9491 10.1221 49.8668 10.1221 Z M 9.9226 49.7538 C 15.3721 49.7538 19.8451 45.3003 19.8451 39.8312 C 19.8451 34.4011 15.3721 29.9086 9.9226 29.9086 C 4.4925 29.9086 0 34.4011 0 39.8312 C 0 45.3003 4.4925 49.7538 9.9226 49.7538 Z M 7.0317 44.4604 C 6.5434 44.9488 5.8207 44.8511 5.3519 44.4018 C 4.9027 43.9526 4.8245 43.2104 5.3129 42.7220 L 8.2623 39.7726 L 5.5473 37.0381 C 5.1176 36.5888 5.1176 35.8661 5.5473 35.4559 C 5.9770 35.0262 6.6801 35.0067 7.1294 35.4559 L 9.8835 38.1514 L 12.8134 35.2215 C 13.3017 34.7332 14.0439 34.8309 14.4932 35.2801 C 14.9424 35.7294 15.0401 36.4521 14.5518 36.9599 L 11.6024 39.8898 L 14.3174 42.6244 C 14.7471 43.0736 14.7471 43.8159 14.3174 44.2260 C 13.8877 44.6362 13.1650 44.6558 12.7157 44.2260 L 10.0007 41.5110 Z"
  }));
}

var _default = RectangleFillBadgeXmark;
exports["default"] = _default;