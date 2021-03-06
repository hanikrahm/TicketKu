"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ShieldSlashFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 48.6133 51.1445 C 49.3165 51.8477 50.4882 51.8477 51.1678 51.1445 C 51.8710 50.4414 51.8710 49.2930 51.1678 48.5898 L 7.4102 4.8555 C 6.7071 4.1523 5.5586 4.1523 4.8321 4.8555 C 4.1290 5.5352 4.1524 6.7070 4.8321 7.4102 Z M 16.1524 9.6602 L 46.3868 39.8945 C 47.7459 37.8321 48.3320 35.5352 48.3320 32.5352 L 48.3320 14.8633 C 48.3320 12.4492 47.2774 11.6758 45.3321 10.8555 C 42.5899 9.7305 33.8008 6.5899 31.0821 5.6055 C 30.4727 5.4180 29.8164 5.2774 29.1602 5.2774 C 28.5040 5.2774 27.8477 5.4180 27.2149 5.6055 C 25.1055 6.3789 20.0430 8.1836 16.1524 9.6602 Z M 39.5664 46.0820 L 9.9883 16.5039 L 9.9883 32.5352 C 9.9883 40.9492 14.5118 44.0195 27.4258 51.3086 C 28.1055 51.6602 28.7383 51.8008 29.1602 51.8008 C 29.5821 51.8008 30.1915 51.6602 30.8946 51.3086 C 34.3868 49.3164 37.2462 47.6289 39.5664 46.0820 Z"
  }));
}

var _default = ShieldSlashFill;
exports["default"] = _default;