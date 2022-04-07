"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowDownSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 28.5976 41.1602 C 28.0351 41.1602 27.6132 40.9727 27.0976 40.4570 L 18.4492 31.8086 C 18.1210 31.4571 17.9335 31.0118 17.9335 30.4961 C 17.9335 29.4414 18.7304 28.5977 19.7851 28.5977 C 20.3241 28.5977 20.8398 28.8555 21.1444 29.1602 L 24.3085 32.3711 L 26.8632 35.4180 L 26.6757 30.0274 L 26.6757 16.7383 C 26.6757 15.6133 27.4726 14.8398 28.5976 14.8398 C 29.7226 14.8398 30.5195 15.6133 30.5195 16.7383 L 30.5195 30.0274 L 30.3085 35.4649 L 32.9101 32.3711 L 36.0507 29.1602 C 36.3788 28.8320 36.8476 28.5977 37.4101 28.5977 C 38.4648 28.5977 39.2851 29.4414 39.2851 30.4961 C 39.2851 31.0118 39.0507 31.4571 38.7460 31.8086 L 30.1210 40.4570 C 29.6288 40.9492 29.1601 41.1602 28.5976 41.1602 Z"
  }));
}

var _default = ArrowDownSquareFill;
exports["default"] = _default;