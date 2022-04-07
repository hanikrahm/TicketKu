"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TimerFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M24,47.9063 C10.7969151,47.9063 0.0937,37.2030849 0.0937,24 C0.0937,10.7969151 10.7969151,0.0937 24,0.0937 C37.2030849,0.0937 47.9063,10.7969151 47.9063,24 C47.9063,37.2030849 37.2030849,47.9063 24,47.9063 Z M24,3.918708 C35.0905913,3.918708 44.081292,12.9094087 44.081292,24 C44.081292,35.0905913 35.0905913,44.081292 24,44.081292 C12.9094087,44.081292 3.918708,35.0905913 3.918708,24 C3.918708,18.3016473 6.29217276,13.157647 10.1044412,9.50266012 C10.2482352,9.36479862 10.434001,9.1958835 10.6617388,8.99591475 L10.6617388,8.99591475 L10.7539677,8.9245139 C11.1356161,8.66561285 11.6592714,8.7254004 11.9714466,9.08092628 C11.979901,9.09055473 11.9881552,9.10035723 11.9962036,9.11032749 L11.9962036,9.11032749 L12.0147397,9.13328865 C12.3364148,9.53177157 12.2870567,10.1129384 11.9027879,10.451466 C11.6853015,10.6430641 11.5084209,10.8046853 11.3721461,10.9363296 C7.86830167,14.3211159 5.831212,18.9917848 5.831212,24 C5.831212,34.0343445 13.9656555,42.168788 24,42.168788 C34.0343445,42.168788 42.168788,34.0343445 42.168788,24 C42.168788,13.9656555 34.0343445,5.831212 24,5.831212 L24,5.831212 L24,14.43748 C24,14.9656034 23.5718714,15.393732 23.043748,15.393732 C22.5156246,15.393732 22.087496,14.9656034 22.087496,14.43748 L22.087496,14.43748 L22.087496,4.87496 C22.087496,4.3468366 22.5156246,3.918708 23.043748,3.918708 C23.1018372,3.918708 23.1587166,3.92388757 23.2139496,3.93381006 C23.474722,3.92377273 23.7367695,3.918708 24,3.918708 Z M13.0312,14.4375 C12.2109,13.2656 13.4296,12.0469 14.6014,12.8672 L14.6014,12.8672 L26.9999,21.5156 C29.2265,23.0625 29.6014,25.6875 27.7499,27.6094 C25.8514,29.4609 23.2265,29.0625 21.6796,26.8359 L21.6796,26.8359 Z",
    transform: "translate(4 4)"
  }));
}

var _default = TimerFill;
exports["default"] = _default;