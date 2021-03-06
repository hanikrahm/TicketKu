"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function At(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 3.6953 28.1172 C 3.6953 43.5625 14.1484 52.9375 28.5390 52.9375 C 32.4062 52.9375 36.1328 52.3984 38.4296 51.6484 C 40.0468 51.1328 40.5625 50.2890 40.5625 49.4219 C 40.5625 48.5547 39.8828 47.8984 38.9921 47.8984 C 38.7343 47.8984 38.3593 47.9453 37.8906 48.0625 C 35.0312 48.7656 32.5937 49.2344 29.2890 49.2344 C 16.4452 49.2344 7.7265 41.5000 7.7265 28.2578 C 7.7265 15.5781 15.9765 6.7422 28.3984 6.7422 C 39.3906 6.7422 48.5780 13.5156 48.5780 25.6797 C 48.5780 32.7812 46.1640 37.5625 42.3203 37.5625 C 39.7421 37.5625 38.2656 36.0625 38.2656 33.5078 L 38.2656 17.6172 C 38.2656 16.3516 37.5625 15.5781 36.3906 15.5781 C 35.2187 15.5781 34.4687 16.3516 34.4687 17.6172 L 34.4687 20.2890 L 34.2578 20.2890 C 33.0625 17.4063 30.1328 15.5781 26.6640 15.5781 C 20.5937 15.5781 16.3281 20.7578 16.3281 28.1875 C 16.3281 35.6875 20.5703 40.9140 26.7578 40.9140 C 30.3671 40.9140 33.1796 38.9453 34.5390 35.6172 L 34.7499 35.6172 C 35.2187 38.9219 37.9843 40.9375 41.7109 40.9375 C 48.2497 40.9375 52.3047 34.5156 52.3047 25.5156 C 52.3047 11.8984 42.2734 3.0625 28.4452 3.0625 C 13.8906 3.0625 3.6953 13.0234 3.6953 28.1172 Z M 27.3906 37.2109 C 23.1718 37.2109 20.5234 33.7187 20.5234 28.1641 C 20.5234 22.7031 23.1952 19.2109 27.4140 19.2109 C 31.7030 19.2109 34.4218 22.6328 34.4218 28.0703 C 34.4218 33.6250 31.6562 37.2109 27.3906 37.2109 Z"
  }));
}

var _default = At;
exports["default"] = _default;