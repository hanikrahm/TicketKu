"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowLeftRightCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 22.4452 38.6172 C 21.9062 38.6172 21.4374 38.4063 21.0858 38.0781 L 12.5780 29.5234 C 12.0858 29.0312 11.8280 28.5859 11.8280 28 C 11.8280 27.4609 12.0390 27.0156 12.5780 26.5 L 21.0858 17.9453 C 21.4374 17.6172 21.9062 17.4297 22.4452 17.4297 C 23.4999 17.4297 24.2733 18.2266 24.2733 19.2812 C 24.2733 19.8437 24.0624 20.3125 23.7109 20.6406 L 20.5936 23.7344 L 17.5468 26.2890 L 22.9374 26.0781 L 33.0858 26.0781 L 38.4765 26.2890 L 35.4296 23.7344 L 32.2890 20.6406 C 31.9609 20.3125 31.7265 19.8437 31.7265 19.2812 C 31.7265 18.2266 32.5234 17.4297 33.5780 17.4297 C 34.1171 17.4297 34.5858 17.6172 34.9140 17.9453 L 43.4452 26.5 C 43.9609 27.0156 44.1952 27.4609 44.1952 28 C 44.1952 28.5859 43.9374 29.0312 43.4452 29.5234 L 34.9140 38.0781 C 34.5858 38.4063 34.1171 38.6172 33.5780 38.6172 C 32.5234 38.6172 31.7265 37.75 31.7265 36.7422 C 31.7265 36.1797 31.9374 35.7109 32.2890 35.3594 L 35.4296 32.2890 L 38.4999 29.7109 L 33.0858 29.9219 L 22.9374 29.9219 L 17.5234 29.7109 L 20.5936 32.2890 L 23.7109 35.3594 C 24.0858 35.7109 24.2733 36.1797 24.2733 36.7422 C 24.2733 37.75 23.4999 38.6172 22.4452 38.6172 Z"
  }));
}

var _default = ArrowLeftRightCircleFill;
exports["default"] = _default;