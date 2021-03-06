"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ExclamationmarkShield(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9883 51.6719 C 28.3633 51.6719 28.9726 51.5313 29.5821 51.2031 C 42.8945 43.7266 47.4883 40.5625 47.4883 32.0078 L 47.4883 14.0781 C 47.4883 11.6172 46.4101 10.8438 44.4414 10.0000 C 41.6758 8.8516 32.7226 5.6406 29.9570 4.6797 C 29.3242 4.4687 28.6680 4.3281 27.9883 4.3281 C 27.3321 4.3281 26.6758 4.5156 26.0430 4.6797 C 23.2774 5.5234 14.3242 8.8750 11.5586 10.0000 C 9.5899 10.8203 8.5117 11.6172 8.5117 14.0781 L 8.5117 32.0078 C 8.5117 40.5625 13.1289 43.7031 26.4180 51.2031 C 27.0274 51.5313 27.6133 51.6719 27.9883 51.6719 Z M 27.9883 47.4063 C 27.6367 47.4063 27.2383 47.2656 26.5352 46.8438 C 15.7070 40.2813 12.2383 38.3594 12.2383 31.1406 L 12.2383 14.7813 C 12.2383 13.9844 12.4023 13.6797 13.0352 13.4219 C 16.5977 12.0156 23.4648 9.5781 27.0742 8.2891 C 27.4258 8.1484 27.7305 8.0781 27.9883 8.0781 C 28.2695 8.0781 28.5508 8.1484 28.9258 8.2891 C 32.5352 9.5781 39.3321 12.1797 42.9648 13.4219 C 43.5977 13.6562 43.7617 13.9844 43.7617 14.7813 L 43.7617 31.1406 C 43.7617 38.3594 40.2695 40.2578 29.4648 46.8438 C 28.7617 47.2656 28.3633 47.4063 27.9883 47.4063 Z M 27.9883 31.5860 C 29.1133 31.5860 29.7695 30.9531 29.7930 29.7344 L 30.1211 17.3594 C 30.1445 16.1640 29.2070 15.2734 27.9648 15.2734 C 26.7226 15.2734 25.8086 16.1406 25.8321 17.3360 L 26.1602 29.7344 C 26.1836 30.9297 26.8399 31.5860 27.9883 31.5860 Z M 27.9883 39.2031 C 29.3477 39.2031 30.5195 38.125 30.5195 36.7656 C 30.5195 35.4062 29.3711 34.3281 27.9883 34.3281 C 26.6289 34.3281 25.4805 35.4297 25.4805 36.7656 C 25.4805 38.1016 26.6523 39.2031 27.9883 39.2031 Z"
  }));
}

var _default = ExclamationmarkShield;
exports["default"] = _default;