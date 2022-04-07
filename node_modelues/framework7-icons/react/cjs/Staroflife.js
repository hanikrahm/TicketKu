"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Staroflife(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.2030 52.7851 L 28.7499 52.7851 C 32.5702 52.7851 34.3983 51.0976 34.3983 47.5352 L 34.3983 39.0742 L 41.7108 43.3164 C 44.8046 45.0977 47.1952 44.3711 49.0936 41.0664 L 49.8669 39.7305 C 51.7657 36.4258 51.2032 33.9883 48.1092 32.2071 L 40.8202 27.9883 L 48.1092 23.7695 C 51.1797 21.9883 51.7657 19.5742 49.8438 16.2695 L 49.0936 14.9571 C 47.1718 11.6289 44.7811 10.9024 41.6874 12.6836 L 34.3983 16.8789 L 34.3983 8.4649 C 34.3983 4.9024 32.5702 3.2149 28.7499 3.2149 L 27.2030 3.2149 C 23.4061 3.2149 21.5780 4.9024 21.5780 8.4649 L 21.5780 16.8789 L 14.3124 12.6836 C 11.2187 10.9024 8.8280 11.6289 6.9061 14.9571 L 6.1561 16.2695 C 4.2343 19.5742 4.7968 21.9883 7.8905 23.7695 L 15.1796 27.9883 L 7.8671 32.2071 C 4.7733 33.9883 4.2343 36.4258 6.1327 39.7305 L 6.9061 41.0664 C 8.8046 44.3711 11.1952 45.0977 14.2889 43.3164 L 21.5780 39.0742 L 21.5780 47.5352 C 21.5780 51.0976 23.4061 52.7851 27.2030 52.7851 Z M 27.8358 49.2695 C 25.9139 49.2695 25.3046 48.7070 25.3046 46.8555 L 25.3046 33.6133 C 25.3046 33.1680 24.9061 32.8633 24.4843 33.1211 L 12.9999 39.7539 C 11.3827 40.6914 10.6092 40.4102 9.6718 38.7461 L 9.5077 38.5117 C 8.5468 36.8242 8.6874 36.0039 10.3046 35.0898 L 21.9765 28.3398 C 22.4218 28.1055 22.3983 27.5664 21.9530 27.3320 L 10.3280 20.9102 C 8.7343 19.9727 8.5702 19.1758 9.5077 17.4883 L 9.6718 17.2305 C 10.6327 15.5664 11.4061 15.2851 13.0233 16.2227 L 24.4374 22.8320 C 24.8592 23.0898 25.3046 22.8086 25.3046 22.3164 L 25.3046 9.1445 C 25.3046 7.2930 25.9139 6.7305 27.8358 6.7305 L 28.1405 6.7305 C 30.0624 6.7305 30.6952 7.2930 30.6952 9.1445 L 30.6952 22.3164 C 30.6952 22.8086 31.1171 23.0898 31.5389 22.8320 L 42.9530 16.2227 C 44.5702 15.3086 45.3671 15.5664 46.3280 17.2305 L 46.4921 17.4883 C 47.4296 19.1758 47.2655 19.9727 45.6483 20.9102 L 34.0468 27.3320 C 33.6014 27.5664 33.5780 28.0820 34.0233 28.3398 L 45.6718 35.0898 C 47.2889 36.0039 47.4530 36.8242 46.4921 38.5117 L 46.3280 38.7461 C 45.3905 40.4102 44.5936 40.6914 42.9765 39.7539 L 31.5155 33.1211 C 31.0936 32.8633 30.6952 33.1680 30.6952 33.6133 L 30.6952 46.8555 C 30.6952 48.7070 30.0624 49.2695 28.1405 49.2695 Z"
  }));
}

var _default = Staroflife;
exports["default"] = _default;