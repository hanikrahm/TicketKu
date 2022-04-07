"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Waveform(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 24.5898 49.5742 C 25.5508 49.5742 26.2539 48.8477 26.2539 47.9336 L 26.2539 8.0664 C 26.2539 7.1524 25.5508 6.4258 24.5898 6.4258 C 23.6524 6.4258 22.9492 7.1524 22.9492 8.0664 L 22.9492 47.9336 C 22.9492 48.8477 23.6524 49.5742 24.5898 49.5742 Z M 38.2305 44.8867 C 39.1680 44.8867 39.8711 44.1367 39.8711 43.2227 L 39.8711 12.7773 C 39.8711 11.8633 39.1680 11.1133 38.2305 11.1133 C 37.2930 11.1133 36.5664 11.8633 36.5664 12.7773 L 36.5664 43.2227 C 36.5664 44.1367 37.2930 44.8867 38.2305 44.8867 Z M 17.7930 41.0898 C 18.7305 41.0898 19.4336 40.3633 19.4336 39.4492 L 19.4336 16.5508 C 19.4336 15.6367 18.7305 14.9102 17.7930 14.9102 C 16.8320 14.9102 16.1289 15.6367 16.1289 16.5508 L 16.1289 39.4492 C 16.1289 40.3633 16.8320 41.0898 17.7930 41.0898 Z M 31.4102 38.5586 C 32.3476 38.5586 33.0742 37.8320 33.0742 36.9180 L 33.0742 19.0820 C 33.0742 18.1680 32.3476 17.4414 31.4102 17.4414 C 30.4727 17.4414 29.7695 18.1680 29.7695 19.0820 L 29.7695 36.9180 C 29.7695 37.8320 30.4727 38.5586 31.4102 38.5586 Z M 45.0508 34.3633 C 45.9883 34.3633 46.6914 33.6133 46.6914 32.6992 L 46.6914 23.3008 C 46.6914 22.3867 45.9883 21.6367 45.0508 21.6367 C 44.0898 21.6367 43.3867 22.3867 43.3867 23.3008 L 43.3867 32.6992 C 43.3867 33.6133 44.0898 34.3633 45.0508 34.3633 Z M 10.9727 32.5117 C 11.9102 32.5117 12.6133 31.7851 12.6133 30.8711 L 12.6133 25.1289 C 12.6133 24.2149 11.9102 23.4883 10.9727 23.4883 C 10.0117 23.4883 9.3086 24.2149 9.3086 25.1289 L 9.3086 30.8711 C 9.3086 31.7851 10.0117 32.5117 10.9727 32.5117 Z"
  }));
}

var _default = Waveform;
exports["default"] = _default;