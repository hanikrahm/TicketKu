"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SquareOnCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 22.5155 54.6602 L 47.5470 54.6602 C 52.4454 54.6602 54.9063 52.2227 54.9063 47.3945 L 54.9063 22.4805 C 54.9063 17.6758 52.4454 15.2383 47.5470 15.2383 L 38.9452 15.2383 C 36.6014 7.2461 29.1483 1.3398 20.4062 1.3398 C 9.8124 1.3398 1.0937 10.0586 1.0937 20.6524 C 1.0937 29.4180 7.0702 36.8945 15.1562 39.2149 L 15.1562 47.3945 C 15.1562 52.2227 17.6171 54.6602 22.5155 54.6602 Z M 4.9609 20.6524 C 4.9609 12.0039 11.6874 5.0195 20.4062 5.0195 C 27.2030 5.0195 32.8046 9.2851 34.9374 15.2383 L 22.5155 15.2383 C 17.6171 15.2383 15.1562 17.6524 15.1562 22.4805 L 15.1562 35.3476 C 9.1327 33.2149 4.9609 27.4492 4.9609 20.6524 Z M 22.5858 50.8867 C 20.2421 50.8867 18.9296 49.6211 18.9296 47.1836 L 18.9296 22.6914 C 18.9296 20.2539 20.2421 19.0117 22.5858 19.0117 L 47.4999 19.0117 C 49.7967 19.0117 51.1326 20.2539 51.1326 22.6914 L 51.1326 47.2070 C 51.1326 49.6211 49.7967 50.8867 47.4999 50.8867 Z"
  }));
}

var _default = SquareOnCircle;
exports["default"] = _default;