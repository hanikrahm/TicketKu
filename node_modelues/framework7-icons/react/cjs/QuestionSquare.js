"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function QuestionSquare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 27.5429 32.8164 C 28.7382 32.8164 29.4413 32.0664 29.4413 31.1523 L 29.4413 30.8711 C 29.4413 29.5586 30.2148 28.7149 31.8320 27.6367 C 34.1054 26.1367 35.7226 24.7774 35.7226 21.9649 C 35.7226 18.0742 32.2539 15.9649 28.2695 15.9649 C 24.2617 15.9649 21.6132 17.8867 20.9570 20.0430 C 20.8398 20.4180 20.7695 20.8164 20.7695 21.1914 C 20.7695 22.2461 21.5898 22.8086 22.3632 22.8086 C 23.6992 22.8086 23.9101 22.1055 24.6601 21.2149 C 25.4335 19.9258 26.5585 19.1523 28.1288 19.1523 C 30.2617 19.1523 31.6444 20.3711 31.6444 22.1523 C 31.6444 23.7461 30.6601 24.5196 28.6210 25.9492 C 26.9335 27.1211 25.6679 28.3633 25.6679 30.6602 L 25.6679 30.9649 C 25.6679 32.1836 26.3476 32.8164 27.5429 32.8164 Z M 27.4960 39.8008 C 28.8554 39.8008 30.0273 38.7227 30.0273 37.3633 C 30.0273 36.0039 28.8788 34.9258 27.4960 34.9258 C 26.1132 34.9258 24.9648 36.0274 24.9648 37.3633 C 24.9648 38.6992 26.1366 39.8008 27.4960 39.8008 Z"
  }));
}

var _default = QuestionSquare;
exports["default"] = _default;