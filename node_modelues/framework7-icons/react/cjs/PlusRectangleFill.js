"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PlusRectangleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.7148 49.5742 L 48.2852 49.5742 C 53.1836 49.5742 55.6446 47.1367 55.6446 42.3086 L 55.6446 13.6914 C 55.6446 8.8633 53.1836 6.4258 48.2852 6.4258 L 7.7148 6.4258 C 2.8398 6.4258 .3554 8.8398 .3554 13.6914 L .3554 42.3086 C .3554 47.1602 2.8398 49.5742 7.7148 49.5742 Z M 27.9648 40.2461 C 26.5819 40.2461 25.8319 39.2383 25.8319 37.7852 L 25.8319 30.3789 L 18.0741 30.3789 C 16.6444 30.3789 15.6132 29.6055 15.6132 28.2696 C 15.6132 26.8398 16.5976 26.0664 18.0741 26.0664 L 25.8319 26.0664 L 25.8319 18.1680 C 25.8319 16.6914 26.5819 15.7071 27.9648 15.7071 C 29.3476 15.7071 30.1444 16.6445 30.1444 18.1680 L 30.1444 26.0664 L 37.9257 26.0664 C 39.4257 26.0664 40.3632 26.8398 40.3632 28.2696 C 40.3632 29.6055 39.3554 30.3789 37.9257 30.3789 L 30.1444 30.3789 L 30.1444 37.7852 C 30.1444 39.2852 29.3476 40.2461 27.9648 40.2461 Z"
  }));
}

var _default = PlusRectangleFill;
exports["default"] = _default;