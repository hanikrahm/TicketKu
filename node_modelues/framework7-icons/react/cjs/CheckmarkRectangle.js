"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CheckmarkRectangle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.7148 49.5742 L 48.2852 49.5742 C 53.1836 49.5742 55.6446 47.1367 55.6446 42.3086 L 55.6446 13.6914 C 55.6446 8.8633 53.1836 6.4258 48.2852 6.4258 L 7.7148 6.4258 C 2.8398 6.4258 .3554 8.8398 .3554 13.6914 L .3554 42.3086 C .3554 47.1602 2.8398 49.5742 7.7148 49.5742 Z M 7.7851 45.8008 C 5.4413 45.8008 4.1288 44.5586 4.1288 42.1211 L 4.1288 13.8789 C 4.1288 11.4414 5.4413 10.1992 7.7851 10.1992 L 48.2147 10.1992 C 50.5350 10.1992 51.8708 11.4414 51.8708 13.8789 L 51.8708 42.1211 C 51.8708 44.5586 50.5350 45.8008 48.2147 45.8008 Z M 23.7929 38.6992 C 24.4257 38.6992 24.9648 38.4180 25.2929 37.9727 L 37.9960 20.1836 C 38.2304 19.8320 38.3944 19.4102 38.3944 19.0352 C 38.3944 18.0508 37.6210 17.2305 36.5663 17.2305 C 35.8163 17.2305 35.4179 17.5118 34.9726 18.1445 L 23.6992 34.0118 L 17.8866 27.5664 C 17.5351 27.1445 17.0429 26.9571 16.5039 26.9571 C 15.3788 26.9571 14.6054 27.7305 14.6054 28.7149 C 14.6054 29.2071 14.7929 29.6055 15.0976 29.9571 L 22.3866 38.0664 C 22.7148 38.4649 23.1132 38.6992 23.7929 38.6992 Z"
  }));
}

var _default = CheckmarkRectangle;
exports["default"] = _default;