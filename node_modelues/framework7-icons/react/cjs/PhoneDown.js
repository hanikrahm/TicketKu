"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PhoneDown(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 0 34.4391 C 0 37.1698 1.6198 39.4375 4.5355 39.4375 C 5.0909 39.4375 5.9471 39.3913 7.1504 39.1830 L 15.3422 37.9565 C 18.6976 37.4706 19.6232 36.0821 19.6463 33.1896 C 19.6463 32.3103 19.6463 31.4772 19.6463 30.5978 C 19.6695 29.8805 19.9934 29.5796 20.5026 29.4408 C 23.9042 28.6771 32.0728 28.6771 35.4745 29.4408 C 36.0067 29.5796 36.3307 29.8805 36.3307 30.5978 C 36.3307 31.4772 36.3307 32.3103 36.3538 33.1896 C 36.3538 36.0821 37.2794 37.4706 40.6579 37.9565 L 48.8268 39.1830 C 50.0528 39.3913 50.9092 39.4375 51.4646 39.4375 C 54.3574 39.4375 56 37.1698 56 34.4391 L 56 32.5416 C 56 21.7813 43.9440 16.4358 28.0001 16.4358 C 12.0331 16.4358 0 21.7813 0 32.5416 Z M 3.7488 33.8838 L 3.7488 32.7268 C 3.7488 23.4243 15.7124 19.9300 28.0001 19.9300 C 40.2877 19.9300 52.2513 23.4243 52.2513 32.7268 L 52.2513 33.8838 C 52.2513 35.0177 51.7191 36.0127 50.5390 36.0127 C 50.1917 36.0127 49.8447 35.9664 49.2201 35.8508 L 41.4447 34.3929 C 40.6811 34.2309 40.0794 33.8375 40.0794 32.7036 L 40.0794 29.8110 C 40.0794 27.5201 39.2695 26.5945 38.0662 26.2474 C 34.3406 25.1829 21.6596 25.1829 17.9339 26.2474 C 16.7306 26.5945 15.8976 27.5201 15.8976 29.8110 L 15.8976 32.7036 C 15.8976 33.8375 15.3191 34.2309 14.5554 34.3929 L 6.7802 35.8508 C 6.1323 35.9664 5.7852 36.0127 5.4612 36.0127 C 4.2810 36.0127 3.7488 35.0177 3.7488 33.8838 Z"
  }));
}

var _default = PhoneDown;
exports["default"] = _default;