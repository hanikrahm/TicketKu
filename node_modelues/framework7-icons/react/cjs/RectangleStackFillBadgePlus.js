"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function RectangleStackFillBadgePlus(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 19.5747 7.4615 L 47.1735 7.4615 C 47.0468 5.6878 46.0331 4.7375 44.0905 4.7375 L 22.6576 4.7375 C 20.7149 4.7375 19.7013 5.6878 19.5747 7.4615 Z M 15.4359 13.3107 L 51.3122 13.3107 C 50.9956 11.3891 50.0874 10.3333 47.9757 10.3333 L 18.7722 10.3333 C 16.6606 10.3333 15.7526 11.3891 15.4359 13.3107 Z M 49.3696 16.7315 L 17.3574 16.7315 C 12.9442 16.7315 10.7270 18.9065 10.7270 23.2775 L 10.7270 31.4705 C 18.2232 31.4705 24.3680 37.6153 24.3680 45.1116 C 24.3680 47.7300 23.6078 50.1583 22.2775 52.2488 L 49.3696 52.2488 C 53.7828 52.2488 56 50.0528 56 45.7028 L 56 23.2775 C 56 18.9276 53.7828 16.7315 49.3696 16.7315 Z M 10.7270 55.8386 C 16.5551 55.8386 21.4540 50.9607 21.4540 45.1116 C 21.4540 39.2202 16.6184 34.3846 10.7270 34.3846 C 4.8567 34.3846 0 39.2202 0 45.1116 C 0 51.0030 4.8567 55.8386 10.7270 55.8386 Z M 10.7481 52.0799 C 10.0090 52.0799 9.3545 51.5731 9.3545 50.7707 L 9.3545 46.3997 L 5.3213 46.3997 C 4.6033 46.3997 4.0120 45.8084 4.0120 45.0905 C 4.0120 44.3936 4.6033 43.8024 5.3213 43.8024 L 9.3545 43.8024 L 9.3545 39.4313 C 9.3545 38.6289 10.0090 38.1432 10.7481 38.1432 C 11.4661 38.1432 12.1206 38.6289 12.1206 39.4313 L 12.1206 43.8024 L 16.1538 43.8024 C 16.8718 43.8024 17.4419 44.3936 17.4419 45.0905 C 17.4419 45.8084 16.8718 46.3997 16.1538 46.3997 L 12.1206 46.3997 L 12.1206 50.7707 C 12.1206 51.5731 11.4661 52.0799 10.7481 52.0799 Z"
  }));
}

var _default = RectangleStackFillBadgePlus;
exports["default"] = _default;