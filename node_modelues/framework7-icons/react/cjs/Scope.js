"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Scope(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 1.6349 29.6579 L 6.3092 29.6579 C 7.1152 40.3421 15.6810 48.9309 26.3422 49.7369 L 26.3422 54.3421 C 26.3422 55.2632 27.0560 56 27.9770 56 C 28.9211 56 29.6349 55.2632 29.6349 54.3421 L 29.6349 49.7369 C 40.2961 48.9309 48.8621 40.3421 49.6676 29.6579 L 54.3423 29.6579 C 55.2633 29.6579 55.9999 28.9210 55.9999 28 C 55.9999 27.0790 55.2633 26.3651 54.3423 26.3651 L 49.6676 26.3651 C 48.8621 15.6809 40.2961 7.0921 29.6349 6.2862 L 29.6349 1.6579 C 29.6349 .7368 28.9211 -2.9976e-15 27.9770 -2.9976021664879227e-15 C 27.0560 -2.9976e-15 26.3422 .7368 26.3422 1.6578829473684213 L 26.3422 6.2862 C 15.6810 7.0921 7.1152 15.6809 6.3092 26.3651 L 1.6349 26.3651 C .7139 26.3651 .1 27.0790 .1 28 C .1 28.9210 .7139 29.6579 1.6349 29.6579 Z M 27.9770 18.9046 C 28.9211 18.9046 29.6349 18.1678 29.6349 17.2467 L 29.6349 10.0395 C 38.2928 10.8224 45.0164 17.6151 45.7766 26.3651 L 38.7534 26.3651 C 37.8323 26.3651 37.0954 27.0790 37.0954 28 C 37.0954 28.9210 37.8323 29.6579 38.7534 29.6579 L 45.7766 29.6579 C 45.0164 38.3849 38.2928 45.1776 29.6349 45.9605 L 29.6349 38.7533 C 29.6349 37.8322 28.9211 37.1185 27.9770 37.1185 C 27.0560 37.1185 26.3422 37.8322 26.3422 38.7533 L 26.3422 45.9605 C 17.6842 45.1776 10.9606 38.3849 10.2007 29.6579 L 17.2238 29.6579 C 18.1448 29.6579 18.8816 28.9210 18.8816 28 C 18.8816 27.0790 18.1448 26.3651 17.2238 26.3651 L 10.2007 26.3651 C 10.9606 17.6151 17.6842 10.8224 26.3422 10.0395 L 26.3422 17.2467 C 26.3422 18.1678 27.0560 18.9046 27.9770 18.9046 Z"
  }));
}

var _default = Scope;
exports["default"] = _default;