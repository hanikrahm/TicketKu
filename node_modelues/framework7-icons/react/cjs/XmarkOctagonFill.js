"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function XmarkOctagonFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 20.8867 50.7109 L 35.1132 50.7109 C 38.0898 50.7109 39.5195 49.7500 41.0429 48.0859 L 49.6679 38.5234 C 51.2149 36.8125 51.6133 35.6875 51.6133 33.3671 L 51.6133 22.6562 C 51.6133 20.3125 51.2149 19.2109 49.6679 17.5000 L 41.0429 7.9375 C 39.5195 6.2734 38.0898 5.2891 35.1132 5.2891 L 20.8867 5.2891 C 17.9101 5.2891 16.5039 6.2734 14.9570 7.9375 L 6.3320 17.5000 C 4.7851 19.2109 4.3867 20.3125 4.3867 22.6562 L 4.3867 33.3671 C 4.3867 35.6875 4.7851 36.8125 6.3320 38.5234 L 14.9570 48.0859 C 16.5039 49.7500 17.9101 50.7109 20.8867 50.7109 Z M 19.5976 38.4062 C 18.4960 38.4062 17.6054 37.4922 17.6054 36.4140 C 17.6054 35.875 17.8398 35.3828 18.1913 35.0547 L 25.1992 28.0234 L 18.1913 20.9922 C 17.8398 20.6640 17.6054 20.1718 17.6054 19.6328 C 17.6054 18.5312 18.4960 17.6875 19.5976 17.6875 C 20.1367 17.6875 20.5820 17.8750 20.9335 18.2500 L 27.9882 25.2812 L 35.0664 18.2266 C 35.4648 17.8047 35.8867 17.6406 36.4023 17.6406 C 37.5039 17.6406 38.3945 18.5078 38.3945 19.6093 C 38.3945 20.1484 38.2070 20.5937 37.8086 20.9687 L 30.7773 28.0234 L 37.7851 35.0078 C 38.1367 35.3828 38.3711 35.8515 38.3711 36.4140 C 38.3711 37.4922 37.4804 38.4062 36.3789 38.4062 C 35.8164 38.4062 35.3476 38.1484 34.9960 37.7969 L 27.9882 30.7891 L 20.9804 37.7969 C 20.6289 38.1718 20.1367 38.4062 19.5976 38.4062 Z"
  }));
}

var _default = XmarkOctagonFill;
exports["default"] = _default;