"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function RectangleSplit3x3Fill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 20.1601 18.6133 L 35.8398 18.6133 L 35.8398 6.4258 L 20.1601 6.4258 Z M 39.4960 18.6133 L 55.6446 18.6133 L 55.6446 13.6914 C 55.6446 8.8633 53.1836 6.4258 48.2852 6.4258 L 39.4960 6.4258 Z M 35.8398 33.7071 L 35.8398 22.2696 L 20.1601 22.2696 L 20.1601 33.7071 Z M 16.5039 18.6133 L 16.5039 6.4258 L 7.7148 6.4258 C 2.8398 6.4258 .3554 8.8398 .3554 13.6914 L .3554 18.6133 Z M 55.6446 22.2696 L 39.4960 22.2696 L 39.4960 33.7071 L 55.6446 33.7071 Z M 16.5039 33.7071 L 16.5039 22.2696 L .3554 22.2696 L .3554 33.7071 Z M 39.4960 49.5742 L 48.2852 49.5742 C 53.1836 49.5742 55.6446 47.1367 55.6446 42.3086 L 55.6446 37.3867 L 39.4960 37.3867 Z M 35.8398 37.3867 L 20.1601 37.3867 L 20.1601 49.5742 L 35.8398 49.5742 Z M 7.7148 49.5742 L 16.5039 49.5742 L 16.5039 37.3867 L .3554 37.3867 L .3554 42.3086 C .3554 47.1602 2.8398 49.5742 7.7148 49.5742 Z"
  }));
}

var _default = RectangleSplit3x3Fill;
exports["default"] = _default;