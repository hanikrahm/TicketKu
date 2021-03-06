"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowClockwiseCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 17.5234 29.0781 C 17.5234 34.9375 22.1874 39.6484 27.9765 39.6484 C 33.7655 39.6484 38.4062 34.9375 38.4062 29.1484 C 38.4062 28.2812 37.6796 27.5781 36.8124 27.5781 C 35.9218 27.5781 35.1952 28.2812 35.1952 29.1484 C 35.1952 33.1797 31.9843 36.4141 27.9765 36.4141 C 23.9452 36.4141 20.7343 33.1797 20.7343 29.1484 C 20.7343 25.1406 23.9452 21.9531 27.9765 21.9531 C 28.2812 21.9531 28.5858 21.9531 28.8202 22 L 26.5468 24.25 C 26.2421 24.5312 26.1014 24.9063 26.1014 25.3281 C 26.1014 26.1484 26.7343 26.8047 27.5780 26.8047 C 27.9530 26.8047 28.3514 26.6172 28.6093 26.3594 L 33.1562 21.8125 C 33.7187 21.2734 33.6952 20.2188 33.1562 19.6563 L 28.6562 15.0625 C 28.3749 14.7812 27.9999 14.5937 27.5780 14.5937 C 26.7343 14.5937 26.1014 15.2734 26.1014 16.0937 C 26.1014 16.5156 26.2655 16.8906 26.4999 17.1719 L 28.1640 18.8594 C 27.9999 18.8359 27.7421 18.8125 27.5312 18.8125 C 22.2577 18.8125 17.5234 23.3359 17.5234 29.0781 Z"
  }));
}

var _default = ArrowClockwiseCircle;
exports["default"] = _default;