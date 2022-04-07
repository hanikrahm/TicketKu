"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function NumberSquare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 21.9882 39.4023 C 22.9023 39.4023 23.4648 38.9336 23.6523 38.0664 L 24.7070 33.0274 L 29.0663 33.0274 L 28.1054 37.6211 C 27.8944 38.5820 28.5742 39.4023 29.5351 39.4023 C 30.4960 39.4023 31.1054 38.9336 31.2695 38.0664 L 32.3241 33.0039 L 34.7617 33.0039 C 35.6757 33.0039 36.3320 32.3242 36.3320 31.4336 C 36.3320 30.6367 35.7695 30.0508 34.9960 30.0508 L 32.9570 30.0508 L 33.9648 25.2930 L 36.4492 25.2930 C 37.3398 25.2930 37.9960 24.6133 37.9960 23.7227 C 37.9960 22.9258 37.4335 22.3398 36.6601 22.3398 L 34.5742 22.3398 L 35.4882 17.9571 C 35.6757 16.9961 34.9726 16.1758 34.0117 16.1758 C 33.0976 16.1758 32.5117 16.6445 32.3241 17.5352 L 31.3163 22.3398 L 26.9570 22.3398 L 27.8710 17.9571 C 28.0585 17.0196 27.4023 16.1758 26.4179 16.1758 C 25.4804 16.1758 24.8944 16.6445 24.7070 17.5352 L 23.7226 22.3398 L 21.2382 22.3398 C 20.3476 22.3398 19.6913 23.0196 19.6913 23.9102 C 19.6913 24.7071 20.2539 25.2930 21.0273 25.2930 L 23.0898 25.2930 L 22.0820 30.0508 L 19.5742 30.0508 C 18.6835 30.0508 18.0039 30.7305 18.0039 31.6211 C 18.0039 32.4180 18.5663 33.0039 19.3632 33.0039 L 21.4726 33.0039 L 20.5117 37.6211 C 20.3241 38.5820 21.0273 39.4023 21.9882 39.4023 Z M 25.1523 30.3320 L 26.2304 25.0586 L 30.9413 25.0586 L 29.8398 30.3320 Z"
  }));
}

var _default = NumberSquare;
exports["default"] = _default;