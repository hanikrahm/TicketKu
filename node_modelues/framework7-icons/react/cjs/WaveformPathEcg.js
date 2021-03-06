"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function WaveformPathEcg(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 6.2148 31.3867 L 16.6210 31.3867 C 17.6757 31.3867 18.3085 30.9180 18.5194 29.9805 L 22.0351 13.8320 L 28.1991 50.8398 C 28.4804 52.5273 31.0820 52.5039 31.4101 50.8398 L 37.3867 22.8320 L 38.7694 29.7929 C 38.9804 30.8711 39.5898 31.3867 40.6913 31.3867 L 49.7851 31.3867 C 50.7225 31.3867 51.4727 30.6602 51.4727 29.7461 C 51.4727 28.8086 50.7460 28.0820 49.7851 28.0820 L 41.4882 28.0820 L 38.7929 16.1524 C 38.4413 14.5351 36.0272 14.5351 35.6288 16.2227 L 29.7460 42.4961 L 23.6054 5.1602 C 23.3476 3.5195 20.9335 3.4727 20.5585 5.1602 L 15.5898 28.0820 L 6.2148 28.0820 C 5.2772 28.0820 4.5273 28.8320 4.5273 29.7461 C 4.5273 30.6602 5.2772 31.3867 6.2148 31.3867 Z"
  }));
}

var _default = WaveformPathEcg;
exports["default"] = _default;