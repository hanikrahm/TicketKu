"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function WandRaysInverse(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 30.0273 5.0664 C 30.0273 3.9649 29.0898 3.0273 27.9883 3.0273 C 26.8867 3.0273 25.9492 3.9649 25.9492 5.0664 L 25.9492 12.2851 C 25.9492 13.4102 26.8867 14.3476 27.9883 14.3476 C 29.0898 14.3476 30.0273 13.4102 30.0273 12.2851 Z M 37.5742 15.5195 C 36.8008 16.2929 36.8008 17.6055 37.5742 18.4024 C 38.3711 19.1758 39.7070 19.1758 40.4805 18.4024 L 45.5898 13.2929 C 46.3867 12.4961 46.3867 11.1836 45.5898 10.3867 C 44.8164 9.6133 43.5039 9.6133 42.7070 10.3867 Z M 15.4961 18.4024 C 16.2695 19.1758 17.5820 19.1758 18.3554 18.4024 C 19.1523 17.6055 19.1523 16.2929 18.3554 15.5195 L 13.2930 10.4102 C 12.5195 9.6367 11.2070 9.6133 10.4102 10.3867 C 9.6367 11.1836 9.6367 12.4727 10.4102 13.2695 Z M 46.9491 50.7695 C 47.9336 51.7773 49.6213 51.7773 50.5587 50.7695 C 51.5427 49.7383 51.5197 48.1445 50.5587 47.1602 L 28.2930 24.8008 C 27.3086 23.8164 25.5976 23.8164 24.6836 24.8008 C 23.6992 25.8320 23.7227 27.4492 24.6836 28.4336 Z M 5.0664 25.9492 C 3.9649 25.9492 3.0273 26.8867 3.0273 27.9883 C 3.0273 29.0898 3.9649 30.0273 5.0664 30.0273 L 12.3086 30.0273 C 13.4336 30.0273 14.3711 29.0898 14.3711 27.9883 C 14.3711 26.8867 13.4336 25.9492 12.3086 25.9492 Z M 50.9101 30.0273 C 52.0117 30.0273 52.9727 29.0898 52.9727 27.9883 C 52.9727 26.8867 52.0117 25.9492 50.9101 25.9492 L 43.6914 25.9492 C 42.5664 25.9492 41.6289 26.8867 41.6289 27.9883 C 41.6289 29.0898 42.5664 30.0273 43.6914 30.0273 Z M 47.7930 49.1523 L 33.3320 34.6680 L 34.4805 33.5429 L 48.9416 48.0273 C 49.3631 48.4258 49.4571 48.8945 49.0823 49.3164 C 48.6834 49.6680 48.2384 49.5977 47.7930 49.1523 Z M 10.3867 42.6836 C 9.6133 43.4570 9.5898 44.7930 10.3633 45.5664 C 11.1367 46.3398 12.4727 46.3633 13.2695 45.5898 L 18.3554 40.4805 C 19.1523 39.7070 19.1523 38.3945 18.3554 37.6211 C 17.6054 36.8242 16.2695 36.8242 15.4961 37.6211 Z M 30.0273 43.7148 C 30.0273 42.5898 29.0898 41.6523 27.9883 41.6523 C 26.8867 41.6523 25.9492 42.5898 25.9492 43.7148 L 25.9492 50.9336 C 25.9492 52.0351 26.8867 52.9727 27.9883 52.9727 C 29.0898 52.9727 30.0273 52.0351 30.0273 50.9336 Z"
  }));
}

var _default = WandRaysInverse;
exports["default"] = _default;