"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Person2SquareStackFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 16.8437 3.6367 L 38.6406 3.6367 C 38.5 1.6445 37.3750 .6133 35.2188 .6133 L 20.2890 .6133 C 18.1328 .6133 16.9844 1.6445 16.8437 3.6367 Z M 12.6953 10.1289 L 42.6250 10.1289 C 42.2734 7.9961 41.2656 6.8242 38.9219 6.8242 L 16.3984 6.8242 C 14.0547 6.8242 13.0468 7.9961 12.6953 10.1289 Z M 14.5937 55.3867 L 42.1094 55.3867 C 46.3281 55.3867 48.7656 52.9492 48.7656 48.1211 L 48.7656 21.1211 C 48.7656 16.2930 46.3047 13.8555 41.4063 13.8555 L 14.5937 13.8555 C 9.7188 13.8555 7.2344 16.2930 7.2344 21.1211 L 7.2344 48.1211 C 7.2344 52.9727 9.7188 55.3867 14.5937 55.3867 Z M 34.9609 38.3711 C 32.1250 38.3711 29.6875 35.8398 29.6875 32.6055 C 29.6875 29.3945 32.1484 26.9336 34.9609 26.9336 C 37.7734 26.9336 40.1641 29.3242 40.1641 32.5586 C 40.1641 35.8398 37.7734 38.3711 34.9609 38.3711 Z M 19.8437 38.6758 C 17.3828 38.6758 15.2500 36.4727 15.2500 33.6367 C 15.2500 30.8476 17.3828 28.7149 19.8437 28.7149 C 22.2812 28.7149 24.3906 30.8008 24.3906 33.6133 C 24.3906 36.4727 22.3047 38.6758 19.8437 38.6758 Z M 14.5703 51.4727 C 11.8281 51.4727 11.1250 50.7227 11.1250 48.1211 L 11.1250 45.7070 C 12.2734 43.3398 15.3437 40.8086 19.8203 40.8086 C 21.9766 40.8086 23.5703 41.3477 25.0234 42.3086 C 21.9531 44.5117 20.2890 49.7617 21.6719 51.4727 Z M 25.5625 51.4727 C 24.9297 51.4727 24.1797 50.9102 24.1797 49.7383 C 24.1797 45.5195 28.3281 40.8555 34.9375 40.8555 C 39.8828 40.8555 43.5625 43.4570 44.8750 45.9180 L 44.8750 48.1211 C 44.8750 50.7695 44.1250 51.4727 42.1094 51.4727 Z"
  }));
}

var _default = Person2SquareStackFill;
exports["default"] = _default;