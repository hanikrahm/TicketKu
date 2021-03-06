"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function RectanglePaperclip(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 28.5040 35.6523 C 32.1368 39.2617 37.6446 39.3555 41.4414 35.5820 L 52.9494 24.0742 C 53.4884 23.4883 53.4884 22.5742 52.9259 22.0586 C 52.3398 21.5430 51.5430 21.5430 50.9569 22.1055 L 39.5430 33.5195 C 36.8477 36.2148 33.0508 36.2148 30.5430 33.6367 C 27.9883 31.0117 27.9414 27.2852 30.6368 24.5898 L 45.0275 10.2461 C 46.8088 8.4648 49.2227 8.4414 50.7227 9.8945 C 52.1992 11.3477 52.1756 13.7617 50.3713 15.5664 L 36.3555 29.6523 C 35.7930 30.2383 35.0430 30.2148 34.5274 29.6523 C 33.9414 29.0898 33.9649 28.3633 34.5508 27.7773 L 44.4649 17.8633 C 45.0510 17.2773 45.0275 16.4805 44.5120 15.9414 C 43.9729 15.4257 43.1992 15.4023 42.6133 16.0117 L 32.6290 25.9726 C 30.9883 27.6133 30.9883 30.1445 32.5118 31.6445 C 34.1290 33.2148 36.4961 33.2148 38.1602 31.5508 L 52.2697 17.4648 C 55.1992 14.5117 55.1526 10.6445 52.5040 7.9961 C 49.8788 5.4179 45.9179 5.3477 43.0585 8.2305 L 28.5977 22.6914 C 24.8008 26.4883 24.9180 32.0664 28.5040 35.6523 Z M 8.0665 50.6523 L 46.6916 50.6523 C 51.5430 50.6523 53.9569 48.2851 53.9569 43.5039 L 53.9569 28.7148 L 50.1836 32.5586 L 50.1836 43.3164 C 50.1836 45.7070 48.9414 46.8789 46.6446 46.8789 L 8.1133 46.8789 C 5.7930 46.8789 4.5743 45.7070 4.5743 43.3164 L 4.5743 16.8789 C 4.5743 14.4883 5.7930 13.2930 8.1133 13.2930 L 32.1602 13.2930 L 35.9102 9.5430 L 8.0665 9.5430 C 3.2149 9.5430 .8008 11.8867 .8008 16.6914 L .8008 43.5039 C .8008 48.2851 3.2149 50.6523 8.0665 50.6523 Z"
  }));
}

var _default = RectanglePaperclip;
exports["default"] = _default;