"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function WaveformPath(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 1.6437 32.5493 L 8.3327 32.5493 C 8.9491 32.5493 9.5198 32.1840 9.6796 31.5220 L 10.3417 28.5770 L 13.5606 43.4845 C 13.8574 44.8543 16.0946 44.8543 16.3001 43.4617 L 19.0852 25.1526 L 22.3498 53.3924 C 22.5553 55.0818 24.9752 55.0589 25.1122 53.3924 L 28.1256 19.7192 L 31.1163 53.3696 C 31.2761 55.0818 33.6731 55.0818 33.8786 53.3696 L 37.1432 25.1526 L 39.9512 43.4845 C 40.1566 44.8771 42.3711 44.8771 42.6909 43.4845 L 45.8641 28.7596 L 46.5486 31.5220 C 46.7543 32.2753 47.2794 32.5493 47.8956 32.5493 L 54.3795 32.5493 C 55.2926 32.5493 56.0000 31.8416 56.0000 30.9512 C 56.0000 30.0609 55.2926 29.3304 54.3795 29.3304 L 48.9004 29.3304 L 47.0741 22.2533 C 46.6632 20.7237 44.6770 20.7237 44.3572 22.2533 L 41.5264 35.5856 L 38.3075 14.5598 C 38.0564 12.8933 35.7506 12.9390 35.5451 14.5827 L 32.6687 39.5351 L 29.5182 3.9214 C 29.3812 2.2092 26.8700 2.2092 26.7102 3.9214 L 23.5598 39.5351 L 20.6833 14.5827 C 20.5007 12.8933 18.1949 12.8933 17.9210 14.5598 L 14.7020 35.5856 L 11.8940 22.2533 C 11.5744 20.8379 9.5426 20.8379 9.1545 22.2533 L 7.3282 29.3304 L 1.6437 29.3304 C .7305 29.3304 0 30.0609 0 30.9512 C 0 31.8416 .7305 32.5493 1.6437 32.5493 Z"
  }));
}

var _default = WaveformPath;
exports["default"] = _default;