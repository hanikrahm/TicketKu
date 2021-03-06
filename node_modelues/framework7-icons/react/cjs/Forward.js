"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Forward(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 2.9281 44.4947 C 3.7618 44.4947 4.4531 44.2304 5.2665 43.7424 L 25.9869 31.5420 C 27.1053 30.8913 27.7153 30.1592 27.9389 29.3052 L 27.9389 41.0176 C 27.9389 43.2747 29.2810 44.4947 30.8671 44.4947 C 31.7007 44.4947 32.3921 44.2304 33.2055 43.7424 L 53.9461 31.5420 C 55.3695 30.6879 56 29.6916 56 28.5122 C 56 27.3531 55.3695 26.3568 53.9461 25.5028 L 33.2055 13.3023 C 32.3921 12.8143 31.7007 12.5500 30.8671 12.5500 C 29.2810 12.5500 27.9389 13.7700 27.9389 16.0271 L 27.9389 27.7395 C 27.7153 26.8855 27.1053 26.1535 25.9869 25.5028 L 5.2665 13.3023 C 4.4328 12.8143 3.7618 12.5500 2.9281 12.5500 C 1.3420 12.5500 0 13.7700 0 16.0271 L 0 41.0176 C 0 43.2747 1.3420 44.4947 2.9281 44.4947 Z M 3.8228 40.7329 C 3.5178 40.7329 3.2738 40.5499 3.2738 40.1229 L 3.2738 16.9218 C 3.2738 16.4948 3.5178 16.3117 3.8228 16.3117 C 3.9651 16.3117 4.1075 16.3728 4.3108 16.4745 L 23.6485 27.9428 C 23.9332 28.1055 24.0958 28.2479 24.0958 28.5122 C 24.0958 28.7969 23.9332 28.9392 23.6485 29.1019 L 4.3108 40.5703 C 4.1278 40.6923 3.9651 40.7329 3.8228 40.7329 Z M 31.7618 40.7329 C 31.4568 40.7329 31.2127 40.5499 31.2127 40.1229 L 31.2127 16.9218 C 31.2127 16.4948 31.4568 16.3117 31.7618 16.3117 C 31.9041 16.3117 32.0464 16.3728 32.2498 16.4745 L 51.5874 27.9428 C 51.8722 28.1055 52.0346 28.2479 52.0346 28.5122 C 52.0346 28.7969 51.8722 28.9392 51.5874 29.1019 L 32.2498 40.5703 C 32.0668 40.6923 31.9041 40.7329 31.7618 40.7329 Z"
  }));
}

var _default = Forward;
exports["default"] = _default;