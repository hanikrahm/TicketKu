"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MusicHouse(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 12.6249 52.6445 L 43.3981 52.6445 C 46.7264 52.6445 48.6719 50.7695 48.6719 47.4648 L 48.6719 26.0664 L 51.6954 28.8320 C 52.1874 29.3008 52.7264 29.6289 53.3826 29.6289 C 54.4842 29.6289 55.3751 28.9492 55.3751 27.8242 C 55.3751 27.1211 55.1173 26.6758 54.6719 26.2774 L 46.5388 18.8476 L 46.5388 5.0430 C 46.5388 4.0117 45.8826 3.3555 44.8516 3.3555 L 41.7812 3.3555 C 40.7734 3.3555 40.0702 4.0117 40.0702 5.0430 L 40.0702 12.9648 L 30.8124 4.5274 C 29.9921 3.7774 29.0077 3.3555 27.9999 3.3555 C 26.9921 3.3555 26.0077 3.7774 25.1874 4.5274 L 1.3280 26.2774 C .9062 26.6758 .6249 27.1211 .6249 27.8242 C .6249 28.9492 1.5155 29.6289 2.6171 29.6289 C 3.2968 29.6289 3.8358 29.3008 4.3046 28.8320 L 7.3280 26.0898 L 7.3280 47.4648 C 7.3280 50.7695 9.2734 52.6445 12.6249 52.6445 Z M 13.4218 48.8711 C 11.9218 48.8711 11.1015 48.0508 11.1015 46.5273 L 11.1015 22.6445 L 27.1796 7.9961 C 27.4140 7.7617 27.6952 7.6211 27.9999 7.6211 C 28.3046 7.6211 28.5858 7.7383 28.8436 7.9961 L 44.8986 22.6445 L 44.8986 46.5273 C 44.8986 48.0508 44.1013 48.8711 42.6015 48.8711 Z M 34.2343 27.7070 C 35.3827 27.4258 35.7109 27.1679 35.7109 25.8086 L 35.7109 21.1445 C 35.7109 20.2539 35.4062 19.8789 34.1405 20.1601 L 27.2265 21.8711 C 26.0546 22.1758 25.7968 22.4101 25.7968 23.8164 L 25.7968 34.4805 C 25.7968 35.5352 25.7265 35.7226 24.5077 36.0508 L 22.3280 36.6367 C 20.1952 37.1992 18.3905 38.4648 18.3905 40.7852 C 18.3905 42.8008 19.8905 44.2539 22.2812 44.2539 C 25.6562 44.2539 27.9531 41.8398 27.9531 38.3945 L 27.9531 30.2617 C 27.9531 29.3711 28.1405 29.1601 28.6796 29.0430 Z"
  }));
}

var _default = MusicHouse;
exports["default"] = _default;