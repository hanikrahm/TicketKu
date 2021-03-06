"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUpLeftSquare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 20.6757 33.7774 C 21.7070 33.7774 22.3866 33.0742 22.3866 31.9492 L 22.3866 27.8945 L 22.0351 24.2383 L 25.4101 27.8477 L 34.0351 36.4727 C 34.3632 36.8008 34.8085 37.0118 35.3710 37.0118 C 36.4023 37.0118 37.1054 36.3320 37.1054 35.2774 C 37.1054 34.8086 36.8710 34.3398 36.5429 34.0118 L 27.8944 25.3867 L 24.2382 21.9883 L 27.7070 22.3633 L 31.9726 22.3633 C 33.0976 22.3633 33.8241 21.6602 33.8241 20.6289 C 33.8241 19.5977 33.1210 18.9180 32.0195 18.9180 L 20.9101 18.9180 C 19.7148 18.9180 18.9413 19.4571 18.9413 20.8633 L 18.9413 31.9023 C 18.9413 33.0039 19.6444 33.7774 20.6757 33.7774 Z"
  }));
}

var _default = ArrowUpLeftSquare;
exports["default"] = _default;