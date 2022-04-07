"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LockCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 21.9062 39.3203 L 34.0936 39.3203 C 35.7109 39.3203 36.4843 38.5234 36.4843 36.7656 L 36.4843 27.3906 C 36.4843 25.8437 35.8983 25.0469 34.6562 24.8594 L 34.6562 22.0703 C 34.6562 17.5 31.8905 14.5469 27.9999 14.5469 C 24.1093 14.5469 21.3436 17.5 21.3436 22.0703 L 21.3436 24.8828 C 20.1014 25.0703 19.4921 25.8672 19.4921 27.3906 L 19.4921 36.7656 C 19.4921 38.5234 20.2655 39.3203 21.9062 39.3203 Z M 23.7812 21.8125 C 23.7812 18.8594 25.4687 16.9141 27.9999 16.9141 C 30.5312 16.9141 32.2187 18.8594 32.2187 21.8125 L 32.2187 24.8359 L 23.7812 24.8359 Z"
  }));
}

var _default = LockCircle;
exports["default"] = _default;