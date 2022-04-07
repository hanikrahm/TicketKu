"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUpSquare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 28.0117 15.8945 C 27.4960 15.8945 27.1210 16.1055 26.6523 16.5742 L 18.6835 24.4961 C 18.3788 24.8008 18.2382 25.2227 18.2382 25.7149 C 18.2382 26.6523 18.9648 27.4023 19.9257 27.4023 C 20.4413 27.4023 20.8632 27.1914 21.1679 26.8867 L 24.0742 23.9336 L 26.4413 21.1211 L 26.2539 26.0664 L 26.2539 38.2774 C 26.2539 39.3086 27.0039 40.0352 28.0117 40.0352 C 29.0195 40.0352 29.7695 39.3086 29.7695 38.2774 L 29.7695 26.0664 L 29.5820 21.0977 L 31.9726 23.9336 L 34.8554 26.8867 C 35.1601 27.2149 35.5820 27.4023 36.0976 27.4023 C 37.0585 27.4023 37.8085 26.6523 37.8085 25.7149 C 37.8085 25.2227 37.6444 24.8008 37.3398 24.4961 L 29.3944 16.5742 C 28.9492 16.1289 28.5273 15.8945 28.0117 15.8945 Z"
  }));
}

var _default = ArrowUpSquare;
exports["default"] = _default;