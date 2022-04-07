"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PauseCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 21.5780 36.8828 L 23.8046 36.8828 C 24.9062 36.8828 25.4218 36.2734 25.4218 35.3828 L 25.4218 20.6406 C 25.4218 19.75 24.9062 19.1406 23.8046 19.1406 L 21.5780 19.1406 C 20.4296 19.1406 19.9140 19.75 19.9140 20.6406 L 19.9140 35.3828 C 19.9140 36.2734 20.4296 36.8828 21.5780 36.8828 Z M 32.1718 36.8828 L 34.3983 36.8828 C 35.5234 36.8828 36.0390 36.2734 36.0390 35.3828 L 36.0390 20.6406 C 36.0390 19.75 35.5234 19.1406 34.3983 19.1406 L 32.1718 19.1406 C 31.0702 19.1406 30.5312 19.75 30.5312 20.6406 L 30.5312 35.3828 C 30.5312 36.2734 31.0702 36.8828 32.1718 36.8828 Z"
  }));
}

var _default = PauseCircle;
exports["default"] = _default;