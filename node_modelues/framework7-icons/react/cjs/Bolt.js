"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Bolt(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 22.6211 53.2187 L 43.9023 25.8203 C 44.3008 25.3282 44.5117 24.8594 44.5117 24.3203 C 44.5117 23.4297 43.8320 22.7500 42.8477 22.7500 L 29.5820 22.7500 L 36.5899 4.5156 C 37.5039 2.1016 34.9492 .7891 33.4023 2.8047 L 12.1211 30.1797 C 11.6992 30.6953 11.4883 31.1641 11.4883 31.6797 C 11.4883 32.5938 12.1914 33.2734 13.1758 33.2734 L 26.4180 33.2734 L 19.4336 51.4844 C 18.4961 53.8984 21.0742 55.2109 22.6211 53.2187 Z M 31.8320 29.7813 L 17.3477 29.7813 L 30.5664 12.2266 L 24.1680 26.2422 L 38.6289 26.2422 L 25.4101 43.7969 Z"
  }));
}

var _default = Bolt;
exports["default"] = _default;