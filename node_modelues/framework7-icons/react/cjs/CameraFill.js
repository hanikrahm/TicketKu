"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CameraFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.8086 50.3477 L 48.1914 50.3477 C 53.0663 50.3477 55.5508 47.9102 55.5508 43.0820 L 55.5508 18.5430 C 55.5508 13.7149 53.0663 11.3008 48.1914 11.3008 L 42.7069 11.3008 C 40.8789 11.3008 40.3164 10.9258 39.2617 9.7539 L 37.3633 7.6445 C 36.2149 6.3555 35.0196 5.6523 32.5820 5.6523 L 23.2539 5.6523 C 20.8398 5.6523 19.6445 6.3555 18.4727 7.6445 L 16.5742 9.7539 C 15.5430 10.9023 14.9571 11.3008 13.1289 11.3008 L 7.8086 11.3008 C 2.9336 11.3008 .4492 13.7149 .4492 18.5430 L .4492 43.0820 C .4492 47.9102 2.9336 50.3477 7.8086 50.3477 Z M 27.9883 42.8477 C 20.9102 42.8477 15.2149 37.1523 15.2149 30.0273 C 15.2149 22.9023 20.9102 17.2071 27.9883 17.2071 C 35.1133 17.2071 40.7852 22.9023 40.7852 30.0273 C 40.7852 37.1523 35.0898 42.8477 27.9883 42.8477 Z M 44.8400 24.3086 C 43.2460 24.3086 41.9336 23.0195 41.9336 21.4258 C 41.9336 19.8086 43.2460 18.5195 44.8400 18.5195 C 46.4336 18.5195 47.7460 19.8086 47.7460 21.4258 C 47.7460 23.0195 46.4336 24.3086 44.8400 24.3086 Z M 27.9883 39.2852 C 33.0977 39.2852 37.2461 35.1602 37.2461 30.0273 C 37.2461 24.8945 33.0977 20.7695 27.9883 20.7695 C 22.8789 20.7695 18.7539 24.8945 18.7539 30.0273 C 18.7539 35.1602 22.9024 39.2852 27.9883 39.2852 Z"
  }));
}

var _default = CameraFill;
exports["default"] = _default;