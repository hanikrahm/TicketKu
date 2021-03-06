"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Flag(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 8.9687 51.0039 C 9.9531 51.0039 10.7500 50.2305 10.7500 49.2227 L 10.7500 36.2149 C 11.3360 35.9570 13.5391 35.1133 16.9844 35.1133 C 25.6562 35.1133 31.0938 39.3555 39.3438 39.3555 C 43.0000 39.3555 44.3594 38.9570 46.1406 38.1602 C 47.7578 37.4336 48.8125 36.2149 48.8125 34.0586 L 48.8125 10.2461 C 48.8125 9.0039 47.7344 8.2539 46.375 8.2539 C 45.2266 8.2539 43.0703 9.2617 39.0391 9.2617 C 30.7891 9.2617 25.375 4.9961 16.6797 4.9961 C 13.0234 4.9961 11.6406 5.3945 9.8594 6.1914 C 8.2422 6.9180 7.1875 8.1602 7.1875 10.2929 L 7.1875 49.2227 C 7.1875 50.1836 8.0078 51.0039 8.9687 51.0039 Z M 39.3438 35.7929 C 31.5391 35.7929 26.0078 31.5742 16.9844 31.5742 C 14.4062 31.5742 12.0859 31.8789 10.7500 32.4180 L 10.7500 10.3867 C 11.0781 9.6367 13.0234 8.5586 16.6797 8.5586 C 24.9297 8.5586 30.4375 12.8008 39.0391 12.8008 C 41.5938 12.8008 43.7031 12.4961 45.2734 12.0273 L 45.2734 33.9649 C 44.9453 34.7149 43.0000 35.7929 39.3438 35.7929 Z"
  }));
}

var _default = Flag;
exports["default"] = _default;