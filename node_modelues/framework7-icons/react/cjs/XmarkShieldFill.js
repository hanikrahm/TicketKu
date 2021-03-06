"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function XmarkShieldFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9883 51.2969 C 28.3633 51.2969 28.9492 51.1562 29.5586 50.8516 C 42.6602 43.4688 47.1836 40.3750 47.1836 31.9609 L 47.1836 14.2891 C 47.1836 11.8750 46.1289 11.1016 44.1836 10.2813 C 41.4414 9.1562 32.6524 5.9922 29.9336 5.0313 C 29.3008 4.8438 28.6680 4.7031 27.9883 4.7031 C 27.3320 4.7031 26.6992 4.8438 26.0664 5.0313 C 23.3476 6.0156 14.5586 9.1797 11.8164 10.2813 C 9.8711 11.0781 8.8164 11.8750 8.8164 14.2891 L 8.8164 31.9609 C 8.8164 40.3750 13.3633 43.4453 26.4414 50.8516 C 27.0508 51.1562 27.6133 51.2969 27.9883 51.2969 Z M 19.6211 37.7734 C 18.5195 37.7734 17.6289 36.8828 17.6289 35.7813 C 17.6289 35.2422 17.8398 34.7734 18.2148 34.4219 L 25.2227 27.3906 L 18.2148 20.3594 C 17.8633 20.0313 17.6289 19.5391 17.6289 19.0000 C 17.6289 17.9219 18.5195 17.0547 19.6211 17.0547 C 20.1602 17.0547 20.6055 17.2656 20.9570 17.6406 L 27.9883 24.6484 L 35.0898 17.6172 C 35.4883 17.1953 35.9102 17.0078 36.4258 17.0078 C 37.5273 17.0078 38.4180 17.8984 38.4180 18.9766 C 38.4180 19.5156 38.2305 19.9609 37.8320 20.3360 L 30.8008 27.3906 L 37.8086 34.375 C 38.1602 34.7500 38.3945 35.2187 38.3945 35.7813 C 38.3945 36.8828 37.5039 37.7734 36.4024 37.7734 C 35.8398 37.7734 35.3711 37.5391 35.0195 37.1875 L 27.9883 30.1562 L 21.0039 37.1875 C 20.6524 37.5625 20.1602 37.7734 19.6211 37.7734 Z"
  }));
}

var _default = XmarkShieldFill;
exports["default"] = _default;