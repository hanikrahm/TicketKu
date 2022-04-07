"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Gauge(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 27.9765 17.3828 C 29.2421 17.3828 30.2733 16.3281 30.2733 15.0859 C 30.2733 13.7968 29.2421 12.7890 27.9765 12.7890 C 26.7109 12.7890 25.6796 13.7968 25.6796 15.0859 C 25.6796 16.3281 26.7109 17.3828 27.9765 17.3828 Z M 34.7265 19.4688 C 35.9921 19.4688 37.0234 18.4141 37.0234 17.1484 C 37.0234 15.8828 35.9921 14.8281 34.7265 14.8281 C 33.4609 14.8281 32.4296 15.8828 32.4296 17.1484 C 32.4296 18.4141 33.4609 19.4688 34.7265 19.4688 Z M 20.9218 19.4688 C 22.1874 19.4688 23.2187 18.4141 23.2187 17.1484 C 23.2187 15.8828 22.1874 14.8516 20.9218 14.8516 C 19.6562 14.8516 18.6249 15.8828 18.6249 17.1484 C 18.6249 18.4141 19.6562 19.4688 20.9218 19.4688 Z M 16.3046 24.4141 C 17.5702 24.4141 18.6014 23.3828 18.6014 22.1172 C 18.6014 20.8281 17.5702 19.7968 16.3046 19.7968 C 15.0390 19.7968 14.0077 20.8281 14.0077 22.1172 C 14.0077 23.3828 15.0390 24.4141 16.3046 24.4141 Z M 39.3436 24.4375 C 40.6093 24.4375 41.6405 23.4063 41.6405 22.1406 C 41.6405 20.8516 40.6093 19.8203 39.3436 19.8203 C 38.0780 19.8203 37.0468 20.8516 37.0468 22.1406 C 37.0468 23.4063 38.0780 24.4375 39.3436 24.4375 Z M 27.9765 42.2500 C 30.0390 42.2500 31.7030 40.5859 31.7030 38.5 C 31.7030 37 30.8124 35.7109 29.5234 35.1250 L 29.5234 24.1563 C 29.5234 23.2656 28.8202 22.5625 27.9765 22.5625 C 27.1327 22.5625 26.4296 23.2656 26.4296 24.1563 L 26.4296 35.1250 C 25.1405 35.7109 24.2499 37 24.2499 38.5 C 24.2499 40.5859 25.8905 42.2500 27.9765 42.2500 Z"
  }));
}

var _default = Gauge;
exports["default"] = _default;