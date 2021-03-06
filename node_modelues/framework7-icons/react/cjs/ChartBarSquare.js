"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ChartBarSquare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M36.2382,0.4258 C41.038632,0.4258 43.4758077,2.766775 43.5713746,7.4045831 L43.5743,7.6914 L43.5743,36.3086 C43.5743,41.040138 41.2331329,43.4757438 36.5291513,43.5712754 L36.2382,43.5742 L7.7851,43.5742 C3.0076,43.5742 0.52603224,41.2557944 0.42868053,36.5967711 L0.4257,36.3086 L0.4257,7.6914 C0.4257,2.936832 2.81171776,0.52333504 7.49546947,0.428696989 L7.7851,0.4258 L36.2382,0.4258 Z M36.1679,4.1992 L7.8554,4.1992 C5.58730323,4.1992 4.28495047,5.36255068 4.20328785,7.6467459 L4.1992,7.8789 L4.1992,36.1211 C4.1992,38.479971 5.42838835,39.7194143 7.63181891,39.7969237 L7.8554,39.8008 L36.1679,39.8008 C38.4133516,39.8008 39.7149739,38.6374493 39.7966129,36.3532541 L39.8007,36.1211 L39.8007,7.8789 C39.8007,5.52002903 38.5715117,4.28058574 36.3892888,4.20307626 L36.1679,4.1992 Z M14,16 C15.1045695,16 16,16.8954305 16,18 L16,32 C16,33.1045695 15.1045695,34 14,34 L12,34 C10.8954305,34 10,33.1045695 10,32 L10,18 C10,16.8954305 10.8954305,16 12,16 L14,16 Z M23,10 C24.1045695,10 25,10.8954305 25,12 L25,32 C25,33.1045695 24.1045695,34 23,34 L21,34 C19.8954305,34 19,33.1045695 19,32 L19,12 C19,10.8954305 19.8954305,10 21,10 L23,10 Z M32,22 C33.1045695,22 34,22.8954305 34,24 L34,32 C34,33.1045695 33.1045695,34 32,34 L30,34 C28.8954305,34 28,33.1045695 28,32 L28,24 C28,22.8954305 28.8954305,22 30,22 L32,22 Z",
    transform: "translate(6 6)"
  }));
}

var _default = ChartBarSquare;
exports["default"] = _default;