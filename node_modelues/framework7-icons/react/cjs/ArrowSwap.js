"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowSwap(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 6.6718 37.4336 C 5.0078 37.4336 4.5624 38.5820 5.4765 39.8711 L 10.7265 47.3242 C 11.5000 48.4258 12.6249 48.4023 13.3749 47.3242 L 18.6249 39.8477 C 19.5156 38.5820 19.0937 37.4336 17.4296 37.4336 L 14.1484 37.4336 L 14.1484 19.8086 C 14.1484 15.7539 16.6093 13.1992 19.9843 13.1992 C 23.3827 13.1992 25.9140 15.7070 25.9140 19.8086 L 25.9140 35.8633 C 25.9140 42.6601 30.1562 46.9726 36.0156 46.9726 C 41.8515 46.9726 46.0468 42.6601 46.0468 35.8633 L 46.0468 18.5664 L 49.3280 18.5664 C 50.9921 18.5664 51.4376 17.4180 50.5232 16.1289 L 45.2968 8.6523 C 44.5468 7.5977 43.4218 7.5742 42.6484 8.6523 L 37.3984 16.1055 C 36.4609 17.4180 36.9062 18.5664 38.5937 18.5664 L 41.8515 18.5664 L 41.8515 36.1914 C 41.8515 40.2226 39.4140 42.7773 36.0156 42.7773 C 32.6171 42.7773 30.0859 40.2695 30.0859 36.1914 L 30.0859 20.1367 C 30.0859 13.3398 25.8437 9.0273 19.9843 9.0273 C 14.1484 9.0273 9.9531 13.3398 9.9531 20.1367 L 9.9531 37.4336 Z"
  }));
}

var _default = ArrowSwap;
exports["default"] = _default;