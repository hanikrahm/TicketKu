"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TrayArrowDown(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 28.0117 31.0938 C 28.4804 31.0938 28.8788 30.9298 29.3710 30.4610 L 37.2695 22.8204 C 37.6210 22.4688 37.8319 22.0938 37.8319 21.5782 C 37.8319 20.6407 37.1054 19.9376 36.1210 19.9376 C 35.6757 19.9376 35.1835 20.1251 34.8554 20.5001 L 31.2929 24.2970 L 29.7226 25.9376 L 29.8632 22.4454 L 29.8632 3.9063 C 29.8632 2.9219 29.0195 2.0780 28.0117 2.0780 C 27.0039 2.0780 26.1366 2.9219 26.1366 3.9063 L 26.1366 22.4454 L 26.2773 25.9610 L 24.7070 24.2970 L 21.1444 20.5001 C 20.8163 20.1251 20.3007 19.9376 19.8554 19.9376 C 18.8710 19.9376 18.1679 20.6407 18.1679 21.5782 C 18.1679 22.0938 18.3788 22.4688 18.7304 22.8204 L 26.6523 30.4610 C 27.1210 30.9298 27.5195 31.0938 28.0117 31.0938 Z M 7.7148 53.9220 L 48.2852 53.9220 C 53.1836 53.9220 55.6446 51.4845 55.6446 46.6563 L 55.6446 32.7813 C 55.6446 30.6719 55.3398 29.6173 54.3088 28.3282 L 46.1992 18.3204 C 43.4569 14.9454 41.7695 12.9766 37.6210 12.9766 L 34.1757 12.9766 L 34.1757 16.2579 L 37.8788 16.2579 C 39.5898 16.2579 41.3710 17.7813 42.5430 19.2344 L 50.8398 29.7110 C 51.7772 30.9063 51.4489 31.3751 50.1601 31.3751 L 35.2304 31.3751 C 34.0351 31.3751 33.4492 32.2892 33.4492 33.2735 L 33.4492 33.3438 C 33.4492 36.0626 31.3163 38.9454 27.9882 38.9454 C 24.6835 38.9454 22.5507 36.0626 22.5507 33.3438 L 22.5507 33.2735 C 22.5507 32.2892 21.9648 31.3751 20.7695 31.3751 L 5.8632 31.3751 C 4.5273 31.3751 4.2695 30.8360 5.1601 29.7110 L 13.4570 19.2344 C 14.6288 17.7813 16.4101 16.2579 18.1210 16.2579 L 21.8476 16.2579 L 21.8476 12.9766 L 18.3788 12.9766 C 14.2304 12.9766 12.5429 14.9454 9.8007 18.3204 L 1.6913 28.3282 C .6601 29.6173 .3554 30.6719 .3554 32.7813 L .3554 46.6563 C .3554 51.5079 2.8398 53.9220 7.7148 53.9220 Z M 7.7851 50.1485 C 5.4413 50.1485 4.1288 48.9063 4.1288 46.4688 L 4.1288 34.7970 L 18.9882 34.7970 C 19.5741 39.1797 23.2304 42.4141 27.9882 42.4141 C 32.7460 42.4141 36.4257 39.1563 36.9882 34.7970 L 51.8708 34.7970 L 51.8708 46.4688 C 51.8708 48.9063 50.5350 50.1485 48.2147 50.1485 Z"
  }));
}

var _default = TrayArrowDown;
exports["default"] = _default;