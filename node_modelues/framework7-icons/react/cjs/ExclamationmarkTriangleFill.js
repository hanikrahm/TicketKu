"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ExclamationmarkTriangleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 9.5899 50.2070 L 46.4102 50.2070 C 49.9257 50.2070 52.1289 47.6758 52.1289 44.4883 C 52.1289 43.5273 51.8947 42.5664 51.3791 41.6758 L 32.9336 8.6758 C 31.8789 6.7773 29.9570 5.7930 28.0117 5.7930 C 26.0899 5.7930 24.1211 6.7773 23.0664 8.6758 L 4.6446 41.6992 C 4.1289 42.5898 3.8711 43.5273 3.8711 44.4883 C 3.8711 47.6758 6.0977 50.2070 9.5899 50.2070 Z M 28.0117 34.1523 C 26.7695 34.1523 26.0899 33.4492 26.0430 32.1836 L 25.7149 20.6055 C 25.6680 19.3399 26.6524 18.4024 27.9883 18.4024 C 29.3008 18.4024 30.3320 19.3633 30.2852 20.6289 L 29.9336 32.1836 C 29.8868 33.4726 29.2070 34.1523 28.0117 34.1523 Z M 28.0117 42.8008 C 26.6524 42.8008 25.3868 41.7227 25.3868 40.2695 C 25.3868 38.8164 26.6289 37.7383 28.0117 37.7383 C 29.3946 37.7383 30.6368 38.7930 30.6368 40.2695 C 30.6368 41.7461 29.3711 42.8008 28.0117 42.8008 Z"
  }));
}

var _default = ExclamationmarkTriangleFill;
exports["default"] = _default;