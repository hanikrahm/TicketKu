"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowCounterclockwiseCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 38.4296 29.0781 C 38.4296 23.3359 33.6952 18.8125 28.4218 18.8125 C 28.2109 18.8125 27.9530 18.8359 27.7655 18.8594 L 29.4296 17.1719 C 29.6874 16.8906 29.8514 16.5156 29.8514 16.0937 C 29.8514 15.2734 29.1952 14.5937 28.3749 14.5937 C 27.9530 14.5937 27.5546 14.7812 27.2968 15.0625 L 22.7968 19.6563 C 22.2577 20.2188 22.2109 21.2734 22.7968 21.8125 L 27.3436 26.3594 C 27.6014 26.6172 27.9765 26.8047 28.3749 26.8047 C 29.1952 26.8047 29.8514 26.1484 29.8514 25.3281 C 29.8514 24.9063 29.6874 24.5312 29.4062 24.25 L 27.1093 22 C 27.3436 21.9531 27.6718 21.9531 27.9765 21.9531 C 31.9843 21.9531 35.1952 25.1406 35.1952 29.1484 C 35.1952 33.1797 31.9843 36.4141 27.9765 36.4141 C 23.9452 36.4141 20.7577 33.1797 20.7577 29.1484 C 20.7577 28.2812 20.0077 27.5781 19.1405 27.5781 C 18.2733 27.5781 17.5234 28.2812 17.5234 29.1484 C 17.5234 34.9375 22.1874 39.6484 27.9765 39.6484 C 33.7655 39.6484 38.4296 34.9375 38.4296 29.0781 Z"
  }));
}

var _default = ArrowCounterclockwiseCircle;
exports["default"] = _default;