"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Camera(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.8086 50.3477 L 48.1914 50.3477 C 53.0663 50.3477 55.5508 47.9102 55.5508 43.0820 L 55.5508 18.5430 C 55.5508 13.7149 53.0663 11.3008 48.1914 11.3008 L 42.7069 11.3008 C 40.8789 11.3008 40.3164 10.9258 39.2617 9.7539 L 37.3633 7.6445 C 36.2149 6.3555 35.0196 5.6523 32.5820 5.6523 L 23.2539 5.6523 C 20.8398 5.6523 19.6445 6.3555 18.4727 7.6445 L 16.5742 9.7539 C 15.5430 10.9023 14.9571 11.3008 13.1289 11.3008 L 7.8086 11.3008 C 2.9336 11.3008 .4492 13.7149 .4492 18.5430 L .4492 43.0820 C .4492 47.9102 2.9336 50.3477 7.8086 50.3477 Z M 7.8789 46.5742 C 5.5586 46.5742 4.2227 45.3320 4.2227 42.8945 L 4.2227 18.7539 C 4.2227 16.3164 5.5586 15.0742 7.8789 15.0742 L 14.0664 15.0742 C 16.1758 15.0742 17.3008 14.6758 18.4727 13.3633 L 20.3242 11.3008 C 21.6602 9.8008 22.3398 9.4258 24.4258 9.4258 L 31.4102 9.4258 C 33.4961 9.4258 34.1758 9.8008 35.5117 11.3008 L 37.3633 13.3633 C 38.5352 14.6758 39.6602 15.0742 41.7696 15.0742 L 48.1213 15.0742 C 50.4416 15.0742 51.7775 16.3164 51.7775 18.7539 L 51.7775 42.8945 C 51.7775 45.3320 50.4416 46.5742 48.1213 46.5742 Z M 27.9883 42.8477 C 35.0898 42.8477 40.7852 37.1523 40.7852 30.0273 C 40.7852 22.9023 35.1133 17.2071 27.9883 17.2071 C 20.9102 17.2071 15.2149 22.9023 15.2149 30.0273 C 15.2149 37.1523 20.9102 42.8477 27.9883 42.8477 Z M 44.8400 24.3086 C 46.4336 24.3086 47.7460 23.0195 47.7460 21.4258 C 47.7460 19.8086 46.4336 18.5195 44.8400 18.5195 C 43.2460 18.5195 41.9336 19.8086 41.9336 21.4258 C 41.9336 23.0195 43.2460 24.3086 44.8400 24.3086 Z M 27.9883 39.2852 C 22.9024 39.2852 18.7539 35.1602 18.7539 30.0273 C 18.7539 24.8945 22.8789 20.7695 27.9883 20.7695 C 33.0977 20.7695 37.2461 24.8945 37.2461 30.0273 C 37.2461 35.1602 33.0977 39.2852 27.9883 39.2852 Z"
  }));
}

var _default = Camera;
exports["default"] = _default;