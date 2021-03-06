"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MoneyRublCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 Z M24,4 C12.954305,4 4,12.954305 4,24 C4,35.045695 12.954305,44 24,44 C35.045695,44 44,35.045695 44,24 C44,12.954305 35.045695,4 24,4 Z M25.5292969,12.8571429 C29.9029018,12.8571429 32.749721,15.8789063 32.749721,19.9662388 C32.749721,24.0376674 29.8392857,27.0276228 25.4179687,27.0276228 L21.219308,27.0276228 L21.219308,30.1130022 L27.5968192,30.1130022 L27.5968192,31.9101562 L21.219308,31.9101562 L21.219308,35.3772321 L17.7045201,35.3772321 L17.7045201,31.9101562 L14.5714286,31.9101562 L14.5714286,30.1130022 L17.7045201,30.1130022 L17.7045201,27.0276228 L14.5714286,27.0276228 L14.5714286,25.2145647 L17.7045201,25.2145647 L17.7045201,12.8571429 L25.5292969,12.8571429 Z M24.5591518,15.8311942 L21.219308,15.8311942 L21.219308,24.1648996 L24.5432478,24.1648996 C27.6286272,24.1648996 29.171317,22.5426897 29.171317,19.9821429 C29.171317,17.4375 27.6286272,15.8311942 24.5591518,15.8311942 Z",
    transform: "translate(4 4)"
  }));
}

var _default = MoneyRublCircle;
exports["default"] = _default;