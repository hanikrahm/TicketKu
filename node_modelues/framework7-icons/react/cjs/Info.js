"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Info(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 24.3320 13.2461 C 24.3320 15.1211 25.8320 16.6211 27.7070 16.6211 C 29.6055 16.6211 31.0820 15.1211 31.0586 13.2461 C 31.0586 11.3477 29.6055 9.8477 27.7070 9.8477 C 25.8320 9.8477 24.3320 11.3477 24.3320 13.2461 Z M 18.5195 44.2305 C 18.5195 45.3789 19.3399 46.1523 20.5820 46.1523 L 35.4179 46.1523 C 36.6601 46.1523 37.4805 45.3789 37.4805 44.2305 C 37.4805 43.1055 36.6601 42.3320 35.4179 42.3320 L 30.7070 42.3320 L 30.7070 24.4492 C 30.7070 23.1836 29.8867 22.3399 28.6680 22.3399 L 21.2383 22.3399 C 20.0195 22.3399 19.1992 23.0899 19.1992 24.2148 C 19.1992 25.3867 20.0195 26.1602 21.2383 26.1602 L 26.3711 26.1602 L 26.3711 42.3320 L 20.5820 42.3320 C 19.3399 42.3320 18.5195 43.1055 18.5195 44.2305 Z"
  }));
}

var _default = Info;
exports["default"] = _default;