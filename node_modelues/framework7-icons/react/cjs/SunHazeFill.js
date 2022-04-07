"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SunHazeFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 28.0001 10.2344 C 29.0548 10.2109 29.8985 9.3437 29.8985 8.125 L 29.8985 2.3594 C 29.8985 1.1406 29.0548 .2734 28.0001 .2734 C 26.9454 .2734 26.1017 1.1406 26.1017 2.3594 L 26.1017 8.125 C 26.1017 9.3437 26.9454 10.2578 28.0001 10.2344 Z M 40.0938 15.2266 C 40.8438 15.9531 42.0626 15.9531 42.9298 15.1094 L 47.0077 11.0313 C 47.8751 10.1406 47.8516 8.9453 47.1253 8.1953 C 46.3986 7.4687 45.1799 7.4453 44.3125 8.3125 L 40.2345 12.3906 C 39.3673 13.2578 39.3438 14.5000 40.0938 15.2266 Z M 13.0704 15.1094 C 13.9376 15.9531 15.2032 15.9766 15.9064 15.2266 C 16.6329 14.4766 16.6329 13.2578 15.7892 12.3906 L 11.7111 8.3125 C 10.8204 7.4453 9.6251 7.4687 8.8985 8.1953 C 8.1485 8.9453 8.1251 10.1406 8.9923 11.0313 Z M 5.9689 37.7266 L 53.5703 37.7266 C 54.3906 37.7266 55.0468 37.0703 55.0468 36.2266 C 55.0468 35.3828 54.3906 34.7500 53.5703 34.7500 L 38.2189 34.7500 C 39.7657 32.6640 40.7032 30.0859 40.7032 27.2969 C 40.7032 20.3594 34.9376 14.5703 28.0001 14.5703 C 21.0626 14.5703 15.2970 20.3594 15.2970 27.2969 C 15.2970 30.0859 16.2345 32.6640 17.7814 34.7500 L 5.9689 34.7500 C 5.1485 34.7500 4.4923 35.3828 4.4923 36.2266 C 4.4923 37.0703 5.1485 37.7266 5.9689 37.7266 Z M 3.0392 28.6328 L 8.8048 28.6328 C 10.0236 28.6328 10.9376 27.7656 10.9142 26.7109 C 10.8907 25.6797 10.0236 24.8125 8.8048 24.8125 L 3.0392 24.8125 C 1.8438 24.8125 .9532 25.6797 .9532 26.7109 C .9532 27.7656 1.8438 28.6328 3.0392 28.6328 Z M 47.1954 28.6328 L 52.9612 28.6328 C 54.1799 28.6328 55.0468 27.7656 55.0468 26.7109 C 55.0468 25.6797 54.1799 24.8125 52.9612 24.8125 L 47.1954 24.8125 C 45.9767 24.8125 45.0628 25.6797 45.0863 26.7109 C 45.1093 27.7656 45.9767 28.6328 47.1954 28.6328 Z M 2.4298 46.7266 L 50.0312 46.7266 C 50.8751 46.7266 51.5077 46.0937 51.5077 45.2500 C 51.5077 44.4062 50.8751 43.7500 50.0312 43.7500 L 2.4298 43.7500 C 1.6095 43.7500 .9532 44.4062 .9532 45.2500 C .9532 46.0937 1.6095 46.7266 2.4298 46.7266 Z M 5.9689 55.7266 L 53.5703 55.7266 C 54.3906 55.7266 55.0468 55.0937 55.0468 54.2500 C 55.0468 53.4062 54.3906 52.7734 53.5703 52.7734 L 5.9689 52.7734 C 5.1485 52.7734 4.4923 53.4062 4.4923 54.2500 C 4.4923 55.0937 5.1485 55.7266 5.9689 55.7266 Z"
  }));
}

var _default = SunHazeFill;
exports["default"] = _default;