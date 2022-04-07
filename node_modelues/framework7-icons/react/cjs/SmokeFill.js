"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SmokeFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.6562 35.6641 C 8.8281 31.5625 11.6406 29.0547 15.5078 28.2813 C 17.1250 23.2891 21.3203 20.8047 26.1484 20.8047 C 26.6875 20.8047 27.2031 20.8515 27.6719 20.9219 C 29.5703 18.1328 32.5000 16.7500 36.2500 16.7969 C 35.4766 14.7813 33.2735 13.0469 29.7578 13.0469 C 28.7266 13.0469 27.8828 13.2344 26.9922 13.5156 C 25.0703 10.7266 22.0235 8.9922 18.5547 8.9922 C 13.1641 8.9922 8.6875 13.2813 8.4062 18.6250 C 4.2813 19.4688 1.2578 23.0078 1.2578 27.2969 C 1.2578 31.1406 3.6015 34.4453 7.6562 35.6641 Z M 18.4610 47.0078 L 45.5780 47.0078 C 51.0625 47.0078 54.7422 43.1172 54.7422 38.2188 C 54.7422 33.9297 51.6951 30.3672 47.5935 29.5469 C 47.3127 24.2266 42.9297 19.8906 37.5156 19.8906 C 33.9766 19.8906 30.8828 21.6719 29.0078 24.4141 C 28.0937 24.1094 27.2266 23.9688 26.2656 23.9688 C 22.0703 23.9688 18.6250 27.0156 18.0156 31.0937 C 13.6562 31.2578 10.2110 34.7734 10.2110 39.0625 C 10.2110 43.4922 13.5156 47.0078 18.4610 47.0078 Z"
  }));
}

var _default = SmokeFill;
exports["default"] = _default;