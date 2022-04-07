"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Expand(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M21.9614337,19 L33.8409327,30.879499 L33.8409327,25.3544813 C33.8409327,24.2059865 34.7719717,23.2749476 35.9204664,23.2749476 C37.0689611,23.2749476 38,24.2059865 38,25.3544813 L38,35.7521494 C38,35.7769641 37.9995654,35.8016772 37.9987033,35.8262816 C38.0183034,36.3827558 37.8157085,36.9455998 37.3909187,37.3703897 C37.02834,37.7329684 36.5651826,37.9336681 36.0912563,37.9724887 C35.9809026,37.9905878 35.8676252,38 35.7521494,38 L25.3544813,38 C24.2059865,38 23.2749476,37.0689611 23.2749476,35.9204664 C23.2749476,34.7719717 24.2059865,33.8409327 25.3544813,33.8409327 L30.9205571,33.8409327 L19.020529,21.9409047 L7.12050097,33.8409327 L12.6455187,33.8409327 C13.7940135,33.8409327 14.7250524,34.7719717 14.7250524,35.9204664 C14.7250524,37.0689611 13.7940135,38 12.6455187,38 L2.24785057,38 C2.22303592,38 2.19832279,37.9995654 2.17371837,37.9987033 C1.61724422,38.0183034 1.05440015,37.8157085 0.62961033,37.3909187 C0.267031623,37.02834 0.0663319441,36.5651826 0.0275112943,36.0912563 C0.0094122049,35.9809026 3.63797881e-12,35.8676252 3.63797881e-12,35.7521494 L3.63797881e-12,25.3544813 C3.63797881e-12,24.2059865 0.931038922,23.2749476 2.07953363,23.2749476 C3.22802835,23.2749476 4.15906727,24.2059865 4.15906727,25.3544813 L4.15906727,30.9205571 L16.0796244,19 L4.15906727,7.07944291 L4.15906727,12.6455187 C4.15906727,13.7940135 3.22802835,14.7250524 2.07953363,14.7250524 C0.931038921,14.7250524 3.63797881e-12,13.7940135 3.63797881e-12,12.6455187 L3.63797881e-12,2.24785057 C3.63797881e-12,2.13237483 0.00941220489,2.01909742 0.0275112943,1.90874367 C0.0663319441,1.43481745 0.267031623,0.971660007 0.62961033,0.6090813 C1.05440015,0.18429148 1.61724422,-0.0183033832 2.17371837,0.00129671164 C2.19832279,0.000434636379 2.22303592,-1.03739239e-12 2.24785057,-1.03739239e-12 L12.6455187,-1.03739239e-12 C13.7940135,-1.03739239e-12 14.7250524,0.931038921 14.7250524,2.07953363 C14.7250524,3.22802835 13.7940135,4.15906727 12.6455187,4.15906727 L7.12050097,4.15906727 L19.020529,16.0590953 L30.9205571,4.15906727 L25.3544813,4.15906727 C24.2059865,4.15906727 23.2749476,3.22802835 23.2749476,2.07953363 C23.2749476,0.931038921 24.2059865,-1.03739239e-12 25.3544813,-1.03739239e-12 L35.7521494,-1.03739239e-12 C35.8676252,-1.03739239e-12 35.9809026,0.00941220489 36.0912563,0.0275112943 C36.5651826,0.0663319441 37.02834,0.267031623 37.3909187,0.62961033 C37.8157085,1.05440015 38.0183034,1.61724422 37.9987033,2.17371837 C37.9995654,2.19832279 38,2.22303592 38,2.24785057 L38,12.6455187 C38,13.7940135 37.0689611,14.7250524 35.9204664,14.7250524 C34.7719717,14.7250524 33.8409327,13.7940135 33.8409327,12.6455187 L33.8409327,7.12050097 L21.9614337,19 Z",
    transform: "translate(9 9)"
  }));
}

var _default = Expand;
exports["default"] = _default;