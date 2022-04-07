"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function HandDraw(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 2.1952 36.8945 C 3.0156 36.8711 3.6015 36.2383 3.6250 35.3945 C 3.8828 25.1992 9.1328 17.6523 17.1015 14.6992 L 22.5625 29.6992 C 22.6093 29.8164 22.5859 29.9101 22.4687 29.9570 C 22.3749 30.0039 22.3046 29.9570 22.2343 29.8867 L 19.4687 26.8867 C 17.6640 24.9414 15.3671 24.8008 13.5859 26.3008 C 11.5703 28.0117 11.5468 30.5664 13.5156 32.9805 L 21.3671 42.4727 C 27.2968 49.6445 34.2578 51.8711 42.0390 49.0352 C 51.3438 45.6602 55.3047 37.1289 51.5545 26.8164 L 49.7967 22.0117 C 47.9689 16.9258 44.4765 14.8398 40.3749 16.2695 C 39.2734 14.8398 37.5859 14.3477 35.7578 15.0039 C 35.1250 15.2383 34.5156 15.5899 33.9296 16.0352 C 32.7343 14.4883 30.8828 13.9258 28.9609 14.6055 C 28.4452 14.7930 27.9530 15.0742 27.4843 15.4023 L 24.8125 8.0899 C 23.8046 5.3008 21.2734 4.1289 18.6718 5.0664 C 16.0468 6.0274 14.8749 8.5352 15.8828 11.3242 L 16.0703 11.8398 C 6.9999 15.2383 .6953 23.9805 .6953 35.3477 C .6953 36.1914 1.3984 36.9179 2.1952 36.8945 Z M 41.0312 45.9648 C 34.8906 48.2148 29.1250 47.0664 23.7109 40.5274 L 15.8593 31.0820 C 15.0156 30.0977 15.0156 29.1367 15.7656 28.4805 C 16.4687 27.8477 17.4296 28.0586 18.2030 28.8555 L 23.6171 34.4570 C 24.5312 35.3945 25.3281 35.4883 26.1015 35.2070 C 27.0156 34.8789 27.4140 33.8945 27.0390 32.8867 L 18.7421 10.0586 C 18.3906 9.1211 18.8125 8.2305 19.7030 7.9023 C 20.6171 7.5742 21.4609 8.0195 21.8125 8.9570 L 27.7421 25.2461 C 28.0234 26.0195 28.8906 26.3711 29.6640 26.0899 C 30.4140 25.8086 30.8125 24.9883 30.5312 24.2383 L 28.3984 18.3555 C 28.7265 18.0508 29.1718 17.7461 29.6171 17.5820 C 30.7187 17.1836 31.6328 17.6758 32.0546 18.8242 L 33.9296 23.9570 C 34.2109 24.7539 35.0781 25.0586 35.8281 24.7774 C 36.5546 24.5195 37.0234 23.7461 36.7187 22.9258 L 35.1952 18.7774 C 35.5234 18.4492 35.9687 18.1445 36.4140 17.9805 C 37.5156 17.5820 38.4296 18.0742 38.8515 19.2227 L 40.0937 22.6445 C 40.3984 23.4648 41.2656 23.7695 42.0156 23.4883 C 42.7421 23.2305 43.1874 22.4336 42.9062 21.6367 L 41.9687 19.1055 C 43.9374 18.4023 45.7892 19.9961 47.0545 23.5117 L 48.5310 27.5195 C 51.7422 36.3789 48.8123 43.1289 41.0312 45.9648 Z"
  }));
}

var _default = HandDraw;
exports["default"] = _default;