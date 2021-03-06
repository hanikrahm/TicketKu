"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DivideSquare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 27.9648 22.1289 C 29.6523 22.1289 30.8476 21.0039 30.8476 19.5508 C 30.8476 17.8867 29.6757 16.7383 27.9648 16.7383 C 26.3944 16.7383 25.1757 17.9102 25.1757 19.5508 C 25.1757 21.0039 26.3944 22.1289 27.9648 22.1289 Z M 18.8944 29.9571 L 37.1523 29.9571 C 38.4648 29.9571 39.3554 29.2539 39.3554 28.0118 C 39.3554 26.7461 38.5117 26.0430 37.1523 26.0430 L 18.8944 26.0430 C 17.5351 26.0430 16.6679 26.7461 16.6679 28.0118 C 16.6679 29.2539 17.5820 29.9571 18.8944 29.9571 Z M 27.9648 39.2383 C 29.6523 39.2383 30.8476 38.0898 30.8476 36.6367 C 30.8476 34.9961 29.6757 33.8477 27.9648 33.8477 C 26.3944 33.8477 25.1757 34.9961 25.1757 36.6367 C 25.1757 38.0898 26.3944 39.2383 27.9648 39.2383 Z"
  }));
}

var _default = DivideSquare;
exports["default"] = _default;