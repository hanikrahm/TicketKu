"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Photo(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.7148 49.5742 L 48.2852 49.5742 C 53.1836 49.5742 55.6446 47.1367 55.6446 42.3086 L 55.6446 13.6914 C 55.6446 8.8633 53.1836 6.4258 48.2852 6.4258 L 7.7148 6.4258 C 2.8398 6.4258 .3554 8.8398 .3554 13.6914 L .3554 42.3086 C .3554 47.1602 2.8398 49.5742 7.7148 49.5742 Z M 39.2851 27.9414 C 38.2304 27.0039 37.0351 26.5118 35.7695 26.5118 C 34.4570 26.5118 33.3085 26.9571 32.2304 27.9180 L 21.6366 37.3867 L 17.3007 33.4492 C 16.3163 32.5820 15.2617 32.1133 14.1366 32.1133 C 13.1054 32.1133 12.0976 32.5586 11.1366 33.4258 L 4.1288 39.7305 L 4.1288 13.8789 C 4.1288 11.4414 5.4413 10.1992 7.7851 10.1992 L 48.2147 10.1992 C 50.5350 10.1992 51.8708 11.4414 51.8708 13.8789 L 51.8708 39.7539 Z M 17.8163 28.1992 C 20.8398 28.1992 23.3241 25.7149 23.3241 22.6680 C 23.3241 19.6445 20.8398 17.1367 17.8163 17.1367 C 14.7695 17.1367 12.2851 19.6445 12.2851 22.6680 C 12.2851 25.7149 14.7695 28.1992 17.8163 28.1992 Z"
  }));
}

var _default = Photo;
exports["default"] = _default;