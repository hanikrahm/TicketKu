"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowDownLeftCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 20.0312 22.2109 C 18.9999 22.2109 18.3202 22.9844 18.3202 24.0859 L 18.3202 35.1250 C 18.3202 36.5078 19.0702 37.0703 20.2655 37.0703 L 31.3983 37.0703 C 32.4999 37.0703 33.2030 36.3906 33.2030 35.3594 C 33.2030 34.3047 32.4765 33.6250 31.3514 33.6250 L 27.0858 33.6250 L 23.6171 34 L 27.2733 30.6016 L 35.8983 21.9531 C 36.2265 21.6250 36.4609 21.1797 36.4609 20.7109 C 36.4609 19.6563 35.7812 18.9531 34.7499 18.9531 C 34.1874 18.9531 33.7421 19.1641 33.4140 19.4922 L 24.7890 28.1406 L 21.4140 31.7266 L 21.7655 28.0937 L 21.7655 24.0390 C 21.7655 22.9141 21.0858 22.2109 20.0312 22.2109 Z"
  }));
}

var _default = ArrowDownLeftCircle;
exports["default"] = _default;