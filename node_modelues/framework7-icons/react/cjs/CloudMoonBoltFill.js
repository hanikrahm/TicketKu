"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CloudMoonBoltFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 45.3923 26.9668 C 52.0380 25.7953 56 20.4061 56 16.9128 C 56 16.0820 55.6165 15.4643 54.9351 15.4643 C 53.9126 15.4643 52.3578 16.8276 49.4180 16.8276 C 44.2206 16.8276 40.9191 13.6963 40.9191 8.9462 C 40.9191 6.1132 42.4315 4.0683 42.4315 2.9393 C 42.4315 2.2577 41.9839 1.8317 41.1320 1.8530 C 37.1914 2.0234 32.2070 6.4114 31.0781 12.0775 C 31.7384 12.6952 32.3774 13.5259 32.8887 14.6549 C 40.0671 15.2087 45.2645 20.6192 45.3923 26.9668 Z M 8.8399 37.8942 L 31.8875 37.8942 C 37.9157 37.8942 42.6017 33.3145 42.6017 27.4142 C 42.6017 21.5351 37.8305 17.1045 31.4615 17.0832 C 28.9693 12.3118 24.5387 9.5427 19.3838 9.5427 C 12.4611 9.5427 6.5820 14.9318 5.9430 21.9398 C 2.3218 23.0048 0 26.0935 0 29.8211 C 0 34.6139 3.5999 37.8942 8.8399 37.8942 Z M 26.6688 45.5839 L 22.4299 45.5839 L 24.3896 41.8775 C 24.6239 41.4089 24.4322 41.0680 23.9636 41.0680 L 19.5117 41.0680 C 18.9365 41.0680 18.7448 41.3024 18.5531 41.7071 L 15.8266 47.9056 C 15.6136 48.4169 15.8266 48.7364 16.3804 48.7364 L 19.9377 48.7364 L 17.2112 55.3397 C 17.0834 55.6166 17.1473 55.8509 17.3390 55.9148 C 17.5520 56 17.7650 55.9361 17.9780 55.7018 L 26.9883 46.6063 C 27.4356 46.1590 27.2652 45.5839 26.6688 45.5839 Z"
  }));
}

var _default = CloudMoonBoltFill;
exports["default"] = _default;