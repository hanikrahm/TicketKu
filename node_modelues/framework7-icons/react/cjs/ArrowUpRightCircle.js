"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUpRightCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 34.4921 33.8125 C 35.5234 33.8125 36.2030 33.0390 36.2030 31.9375 L 36.2030 20.8984 C 36.2030 19.5156 35.4530 18.9531 34.2577 18.9531 L 23.1483 18.9531 C 22.0468 18.9531 21.3436 19.6328 21.3436 20.6641 C 21.3436 21.7188 22.0702 22.3984 23.1952 22.3984 L 27.4609 22.3984 L 30.9296 22.0234 L 27.2733 25.4219 L 18.6249 34.0703 C 18.2968 34.3984 18.0624 34.8437 18.0624 35.3125 C 18.0624 36.3672 18.7655 37.0703 19.7968 37.0703 C 20.3593 37.0703 20.7812 36.8594 21.1327 36.5312 L 29.7577 27.8828 L 33.1327 24.2968 L 32.7812 27.9297 L 32.7812 31.9844 C 32.7812 33.1094 33.4609 33.8125 34.4921 33.8125 Z"
  }));
}

var _default = ArrowUpRightCircle;
exports["default"] = _default;