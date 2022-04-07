"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Memories(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 9.4257 31.3047 C 10.0351 31.3047 10.5038 31.1406 11.0898 30.7188 L 17.2070 26.1953 C 17.7226 25.8203 18.0038 25.2578 18.0038 24.6484 C 18.0038 23.5469 17.1367 22.75 16.1523 22.75 C 15.7070 22.75 15.3086 22.8672 14.9570 23.1484 L 11.8164 25.5859 C 12.9882 16.0469 21.0742 8.7109 30.9413 8.7109 C 41.6523 8.7109 50.2304 17.3125 50.2539 28 C 50.2775 38.7109 41.6757 47.3125 30.9413 47.3125 C 24.9648 47.3125 19.7851 44.5937 16.2460 40.4922 C 15.7304 39.9063 15.1210 39.6484 14.5351 39.6484 C 13.5742 39.6484 12.6835 40.4219 12.6835 41.5000 C 12.6835 42.0156 12.9179 42.6016 13.4335 43.2344 C 17.5351 48.1094 23.9570 51.2734 30.9413 51.2734 C 43.6913 51.2734 54.2149 40.7266 54.2149 28 C 54.2149 15.2968 43.6679 4.7266 30.9413 4.7266 C 19.1523 4.7266 9.2148 13.8203 7.8320 25.3047 L 5.3242 21.7422 C 4.9491 21.2031 4.3867 20.8516 3.7070 20.8516 C 2.6288 20.8516 1.7851 21.6250 1.7851 22.7031 C 1.7851 23.1719 1.9257 23.6172 2.2070 23.9688 L 7.1288 30.0390 C 7.8788 30.9766 8.4882 31.3047 9.4257 31.3047 Z M 25.0117 35.6875 C 25.0117 36.7422 26.1835 37.2344 27.2148 36.6250 L 39.7773 29.1953 C 40.6913 28.6563 40.6679 27.3672 39.7773 26.8281 L 27.2148 19.3984 C 26.2538 18.8359 25.0117 19.2578 25.0117 20.3359 Z"
  }));
}

var _default = Memories;
exports["default"] = _default;