"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SquareList(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M36.2382,0.4258 C41.038632,0.4258 43.4758077,2.766775 43.5713746,7.4045831 L43.5743,7.6914 L43.5743,36.3086 C43.5743,41.040138 41.2331329,43.4757438 36.5291513,43.5712754 L36.2382,43.5742 L7.7851,43.5742 C3.0076,43.5742 0.52603224,41.2557944 0.42868053,36.5967711 L0.4257,36.3086 L0.4257,7.6914 C0.4257,2.936832 2.81171776,0.52333504 7.49546947,0.428696989 L7.7851,0.4258 L36.2382,0.4258 Z M36.1679,4.1992 L7.8554,4.1992 C5.58730323,4.1992 4.28495047,5.36255068 4.20328785,7.6467459 L4.1992,7.8789 L4.1992,36.1211 C4.1992,38.479971 5.42838835,39.7194143 7.63181891,39.7969237 L7.8554,39.8008 L36.1679,39.8008 C38.4133516,39.8008 39.7149739,38.6374493 39.7966129,36.3532541 L39.8007,36.1211 L39.8007,7.8789 C39.8007,5.52002903 38.5715117,4.28058574 36.3892888,4.20307626 L36.1679,4.1992 Z M10,30 C11.1045695,30 12,30.8954305 12,32 C12,33.1045695 11.1045695,34 10,34 C8.8954305,34 8,33.1045695 8,32 C8,30.8954305 8.8954305,30 10,30 Z M35.1818182,30 C36.1859723,30 37,30.8954305 37,32 C37,33.1045695 36.1859723,34 35.1818182,34 L18.8181818,34 C17.8140277,34 17,33.1045695 17,32 C17,30.8954305 17.8140277,30 18.8181818,30 L35.1818182,30 Z M10,20 C11.1045695,20 12,20.8954305 12,22 C12,23.1045695 11.1045695,24 10,24 C8.8954305,24 8,23.1045695 8,22 C8,20.8954305 8.8954305,20 10,20 Z M35.1818182,20 C36.1859723,20 37,20.8954305 37,22 C37,23.1045695 36.1859723,24 35.1818182,24 L18.8181818,24 C17.8140277,24 17,23.1045695 17,22 C17,20.8954305 17.8140277,20 18.8181818,20 L35.1818182,20 Z M10,10 C11.1045695,10 12,10.8954305 12,12 C12,13.1045695 11.1045695,14 10,14 C8.8954305,14 8,13.1045695 8,12 C8,10.8954305 8.8954305,10 10,10 Z M35.1818182,10 C36.1859723,10 37,10.8954305 37,12 C37,13.1045695 36.1859723,14 35.1818182,14 L18.8181818,14 C17.8140277,14 17,13.1045695 17,12 C17,10.8954305 17.8140277,10 18.8181818,10 L35.1818182,10 Z",
    transform: "translate(6 6)"
  }));
}

var _default = SquareList;
exports["default"] = _default;