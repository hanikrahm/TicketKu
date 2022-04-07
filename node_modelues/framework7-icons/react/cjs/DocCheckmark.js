"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DocCheckmark(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.64048644,0.875 L18.7732864,0.875 C21.3235975,0.875 22.7656025,1.24443539 24.4594477,2.90420892 L24.6560864,3.1015 L37.5935864,16.25 C39.4039313,18.105531 39.7722195,19.3931515 39.7954661,22.2010421 L39.7966864,43.789 C39.7966864,48.5665 37.4782808,51.0255944 32.8192575,51.1220472 L32.5310864,51.125 L7.64048644,51.125 C2.90894844,51.125 0.473342678,48.784025 0.377811062,44.079957 L0.374886438,43.789 L0.374886438,8.2344 C0.374886438,3.4569 2.71586144,0.97533224 7.35366953,0.87798053 L7.64048644,0.875 Z M18.2575864,4.6484 L7.85138644,4.6484 C5.49251547,4.6484 4.23115751,5.89959667 4.15223418,8.08323938 L4.14828644,8.3047 L4.14828644,43.7187 C4.14828644,45.9868935 5.33355179,47.2672411 7.59795312,47.3474839 L7.82798644,47.3515 L32.3435864,47.3515 C34.7024574,47.3515 35.9419007,46.14432 36.0194102,43.9422187 L36.0232864,43.7187 L36.0232864,22.6718 L22.6638864,22.6718 C19.8406236,22.6718 18.3444487,21.3005481 18.2612577,18.5150505 L18.2575864,18.2656 L18.2575864,4.6484 Z M30.5857864,27.7820561 C31.366835,28.5631047 31.366835,29.8294347 30.5857864,30.6104833 L17,44.1962697 C16.2189514,44.9773183 14.9526215,44.9773183 14.1715729,44.1962697 L7.58578644,37.6104833 C6.80473785,36.8294347 6.80473785,35.5631047 7.58578644,34.7820561 C8.36683502,34.0010076 9.63316498,34.0010076 10.4142136,34.7820561 L14.1715729,38.5394155 L15.5206741,39.8317257 L17,38.5394155 L27.7573593,27.7820561 C28.5384079,27.0010076 29.8047379,27.0010076 30.5857864,27.7820561 Z M21.7966864,5.375 L21.7966864,17.8203 C21.7966864,18.7026529 22.1288664,19.086736 22.9300375,19.1288691 L23.0857864,19.1328 L35.2966864,19.1328 L21.7966864,5.375 Z",
    transform: "translate(8 2)"
  }));
}

var _default = DocCheckmark;
exports["default"] = _default;