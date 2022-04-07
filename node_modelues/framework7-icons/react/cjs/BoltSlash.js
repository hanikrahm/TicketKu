"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BoltSlash(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 22.7969 16.3984 L 25.4219 19.0234 L 30.6484 12.1094 L 26.8984 20.5000 L 32.6172 26.2422 L 38.6406 26.2422 L 36.0391 29.6406 L 38.7813 32.3828 L 43.8906 25.8203 C 44.2891 25.3282 44.5235 24.8594 44.5235 24.3203 C 44.5235 23.4297 43.8203 22.7500 42.8359 22.7500 L 29.5703 22.7500 L 36.5781 4.5156 C 37.4922 2.1016 34.9375 .7891 33.3906 2.8047 Z M 9.0157 11.5938 L 44.4062 46.9609 C 45.1094 47.6641 46.2813 47.6641 46.9610 46.9609 C 47.6641 46.2813 47.6641 45.1328 46.9610 44.4063 L 11.5937 9.0391 C 10.8906 8.3360 9.7188 8.3360 9.0157 9.0391 C 8.3359 9.7422 8.3359 10.9141 9.0157 11.5938 Z M 11.4766 31.6797 C 11.4766 32.5938 12.1797 33.2734 13.1641 33.2734 L 26.4297 33.2734 L 19.4219 51.4844 C 18.5078 53.8984 21.0625 55.2109 22.6094 53.2187 L 33.1797 39.625 L 30.5313 37.0000 L 25.3281 43.8906 L 29.0781 35.5469 L 23.2891 29.7813 L 17.3359 29.7813 L 19.9375 26.3828 L 17.1953 23.6406 L 12.1094 30.1797 C 11.6875 30.6953 11.4766 31.1641 11.4766 31.6797 Z"
  }));
}

var _default = BoltSlash;
exports["default"] = _default;