"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowDownRightCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 34.7499 22.2109 C 33.7187 22.2109 33.0390 22.9141 33.0390 24.0390 L 33.0390 28.0937 L 33.3905 31.7266 L 30.0155 28.1406 L 21.3671 19.4922 C 21.0390 19.1641 20.6171 18.9531 20.0546 18.9531 C 18.9999 18.9531 18.3202 19.6563 18.3202 20.7109 C 18.3202 21.1797 18.5546 21.6250 18.8827 21.9531 L 27.5312 30.6016 L 31.1640 34 L 27.7187 33.6250 L 23.4296 33.6250 C 22.3280 33.6250 21.6014 34.3047 21.6014 35.3594 C 21.6014 36.3906 22.3046 37.0703 23.3827 37.0703 L 34.5155 37.0703 C 35.7109 37.0703 36.4609 36.5078 36.4609 35.1250 L 36.4609 24.0859 C 36.4609 22.9844 35.7812 22.2109 34.7499 22.2109 Z"
  }));
}

var _default = ArrowDownRightCircle;
exports["default"] = _default;