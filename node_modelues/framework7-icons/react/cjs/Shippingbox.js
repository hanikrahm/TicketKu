"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Shippingbox(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3.20951751,39.2251127 L21.2516738,49.4497822 C21.8935867,49.8165941 22.5240436,50 23.1430444,50 C23.762014,50 24.4000925,49.8165941 25.0572801,49.4497822 L43.0764305,39.2251127 C44.130948,38.6137743 44.929583,37.9221967 45.4723356,37.15038 C46.0147751,36.3785696 46.2859949,35.1749986 46.2859949,33.5396669 L46.2859949,15.3828565 C46.2859949,14.1907415 46.0606305,13.2049601 45.6099018,12.4255124 C45.15886,11.6460333 44.4519357,10.9735554 43.489129,10.4080786 L27.2581042,1.19213065 C25.8825989,0.397376884 24.514731,0 23.1545004,0 C21.7942699,0 20.4187489,0.397376884 19.0279377,1.19213065 L2.81977798,10.4080786 C1.84163394,10.9735554 1.12713494,11.6460333 0.676280962,12.4255124 C0.225426987,13.2049601 0,14.1907415 0,15.3828565 L0,33.5396669 C0,35.1749986 0.275101054,36.3785696 0.825303162,37.15038 C1.37550527,37.9221967 2.17024339,38.6137743 3.20951751,39.2251127 Z M5.27277542,36.1989667 C4.60031313,35.8168802 4.13416881,35.4157003 3.87434245,34.995427 C3.6145161,34.5751224 3.48460292,34.051651 3.48460292,33.4250128 L3.48460292,16.1164646 L21.3434159,26.3181939 L21.3434159,45.346155 L5.27277542,36.1989667 Z M41.0361785,36.1989667 L24.9426729,45.346155 L24.9426729,26.3181939 L42.8012981,16.1164646 L42.8012981,33.4250128 C42.8012981,34.051651 42.6714006,34.5751224 42.4116055,34.995427 C42.1518105,35.4157003 41.6933348,35.8168802 41.0361785,36.1989667 Z M23.1545004,23.1086763 L5.45621264,13.0903373 L12.5401196,9.03255764 L30.2384073,19.0967208 L23.1545004,23.1086763 Z M33.9293595,17.0105508 L16.1622887,6.96929974 L20.5639368,4.47043125 C22.3062539,3.47701252 24.0332963,3.47701252 25.7450641,4.47043125 L40.8527882,13.0903373 L33.9293595,17.0105508 Z",
    transform: "translate(5 3)"
  }));
}

var _default = Shippingbox;
exports["default"] = _default;