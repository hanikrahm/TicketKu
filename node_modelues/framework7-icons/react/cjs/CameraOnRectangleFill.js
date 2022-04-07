"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CameraOnRectangleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 0 35.8805 C 0 39.9183 2.0581 41.9372 6.1547 41.9372 L 7.2524 41.9372 L 7.2524 25.9820 C 7.2524 20.7093 10.3297 17.7496 15.4064 17.7496 L 19.4442 17.7496 C 21.0515 17.7496 21.6395 17.3772 22.5020 16.3579 L 23.6780 14.9466 C 24.6972 13.7118 26.0497 13.0257 28.2843 13.0257 L 37.3789 13.0257 C 39.4567 13.0257 40.5350 13.5746 42.0247 14.9466 L 42.0247 13.9078 C 42.0247 10.4188 39.9665 8.3803 35.8892 8.3803 L 6.1547 8.3803 C 2.0581 8.3803 0 10.4188 0 14.4566 Z M 16.0728 53.0902 L 49.8453 53.0902 C 53.9222 53.0902 56 51.0517 56 47.0139 L 56 26.4916 C 56 22.4538 53.9222 20.4153 49.8453 20.4153 L 45.2586 20.4153 C 43.7299 20.4153 43.2595 20.1213 42.3775 19.1217 L 40.8091 17.3772 C 39.8293 16.2991 38.8297 15.7111 36.8105 15.7111 L 28.9899 15.7111 C 26.9710 15.7111 25.9713 16.2991 24.9913 17.3772 L 23.4036 19.1217 C 22.5411 20.1017 22.0511 20.4153 20.5222 20.4153 L 16.0728 20.4153 C 11.9958 20.4153 9.9181 22.4538 9.9181 26.4916 L 9.9181 47.0139 C 9.9181 51.0517 11.9958 53.0902 16.0728 53.0902 Z M 32.9689 46.7983 C 27.0298 46.7983 22.2667 42.0548 22.2667 36.0765 C 22.2667 30.1178 27.0298 25.3744 32.9689 25.3744 C 38.9080 25.3744 43.6513 30.1178 43.6513 36.0765 C 43.6513 42.0548 38.8883 46.7983 32.9689 46.7983 Z M 47.0425 31.2939 C 45.7094 31.2939 44.6119 30.2158 44.6119 28.8830 C 44.6119 27.5305 45.7094 26.4524 47.0425 26.4524 C 48.3753 26.4524 49.4728 27.5305 49.4728 28.8830 C 49.4728 30.2158 48.3753 31.2939 47.0425 31.2939 Z M 32.9689 43.8189 C 37.2420 43.8189 40.6915 40.3887 40.6915 36.0765 C 40.6915 31.7839 37.2420 28.3537 32.9689 28.3537 C 28.6958 28.3537 25.2265 31.7839 25.2265 36.0765 C 25.2265 40.3887 28.7155 43.8189 32.9689 43.8189 Z"
  }));
}

var _default = CameraOnRectangleFill;
exports["default"] = _default;