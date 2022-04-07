"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DocOnDoc(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 11.5050 56 L 32.9045 56 C 37.4664 56 39.6262 53.6859 39.6262 49.0799 L 39.6262 45.0027 L 43.9237 45.0027 C 48.4638 45.0027 50.7337 42.6887 50.7337 38.0826 L 50.7337 19.6364 C 50.7337 16.9256 50.2047 15.2066 48.5518 13.5096 L 37.4224 2.1818 C 35.8356 .5730 34.0064 0 31.6483 0 L 22.6345 0 C 18.0945 0 15.8025 2.3141 15.8025 6.9201 L 15.8025 10.9972 L 11.5050 10.9972 C 6.9651 10.9972 4.6731 13.3113 4.6731 17.9174 L 4.6731 49.0799 C 4.6731 53.7080 6.9651 56 11.5050 56 Z M 39.6262 31.3168 C 39.6262 28.4959 39.2957 27.2617 37.5325 25.4545 L 25.3893 13.0909 C 23.7144 11.3719 22.3259 10.9972 19.8356 10.9972 L 19.3507 10.9972 L 19.3507 6.9642 C 19.3507 4.8044 20.5408 3.5482 22.8108 3.5482 L 32.1111 3.5482 L 32.1111 15.0744 C 32.1111 17.6088 33.3673 18.8429 35.8797 18.8429 L 47.1856 18.8429 L 47.1856 38.0385 C 47.1856 40.2204 46.0175 41.4545 43.7254 41.4545 L 39.6262 41.4545 Z M 36.4086 15.6474 C 35.6152 15.6474 35.3067 15.3168 35.3067 14.5455 L 35.3067 4.2534 L 46.5023 15.6474 Z M 11.6813 52.4518 C 9.4113 52.4518 8.2213 51.2176 8.2213 49.0138 L 8.2213 17.9614 C 8.2213 15.8017 9.4113 14.5455 11.7033 14.5455 L 19.3507 14.5455 L 19.3507 27.3278 C 19.3507 30.1047 20.7612 31.4711 23.4940 31.4711 L 36.0780 31.4711 L 36.0780 49.0138 C 36.0780 51.2176 34.8879 52.4518 32.5959 52.4518 Z M 23.9127 28.1432 C 23.0312 28.1432 22.6786 27.7906 22.6786 26.9311 L 22.6786 15.2286 L 35.3948 28.1432 Z"
  }));
}

var _default = DocOnDoc;
exports["default"] = _default;