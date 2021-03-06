"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TrayArrowUpFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 28.0117 35.1837 C 29.0195 35.1837 29.8632 34.3400 29.8632 33.3556 L 29.8632 9.4962 L 29.7226 5.9805 L 31.2929 7.6446 L 34.8554 11.4181 C 35.1835 11.7931 35.6757 11.9805 36.1210 11.9805 C 37.1054 11.9805 37.8319 11.3009 37.8319 10.3400 C 37.8319 9.8478 37.6210 9.4727 37.2695 9.1212 L 29.3710 1.4572 C 28.8788 .9882 28.4804 .8476 28.0117 .8476 C 27.5195 .8476 27.1210 .9882 26.6523 1.4572 L 18.7304 9.1212 C 18.3788 9.4727 18.1679 9.8478 18.1679 10.3400 C 18.1679 11.3009 18.8710 11.9805 19.8554 11.9805 C 20.3007 11.9805 20.8163 11.7931 21.1444 11.4181 L 24.7070 7.6446 L 26.2773 5.9805 L 26.1366 9.4962 L 26.1366 33.3556 C 26.1366 34.3400 27.0039 35.1837 28.0117 35.1837 Z M 7.7148 55.1524 L 48.2852 55.1524 C 53.1836 55.1524 55.6446 52.7149 55.6446 47.8868 L 55.6446 34.9493 C 55.6446 32.8400 55.3398 31.8321 54.3088 30.4962 L 46.4334 20.4415 C 43.5976 16.8087 42.4724 16.0821 38.3241 16.0821 L 34.1757 16.0821 L 34.1757 19.3634 L 38.5819 19.3634 C 40.2929 19.3634 41.4179 19.6681 42.7537 21.3790 L 50.8398 31.8790 C 51.7537 33.0743 51.4489 33.5431 50.1601 33.5431 L 35.6992 33.5431 C 34.4101 33.5431 33.7773 34.5274 33.7773 35.5821 L 33.7773 35.6524 C 33.7773 38.5352 31.5273 41.5821 27.9882 41.5821 C 24.4726 41.5821 22.2226 38.5352 22.2226 35.6524 L 22.2226 35.5821 C 22.2226 34.5274 21.5898 33.5431 20.3007 33.5431 L 5.8632 33.5431 C 4.5273 33.5431 4.3163 32.9805 5.1601 31.8790 L 13.1992 21.4493 C 14.5819 19.6915 15.7070 19.3634 17.4179 19.3634 L 21.8476 19.3634 L 21.8476 16.0821 L 17.6757 16.0821 C 13.5273 16.0821 12.4257 16.8087 9.5195 20.5118 L 1.6913 30.4962 C .6601 31.8321 .3554 32.8400 .3554 34.9493 L .3554 47.8868 C .3554 52.7384 2.8398 55.1524 7.7148 55.1524 Z"
  }));
}

var _default = TrayArrowUpFill;
exports["default"] = _default;