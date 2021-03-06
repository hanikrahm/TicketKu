"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DocOnClipboardFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 42.6235 45.0027 L 43.9237 45.0027 C 48.4638 45.0027 50.7337 42.6887 50.7337 38.0826 L 50.7337 6.9201 C 50.7337 2.3141 48.4638 0 43.9237 0 L 22.6345 0 C 18.0945 0 15.8025 2.3141 15.8025 6.9201 L 15.8025 8.0000 L 18.6675 8.0000 C 21.7750 8.0000 24.2653 8.8815 26.7336 11.3499 L 39.2295 23.8898 C 41.7199 26.3802 42.6235 28.9366 42.6235 31.9339 Z M 27.9017 7.7796 C 26.9320 7.7796 26.4912 7.1405 26.4912 6.4794 L 26.4912 6.0165 C 26.4912 5.3333 26.9320 4.7162 27.9017 4.7162 L 38.6565 4.7162 C 39.6042 4.7162 40.0670 5.3333 40.0670 6.0165 L 40.0670 6.4794 C 40.0670 7.1405 39.6042 7.7796 38.6565 7.7796 Z M 11.5050 56 L 32.7943 56 C 37.3342 56 39.6262 53.6859 39.6262 49.0799 L 39.6262 31.3388 L 23.6703 31.3388 C 20.8273 31.3388 19.5050 29.9945 19.5050 27.1736 L 19.5050 10.9972 L 11.5050 10.9972 C 6.9651 10.9972 4.6731 13.3113 4.6731 17.9174 L 4.6731 49.0799 C 4.6731 53.7080 6.9651 56 11.5050 56 Z M 23.6483 28.3195 L 38.4582 28.3195 C 38.2378 27.4600 37.6427 26.6666 36.6510 25.6529 L 25.1910 13.9945 C 24.2213 13.0028 23.3617 12.4077 22.5243 12.1653 L 22.5243 27.1956 C 22.5243 27.9449 22.8989 28.3195 23.6483 28.3195 Z"
  }));
}

var _default = DocOnClipboardFill;
exports["default"] = _default;