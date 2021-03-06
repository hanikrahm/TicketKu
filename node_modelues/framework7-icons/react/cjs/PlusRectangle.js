"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PlusRectangle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.7148 49.5742 L 48.2852 49.5742 C 53.1836 49.5742 55.6446 47.1367 55.6446 42.3086 L 55.6446 13.6914 C 55.6446 8.8633 53.1836 6.4258 48.2852 6.4258 L 7.7148 6.4258 C 2.8398 6.4258 .3554 8.8398 .3554 13.6914 L .3554 42.3086 C .3554 47.1602 2.8398 49.5742 7.7148 49.5742 Z M 7.7851 45.8008 C 5.4413 45.8008 4.1288 44.5586 4.1288 42.1211 L 4.1288 13.8789 C 4.1288 11.4414 5.4413 10.1992 7.7851 10.1992 L 48.2147 10.1992 C 50.5350 10.1992 51.8708 11.4414 51.8708 13.8789 L 51.8708 42.1211 C 51.8708 44.5586 50.5350 45.8008 48.2147 45.8008 Z M 27.9648 39.1914 C 29.2304 39.1914 29.9570 38.3242 29.9570 36.9649 L 29.9570 30.1445 L 37.1054 30.1445 C 38.4179 30.1445 39.3319 29.4414 39.3319 28.1992 C 39.3319 26.9336 38.4882 26.2071 37.1054 26.2071 L 29.9570 26.2071 L 29.9570 18.9414 C 29.9570 17.5820 29.2304 16.7149 27.9648 16.7149 C 26.7226 16.7149 26.0429 17.6289 26.0429 18.9414 L 26.0429 26.2071 L 18.8944 26.2071 C 17.5351 26.2071 16.6679 26.9336 16.6679 28.1992 C 16.6679 29.4414 17.5819 30.1445 18.8944 30.1445 L 26.0429 30.1445 L 26.0429 36.9649 C 26.0429 38.2774 26.7226 39.1914 27.9648 39.1914 Z"
  }));
}

var _default = PlusRectangle;
exports["default"] = _default;