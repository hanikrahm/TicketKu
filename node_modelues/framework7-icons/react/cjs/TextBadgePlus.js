"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TextBadgePlus(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 16.2929 29.6406 C 22.7617 29.6406 28.1992 24.2266 28.1992 17.7109 C 28.1992 11.1953 22.8320 5.8047 16.2929 5.8047 C 9.7773 5.8047 4.3867 11.1953 4.3867 17.7109 C 4.3867 24.2734 9.7773 29.6406 16.2929 29.6406 Z M 33.8008 13.3750 L 49.8085 13.3750 C 50.8165 13.3750 51.6133 12.6015 51.6133 11.5937 C 51.6133 10.6094 50.8165 9.8359 49.8085 9.8359 L 33.8008 9.8359 C 32.7929 9.8359 32.0195 10.6094 32.0195 11.5937 C 32.0195 12.6015 32.7929 13.3750 33.8008 13.3750 Z M 16.3164 25.4453 C 15.4960 25.4453 14.7695 24.8828 14.7695 24.0156 L 14.7695 19.1406 L 10.2929 19.1406 C 9.4960 19.1406 8.8398 18.4844 8.8398 17.7109 C 8.8398 16.9375 9.4960 16.2812 10.2929 16.2812 L 14.7695 16.2812 L 14.7695 11.4297 C 14.7695 10.5390 15.4960 10.0000 16.3164 10.0000 C 17.1367 10.0000 17.8398 10.5390 17.8398 11.4297 L 17.8398 16.2812 L 22.3164 16.2812 C 23.1132 16.2812 23.7695 16.9375 23.7695 17.7109 C 23.7695 18.4844 23.1132 19.1406 22.3164 19.1406 L 17.8398 19.1406 L 17.8398 24.0156 C 17.8398 24.8828 17.1367 25.4453 16.3164 25.4453 Z M 33.8008 25.6563 L 49.8085 25.6563 C 50.8165 25.6563 51.6133 24.8828 51.6133 23.8750 C 51.6133 22.8906 50.8165 22.1172 49.8085 22.1172 L 33.8008 22.1172 C 32.7929 22.1172 32.0195 22.8906 32.0195 23.8750 C 32.0195 24.8828 32.7929 25.6563 33.8008 25.6563 Z M 6.1679 37.9375 L 49.8085 37.9375 C 50.8165 37.9375 51.6133 37.1406 51.6133 36.1563 C 51.6133 35.1719 50.8165 34.3984 49.8085 34.3984 L 6.1679 34.3984 C 5.1601 34.3984 4.3867 35.1719 4.3867 36.1563 C 4.3867 37.1406 5.1601 37.9375 6.1679 37.9375 Z M 6.1679 50.1953 L 49.8085 50.1953 C 50.8165 50.1953 51.6133 49.4219 51.6133 48.4375 C 51.6133 47.4531 50.8165 46.6562 49.8085 46.6562 L 6.1679 46.6562 C 5.1601 46.6562 4.3867 47.4531 4.3867 48.4375 C 4.3867 49.4219 5.1601 50.1953 6.1679 50.1953 Z"
  }));
}

var _default = TextBadgePlus;
exports["default"] = _default;