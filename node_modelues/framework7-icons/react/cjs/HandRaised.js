"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function HandRaised(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 25.1289 53.5117 C 33.3789 53.5117 39.1680 49.0352 42.2851 40.2461 L 46.4102 28.6445 C 47.4414 25.7149 46.5039 23.3008 44.0664 22.4102 C 41.8867 21.6133 39.7305 22.5508 38.6992 24.9649 L 37.1758 28.7149 C 37.1289 28.8086 37.0586 28.8789 36.9649 28.8789 C 36.8476 28.8789 36.8008 28.7852 36.8008 28.6680 L 36.8008 9.8711 C 36.8008 7.1289 35.0898 5.4180 32.4649 5.4180 C 31.5039 5.4180 30.6367 5.7461 29.9805 6.3555 C 29.6758 3.9649 28.1289 2.4883 25.8086 2.4883 C 23.5351 2.4883 21.9414 4.0117 21.5898 6.3086 C 21.0039 5.7227 20.1602 5.4180 19.3164 5.4180 C 16.8789 5.4180 15.2617 7.1055 15.2617 9.7071 L 15.2617 12.3086 C 14.6289 11.6524 13.6914 11.3008 12.6836 11.3008 C 10.2461 11.3008 8.5586 13.1055 8.5586 15.7305 L 8.5586 35.8633 C 8.5586 46.8320 15.2149 53.5117 25.1289 53.5117 Z M 25.0117 50.2539 C 16.7149 50.2539 11.6524 44.9336 11.6524 35.4883 L 11.6524 16.0586 C 11.6524 15.0742 12.2851 14.3711 13.2695 14.3711 C 14.2305 14.3711 14.9336 15.0742 14.9336 16.0586 L 14.9336 28.0352 C 14.9336 28.9024 15.6367 29.4883 16.3867 29.4883 C 17.1836 29.4883 17.9102 28.9024 17.9102 28.0352 L 17.9102 10.1289 C 17.9102 9.1211 18.5430 8.4414 19.5039 8.4414 C 20.4883 8.4414 21.1680 9.1211 21.1680 10.1289 L 21.1680 26.8398 C 21.1680 27.7071 21.8711 28.2930 22.6445 28.2930 C 23.4414 28.2930 24.1680 27.7071 24.1680 26.8398 L 24.1680 7.2227 C 24.1680 6.2383 24.8242 5.5117 25.8086 5.5117 C 26.7461 5.5117 27.4258 6.2383 27.4258 7.2227 L 27.4258 26.8398 C 27.4258 27.6602 28.0820 28.2930 28.9024 28.2930 C 29.6992 28.2930 30.4024 27.6602 30.4024 26.8398 L 30.4024 10.1289 C 30.4024 9.1211 31.0820 8.4414 32.0430 8.4414 C 33.0273 8.4414 33.6836 9.1211 33.6836 10.1289 L 33.6836 33.1914 C 33.6836 34.2695 34.3633 35.0430 35.3476 35.0430 C 36.1914 35.0430 36.8945 34.6680 37.4336 33.4961 L 40.6211 26.3711 C 41.0430 25.3633 41.8867 24.8476 42.7539 25.1758 C 43.6914 25.5508 44.0195 26.4414 43.5742 27.6602 L 39.4258 39.2383 C 36.5664 47.2305 31.5508 50.2539 25.0117 50.2539 Z"
  }));
}

var _default = HandRaised;
exports["default"] = _default;