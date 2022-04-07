"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SquaresBelowRectangle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 8.1015 37.1289 L 47.8984 37.1289 C 52.7497 37.1289 55.1641 34.7617 55.1641 29.9805 L 55.1641 14.1367 C 55.1641 9.3320 52.7497 6.9883 47.8984 6.9883 L 8.1015 6.9883 C 3.2500 6.9883 .8359 9.3320 .8359 14.1367 L .8359 29.9805 C .8359 34.7617 3.2500 37.1289 8.1015 37.1289 Z M 8.1484 33.3555 C 5.8281 33.3555 4.6093 32.1836 4.6093 29.7929 L 4.6093 14.3242 C 4.6093 11.9336 5.8281 10.7383 8.1484 10.7383 L 47.8513 10.7383 C 50.1486 10.7383 51.3904 11.9336 51.3904 14.3242 L 51.3904 29.7929 C 51.3904 32.1836 50.1486 33.3555 47.8513 33.3555 Z M 3.1796 49.0117 L 8.1249 49.0117 C 8.8281 49.0117 9.3437 48.4961 9.3437 47.8164 L 9.3437 42.9180 C 9.3437 42.1914 8.8515 41.6758 8.1249 41.6758 L 3.1796 41.6758 C 2.4296 41.6758 1.9374 42.1914 1.9374 42.9180 L 1.9374 47.8164 C 1.9374 48.4961 2.4531 49.0117 3.1796 49.0117 Z M 14.3593 49.0117 L 19.3046 49.0117 C 20.0078 49.0117 20.5234 48.4961 20.5234 47.8164 L 20.5234 42.9180 C 20.5234 42.1914 20.0312 41.6758 19.3046 41.6758 L 14.3593 41.6758 C 13.6093 41.6758 13.1171 42.1914 13.1171 42.9180 L 13.1171 47.8164 C 13.1171 48.4961 13.6327 49.0117 14.3593 49.0117 Z M 25.5390 49.0117 L 30.4843 49.0117 C 31.1874 49.0117 31.7031 48.4961 31.7031 47.8164 L 31.7031 42.9180 C 31.7031 42.1914 31.2109 41.6758 30.4843 41.6758 L 25.5390 41.6758 C 24.7890 41.6758 24.2968 42.1914 24.2968 42.9180 L 24.2968 47.8164 C 24.2968 48.4961 24.8124 49.0117 25.5390 49.0117 Z M 36.7187 49.0117 L 41.6640 49.0117 C 42.3671 49.0117 42.8828 48.4961 42.8828 47.8164 L 42.8828 42.9180 C 42.8828 42.1914 42.3905 41.6758 41.6640 41.6758 L 36.7187 41.6758 C 35.9687 41.6758 35.4765 42.1914 35.4765 42.9180 L 35.4765 47.8164 C 35.4765 48.4961 35.9921 49.0117 36.7187 49.0117 Z M 47.8984 49.0117 L 52.8438 49.0117 C 53.5470 49.0117 54.0625 48.4961 54.0625 47.8164 L 54.0625 42.9180 C 54.0625 42.1914 53.5700 41.6758 52.8438 41.6758 L 47.8984 41.6758 C 47.1486 41.6758 46.6561 42.1914 46.6561 42.9180 L 46.6561 47.8164 C 46.6561 48.4961 47.1716 49.0117 47.8984 49.0117 Z"
  }));
}

var _default = SquaresBelowRectangle;
exports["default"] = _default;