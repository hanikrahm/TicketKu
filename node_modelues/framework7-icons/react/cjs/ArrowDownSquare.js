"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowDownSquare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 28.0117 40.0820 C 28.5273 40.0820 28.9492 39.8711 29.3944 39.4023 L 37.3398 31.5039 C 37.6444 31.1758 37.8085 30.7539 37.8085 30.2852 C 37.8085 29.3242 37.0585 28.5977 36.0976 28.5977 C 35.5820 28.5977 35.1601 28.7617 34.8554 29.1133 L 31.9726 32.0430 L 29.5820 34.8789 L 29.7695 29.9102 L 29.7695 17.6992 C 29.7695 16.6680 29.0195 15.9414 28.0117 15.9414 C 27.0039 15.9414 26.2539 16.6680 26.2539 17.6992 L 26.2539 29.9102 L 26.4413 34.8555 L 24.0742 32.0430 L 21.1679 29.1133 C 20.8632 28.7852 20.4413 28.5977 19.9257 28.5977 C 18.9648 28.5977 18.2382 29.3242 18.2382 30.2852 C 18.2382 30.7539 18.3788 31.1758 18.6835 31.5039 L 26.6523 39.4023 C 27.1210 39.8945 27.4960 40.0820 28.0117 40.0820 Z"
  }));
}

var _default = ArrowDownSquare;
exports["default"] = _default;