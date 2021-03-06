"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Eject(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 9.3320 32.7344 L 46.7148 32.7344 C 48.8478 32.7344 49.9960 31.6328 50.0430 29.7578 C 50.0665 28.8672 49.5976 27.9532 48.8713 27.1563 L 31.2695 7.8203 C 30.4024 6.8828 29.3242 6.1797 28.0117 6.1797 C 26.6992 6.1797 25.6680 6.8359 24.7304 7.8203 L 7.1524 27.1563 C 6.4258 27.9532 6.0039 28.8672 6.0039 29.7578 C 6.0039 31.6328 7.1758 32.7344 9.3320 32.7344 Z M 11.8164 29.1953 C 11.3945 29.1953 11.1602 28.9844 11.1602 28.6563 C 11.1602 28.4922 11.2304 28.3281 11.3711 28.2110 L 27.2383 10.9375 C 27.4961 10.6797 27.7070 10.4922 28.0117 10.4922 C 28.3398 10.4922 28.5508 10.6797 28.8086 10.9375 L 44.6524 28.2110 C 44.7929 28.3516 44.8633 28.4922 44.8633 28.6563 C 44.8633 28.9844 44.6289 29.1953 44.2070 29.1953 Z M 10.4570 49.8203 L 45.5429 49.8203 C 48.7537 49.8203 50.5820 48.1328 50.5820 44.9688 L 50.5820 42.2500 C 50.5820 39.0859 48.7537 37.4219 45.5429 37.4219 L 10.4570 37.4219 C 7.2226 37.4219 5.4180 39.0625 5.4180 42.2500 L 5.4180 44.9688 C 5.4180 48.1563 7.2226 49.8203 10.4570 49.8203 Z M 10.7617 46.3750 C 9.7304 46.3750 9.1914 45.7656 9.1914 44.7344 L 9.1914 42.4844 C 9.1914 41.4766 9.7304 40.8672 10.7617 40.8672 L 45.2383 40.8672 C 46.2695 40.8672 46.8086 41.4766 46.8086 42.4844 L 46.8086 44.7344 C 46.8086 45.7656 46.2695 46.3750 45.2383 46.3750 Z"
  }));
}

var _default = Eject;
exports["default"] = _default;