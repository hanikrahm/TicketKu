"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BitcoinCircleFill(props) {
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
    d: "M24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 Z M23.9202671,33.8315495 L23.9202671,36.8571429 L27.0365466,36.8571429 L27.0365466,33.8247978 L26.8558193,33.8247978 C30.9247437,33.6902608 33.4285714,31.5538989 33.4285714,28.2057204 C33.4285714,25.6039447 31.4127281,23.6560184 28.6689414,23.4516904 L28.6689414,23.3427155 C30.8107749,23.0294127 32.4626465,21.2313269 32.4626465,19.0790726 C32.4626465,16.068641 30.0828315,14.1752022 26.2891264,14.1752022 L27.0365466,14.1752022 L27.0365466,11.1428571 L23.9202671,11.1428571 L23.9202671,14.1752022 L21.4272435,14.1752022 L21.4272435,11.1428571 L18.310964,11.1428571 L18.310964,14.1752022 L14.5714286,14.1752022 L14.5714286,17.2075472 L17.4978098,17.2075472 L17.4978098,30.7924528 L14.5714286,30.7924528 L14.5714286,33.8247978 L17.4978098,33.8247978 L17.4978098,33.8315495 L18.310964,33.8315495 L18.310964,36.8571429 L21.4272435,36.8571429 L21.4272435,33.8315495 L23.9202671,33.8315495 Z M21.4285714,17.1428571 L25.0468085,17.1428571 C27.1039514,17.1428571 28.2857143,18.048 28.2857143,19.6388571 C28.2857143,21.312 26.943465,22.2857143 24.5945289,22.2857143 L21.4285714,22.2857143 L21.4285714,17.1428571 Z M21.4285714,30.8571429 L21.4285714,24.8571429 L25.125,24.8571429 C27.7256494,24.8571429 29.1428571,25.8881691 29.1428571,27.8213433 C29.1428571,29.797477 27.7694805,30.8571429 25.2272727,30.8571429 L21.4285714,30.8571429 Z",
    transform: "translate(4 4)"
  }));
}

var _default = BitcoinCircleFill;
exports["default"] = _default;