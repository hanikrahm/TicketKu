"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUturnUpSquare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8399 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1601 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4648 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4648 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 24.7304 40.1289 C 30.3788 40.1289 33.7773 36.0742 33.7773 30.5899 L 33.7773 23.6055 L 33.7070 20.8164 L 35.1601 22.6680 L 37.5039 25.1055 C 37.8085 25.4101 38.2304 25.6211 38.7226 25.6211 C 39.6835 25.6211 40.4335 24.8945 40.4335 23.9570 C 40.4335 23.4648 40.2695 23.0664 39.9179 22.7383 L 33.5898 16.5273 C 33.1913 16.1289 32.6992 15.8945 32.1601 15.8945 C 31.5976 15.8945 31.1288 16.1289 30.7304 16.5273 L 24.3554 22.7617 C 24.0273 23.0899 23.8632 23.4883 23.8632 23.9804 C 23.8632 24.8945 24.5898 25.6211 25.5742 25.6211 C 26.0195 25.6211 26.4648 25.4570 26.7695 25.1289 L 29.6054 22.1758 L 30.6132 20.8164 L 30.4960 23.6055 L 30.4960 30.5899 C 30.4960 34.0352 28.5273 36.6836 24.9179 36.6836 C 21.2148 36.6836 18.9413 34.1055 18.9413 30.5664 L 18.9413 27.3086 C 18.9413 26.3242 18.3554 25.5508 17.2773 25.5508 C 16.1757 25.5508 15.5898 26.3242 15.5898 27.3555 L 15.5898 30.5664 C 15.5898 36.0508 19.1054 40.1289 24.7304 40.1289 Z"
  }));
}

var _default = ArrowUturnUpSquare;
exports["default"] = _default;