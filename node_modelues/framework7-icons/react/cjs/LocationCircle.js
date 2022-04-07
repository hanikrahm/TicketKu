"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LocationCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 18.3671 40.2578 C 18.7421 40.2578 19.0936 40.1172 19.3280 39.8828 L 27.4140 31.7968 C 27.6483 31.5859 27.8358 31.4688 28.0234 31.4688 C 28.1874 31.4688 28.3749 31.5859 28.5858 31.7968 L 36.6483 39.8828 C 36.8827 40.1172 37.2812 40.2578 37.6327 40.2578 C 38.4062 40.2578 38.9218 39.7422 38.9218 38.9688 C 38.9218 38.6406 38.8280 38.3359 38.7109 38.0078 L 29.7343 15.1094 C 29.3593 14.1484 28.7733 13.7031 28.0234 13.7031 C 27.2265 13.7031 26.6640 14.1484 26.2890 15.1094 L 17.2890 38.0078 C 17.1718 38.3359 17.1014 38.6406 17.1014 38.9688 C 17.1014 39.7422 17.5936 40.2578 18.3671 40.2578 Z"
  }));
}

var _default = LocationCircle;
exports["default"] = _default;