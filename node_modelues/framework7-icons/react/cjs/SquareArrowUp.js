"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SquareArrowUp(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 28.0117 36.0975 C 29.0195 36.0975 29.8633 35.2538 29.8633 34.2694 L 29.8633 10.1991 L 29.7226 6.7069 L 31.3164 8.3710 L 34.8555 12.1444 C 35.1836 12.5194 35.6758 12.7069 36.1211 12.7069 C 37.1055 12.7069 37.8320 12.0038 37.8320 11.0663 C 37.8320 10.5507 37.6445 10.1757 37.2930 9.8241 L 29.3711 2.1835 C 28.9023 1.7146 28.4805 1.5509 28.0117 1.5509 C 27.5195 1.5509 27.1211 1.7146 26.6523 2.1835 L 18.7305 9.8241 C 18.3789 10.1757 18.1679 10.5507 18.1679 11.0663 C 18.1679 12.0038 18.8711 12.7069 19.8555 12.7069 C 20.3242 12.7069 20.8164 12.5194 21.1445 12.1444 L 24.7070 8.3710 L 26.3008 6.6835 L 26.1367 10.1991 L 26.1367 34.2694 C 26.1367 35.2538 27.0039 36.0975 28.0117 36.0975 Z M 14.5586 54.4491 L 41.4414 54.4491 C 46.3633 54.4491 48.8008 52.0116 48.8008 47.1835 L 48.8008 24.0741 C 48.8008 19.2460 46.3633 16.8085 41.4414 16.8085 L 34.9258 16.8085 L 34.9258 20.5819 L 41.3945 20.5819 C 43.6914 20.5819 45.0274 21.8241 45.0274 24.2616 L 45.0274 46.9960 C 45.0274 49.4335 43.6914 50.6757 41.3945 50.6757 L 14.6289 50.6757 C 12.2852 50.6757 10.9726 49.4335 10.9726 46.9960 L 10.9726 24.2616 C 10.9726 21.8241 12.2852 20.5819 14.6289 20.5819 L 21.0976 20.5819 L 21.0976 16.8085 L 14.5586 16.8085 C 9.6836 16.8085 7.1992 19.2226 7.1992 24.0741 L 7.1992 47.1835 C 7.1992 52.0350 9.6836 54.4491 14.5586 54.4491 Z"
  }));
}

var _default = SquareArrowUp;
exports["default"] = _default;