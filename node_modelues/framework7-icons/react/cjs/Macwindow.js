"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Macwindow(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.7148 49.5742 L 48.2852 49.5742 C 53.1836 49.5742 55.6446 47.1367 55.6446 42.3086 L 55.6446 13.6914 C 55.6446 8.8633 53.1836 6.4258 48.2852 6.4258 L 7.7148 6.4258 C 2.8398 6.4258 .3554 8.8398 .3554 13.6914 L .3554 42.3086 C .3554 47.1602 2.8398 49.5742 7.7148 49.5742 Z M 4.1288 13.8789 C 4.1288 11.4414 5.4413 10.1992 7.7851 10.1992 L 48.2147 10.1992 C 50.5350 10.1992 51.8708 11.4414 51.8708 13.8789 L 51.8708 21.1914 L 4.1288 21.1914 Z M 11.7929 15.6836 C 11.7929 14.5586 10.8554 13.5742 9.7070 13.5742 C 8.5351 13.5742 7.5976 14.5586 7.5976 15.6836 C 7.5976 16.7852 8.5351 17.7696 9.7070 17.7696 C 10.8554 17.7696 11.7929 16.7852 11.7929 15.6836 Z M 18.7070 15.6836 C 18.7070 14.5586 17.7695 13.5742 16.6210 13.5742 C 15.4726 13.5742 14.5351 14.5586 14.5351 15.6836 C 14.5351 16.7852 15.4726 17.7696 16.6210 17.7696 C 17.7695 17.7696 18.7070 16.7852 18.7070 15.6836 Z M 25.6210 15.6836 C 25.6210 14.5586 24.6835 13.5742 23.5351 13.5742 C 22.3866 13.5742 21.4492 14.5586 21.4492 15.6836 C 21.4492 16.7852 22.3866 17.7696 23.5351 17.7696 C 24.6835 17.7696 25.6210 16.7852 25.6210 15.6836 Z M 7.7851 45.8008 C 5.4413 45.8008 4.1288 44.5586 4.1288 42.1211 L 4.1288 24.6133 L 51.8708 24.6133 L 51.8708 42.1211 C 51.8708 44.5586 50.5350 45.8008 48.2147 45.8008 Z"
  }));
}

var _default = Macwindow;
exports["default"] = _default;