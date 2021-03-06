"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TextBadgeStar(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 16.2929 29.7695 C 22.8320 29.7695 28.1992 24.4023 28.1992 17.8399 C 28.1992 11.3242 22.8320 5.9336 16.2929 5.9336 C 9.7773 5.9336 4.3867 11.3242 4.3867 17.8399 C 4.3867 24.4023 9.7773 29.7695 16.2929 29.7695 Z M 11.9101 24.7773 C 11.5117 24.7773 11.1367 24.5664 11.1367 24.0977 C 11.1367 23.8867 11.1601 23.7695 11.1835 23.6758 L 12.6835 19.1523 L 8.7695 16.2695 C 8.5586 16.1289 8.3476 15.8711 8.3476 15.5899 C 8.3476 15.0742 8.6992 14.9101 9.1913 14.9101 L 14.0195 14.9101 L 15.5195 10.2930 C 15.6835 9.8477 15.9648 9.7070 16.2929 9.7070 C 16.6211 9.7070 16.9257 9.8477 17.0898 10.2930 L 18.5664 14.9101 L 23.4179 14.9101 C 23.9101 14.9101 24.2617 15.0742 24.2617 15.5899 C 24.2617 15.8711 24.0508 16.1289 23.8398 16.2695 L 19.9257 19.1523 L 21.4023 23.6758 C 21.4492 23.7695 21.4960 23.9336 21.4960 24.0273 C 21.4960 24.4726 21.1211 24.7773 20.6992 24.7773 C 20.5117 24.7773 20.3711 24.7773 20.2304 24.6601 L 16.2929 21.8242 L 12.3789 24.6601 C 12.2617 24.7539 12.0742 24.7773 11.9101 24.7773 Z M 33.8008 13.2461 L 49.8085 13.2461 C 50.8165 13.2461 51.6133 12.4726 51.6133 11.4648 C 51.6133 10.4805 50.8165 9.7070 49.8085 9.7070 L 33.8008 9.7070 C 32.7929 9.7070 32.0195 10.4805 32.0195 11.4648 C 32.0195 12.4726 32.7929 13.2461 33.8008 13.2461 Z M 33.8008 25.5273 L 49.8085 25.5273 C 50.8165 25.5273 51.6133 24.7539 51.6133 23.7461 C 51.6133 22.7617 50.8165 21.9883 49.8085 21.9883 L 33.8008 21.9883 C 32.7929 21.9883 32.0195 22.7617 32.0195 23.7461 C 32.0195 24.7539 32.7929 25.5273 33.8008 25.5273 Z M 6.1679 37.8086 L 49.8085 37.8086 C 50.8165 37.8086 51.6133 37.0117 51.6133 36.0273 C 51.6133 35.0430 50.8165 34.2695 49.8085 34.2695 L 6.1679 34.2695 C 5.1601 34.2695 4.3867 35.0430 4.3867 36.0273 C 4.3867 37.0117 5.1601 37.8086 6.1679 37.8086 Z M 6.1679 50.0664 L 49.8085 50.0664 C 50.8165 50.0664 51.6133 49.2930 51.6133 48.3086 C 51.6133 47.3242 50.8165 46.5273 49.8085 46.5273 L 6.1679 46.5273 C 5.1601 46.5273 4.3867 47.3242 4.3867 48.3086 C 4.3867 49.2930 5.1601 50.0664 6.1679 50.0664 Z"
  }));
}

var _default = TextBadgeStar;
exports["default"] = _default;