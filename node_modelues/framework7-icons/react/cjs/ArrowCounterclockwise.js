"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowCounterclockwise(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 28.8555 26.1836 C 29.9102 26.1836 30.7070 25.3867 30.7070 24.3086 C 30.7070 23.8164 30.5195 23.3477 30.1680 22.9726 L 23.1602 16.0117 C 24.5664 15.7070 26.2070 15.5664 27.9883 15.5664 C 37.3867 15.5664 44.9336 23.0898 44.9336 32.4883 C 44.9336 41.9101 37.3867 49.4570 27.9883 49.4570 C 18.5899 49.4570 11.0664 41.9101 11.0664 32.4883 C 11.0664 31.3633 10.3399 30.5430 9.2383 30.5430 C 8.0899 30.5430 7.2930 31.3633 7.2930 32.4883 C 7.2930 43.9961 16.5039 53.2305 27.9883 53.2305 C 39.4726 53.2305 48.7070 43.9961 48.7070 32.4883 C 48.7070 21.0039 39.4726 11.7930 27.9883 11.7930 C 26.6289 11.7930 25.2695 11.9336 23.9336 12.1679 L 30.1914 6.0274 C 30.5195 5.6523 30.7070 5.1836 30.7070 4.6914 C 30.7070 3.6133 29.9102 2.7695 28.8555 2.7695 C 28.2930 2.7695 27.8242 2.9570 27.4961 3.3320 L 17.8399 13.1289 C 17.4648 13.5039 17.2539 14.0195 17.2539 14.5352 C 17.2539 15.0742 17.4180 15.5430 17.8399 15.9414 L 27.4961 25.6445 C 27.8242 25.9961 28.2695 26.1836 28.8555 26.1836 Z"
  }));
}

var _default = ArrowCounterclockwise;
exports["default"] = _default;