"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PhoneDownCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 27.9765 21.3203 C 19.9609 21.3203 12.5546 23.7578 12.5546 29.5234 L 12.5546 30.2968 C 12.5546 32.0078 13.4921 33.1094 15.2968 32.8750 C 16.6562 32.6641 17.9921 32.4531 20.2890 32.0078 C 21.9530 31.7266 22.4218 30.9531 22.4452 29.4531 L 22.4452 28.1406 C 22.4452 27.6953 22.8202 27.4609 23.1483 27.3672 C 23.9921 27.1797 25.8436 26.9688 27.9999 26.9688 C 30.1562 26.9688 31.9374 27.1328 32.8514 27.3672 C 33.1796 27.4609 33.5312 27.7656 33.5312 28.1406 L 33.5546 29.4531 C 33.5780 30.9297 34.0234 31.7266 35.7109 32.0078 C 37.9140 32.4297 39.2733 32.6641 40.6796 32.8750 C 42.4843 33.1094 43.4218 32.0312 43.4218 30.2968 L 43.4218 29.5234 C 43.4218 23.7812 36.0390 21.3203 27.9765 21.3203 Z"
  }));
}

var _default = PhoneDownCircle;
exports["default"] = _default;