"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUpLeftCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 19.7968 33.8125 C 20.8280 33.8125 21.5077 33.1094 21.5077 31.9844 L 21.5077 27.9297 L 21.1562 24.2968 L 24.5312 27.8828 L 33.1562 36.5312 C 33.4843 36.8594 33.9296 37.0703 34.4921 37.0703 C 35.5234 37.0703 36.2030 36.3672 36.2030 35.3125 C 36.2030 34.8437 35.9921 34.3984 35.6640 34.0703 L 27.0155 25.4219 L 23.3593 22.0234 L 26.8280 22.3984 L 31.0936 22.3984 C 32.2187 22.3984 32.9452 21.7188 32.9452 20.6641 C 32.9452 19.6328 32.2421 18.9531 31.1405 18.9531 L 20.0312 18.9531 C 18.8358 18.9531 18.0624 19.5156 18.0624 20.8984 L 18.0624 31.9375 C 18.0624 33.0390 18.7655 33.8125 19.7968 33.8125 Z"
  }));
}

var _default = ArrowUpLeftCircle;
exports["default"] = _default;