"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TextQuote(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 25.1992 25.1758 C 28.1757 25.1758 30.6601 23.1836 30.6601 20.0195 C 30.6601 17.0195 28.6211 15.0508 25.8320 15.0508 C 24.4023 15.0508 23.3008 15.6133 22.6211 16.6914 C 23.3476 13.3633 25.8554 11.1602 29.2539 11.0195 C 30.1679 10.9727 30.8242 10.3398 30.8242 9.4492 C 30.8242 8.3711 29.9570 7.8086 28.7851 7.8086 C 23.5117 7.8086 18.8242 12.3086 18.8242 18.2383 C 18.8242 22.4570 21.6367 25.1758 25.1992 25.1758 Z M 10.8554 25.1758 C 13.8320 25.1758 16.3164 23.1836 16.3164 20.0195 C 16.3164 17.0195 14.2539 15.0508 11.4648 15.0508 C 10.0586 15.0508 8.9335 15.6133 8.2539 16.6914 C 8.9804 13.3633 11.5117 11.1836 14.9101 11.0195 C 15.8008 10.9727 16.4804 10.3398 16.4804 9.4492 C 16.4804 8.3711 15.5898 7.8086 14.4179 7.8086 C 9.1445 7.8086 4.4570 12.3086 4.4570 18.2383 C 4.4570 22.4570 7.2929 25.1758 10.8554 25.1758 Z M 36.5898 11.3711 L 49.8085 11.3711 C 50.8165 11.3711 51.6133 10.5976 51.6133 9.5898 C 51.6133 8.6055 50.8165 7.8320 49.8085 7.8320 L 36.5898 7.8320 C 35.6054 7.8320 34.8320 8.6055 34.8320 9.5898 C 34.8320 10.5976 35.6054 11.3711 36.5898 11.3711 Z M 36.5898 23.6523 L 49.8085 23.6523 C 50.8165 23.6523 51.6133 22.8789 51.6133 21.8711 C 51.6133 20.8867 50.8165 20.1133 49.8085 20.1133 L 36.5898 20.1133 C 35.6054 20.1133 34.8320 20.8867 34.8320 21.8711 C 34.8320 22.8789 35.6054 23.6523 36.5898 23.6523 Z M 6.1679 35.9336 L 49.8085 35.9336 C 50.8165 35.9336 51.6133 35.1367 51.6133 34.1523 C 51.6133 33.1680 50.8165 32.3945 49.8085 32.3945 L 6.1679 32.3945 C 5.1601 32.3945 4.3867 33.1680 4.3867 34.1523 C 4.3867 35.1367 5.1601 35.9336 6.1679 35.9336 Z M 6.1679 48.1914 L 49.8085 48.1914 C 50.8165 48.1914 51.6133 47.4180 51.6133 46.4336 C 51.6133 45.4492 50.8165 44.6523 49.8085 44.6523 L 6.1679 44.6523 C 5.1601 44.6523 4.3867 45.4492 4.3867 46.4336 C 4.3867 47.4180 5.1601 48.1914 6.1679 48.1914 Z"
  }));
}

var _default = TextQuote;
exports["default"] = _default;