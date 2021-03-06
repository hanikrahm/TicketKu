"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MicCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 27.9999 31.3047 C 30.2968 31.3047 31.8905 29.5234 31.8905 27.1563 L 31.8905 17.9453 C 31.8905 15.5781 30.2968 13.7968 27.9999 13.7968 C 25.7030 13.7968 24.1093 15.5781 24.1093 17.9453 L 24.1093 27.1563 C 24.1093 29.5234 25.7030 31.3047 27.9999 31.3047 Z M 22.0468 40.6328 L 33.9765 40.6328 C 34.5155 40.6328 34.9843 40.1406 34.9843 39.6016 C 34.9843 39.0390 34.5155 38.5703 33.9765 38.5703 L 29.0312 38.5703 L 29.0312 35.7812 C 33.6952 35.3125 36.8124 31.8437 36.8124 27.1328 L 36.8124 24.1328 C 36.8124 23.5703 36.3671 23.1250 35.8280 23.1250 C 35.2890 23.1250 34.7968 23.5703 34.7968 24.1328 L 34.7968 27.1328 C 34.7968 31.0703 32.0312 33.9063 27.9999 33.9063 C 23.9452 33.9063 21.2030 31.0703 21.2030 27.1328 L 21.2030 24.1328 C 21.2030 23.5703 20.7109 23.1250 20.1718 23.1250 C 19.6562 23.1250 19.1874 23.5703 19.1874 24.1328 L 19.1874 27.1328 C 19.1874 31.8437 22.3046 35.3359 26.9687 35.7812 L 26.9687 38.5703 L 22.0468 38.5703 C 21.4843 38.5703 20.9921 39.0390 20.9921 39.6016 C 20.9921 40.1406 21.4843 40.6328 22.0468 40.6328 Z"
  }));
}

var _default = MicCircle;
exports["default"] = _default;