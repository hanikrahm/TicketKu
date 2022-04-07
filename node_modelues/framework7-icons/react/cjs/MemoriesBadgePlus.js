"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MemoriesBadgePlus(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 6.6409 32.1938 C 7.1706 32.1938 7.5780 32.0512 8.0873 31.6845 L 13.4041 27.7529 C 13.8523 27.4270 14.0967 26.9381 14.0967 26.4084 C 14.0967 25.4510 13.3430 24.7584 12.4874 24.7584 C 12.1004 24.7584 11.7541 24.8602 11.4485 25.1047 L 8.7188 27.2233 C 9.7374 18.9323 16.7653 12.5561 25.3415 12.5561 C 33.9992 12.5561 41.0476 19.0341 42.0051 27.4270 C 43.0644 27.1010 44.2254 26.8973 45.4069 26.8973 C 44.2050 16.9563 35.5882 9.0931 25.3415 9.0931 C 15.0949 9.0931 6.4576 16.9970 5.2557 26.9788 L 3.0760 23.8824 C 2.7501 23.4139 2.2612 23.1083 1.6704 23.1083 C .7333 23.1083 0 23.7805 0 24.7176 C 0 25.1250 .1222 25.5121 .3667 25.8177 L 4.6446 31.0937 C 5.2964 31.9086 5.8261 32.1938 6.6409 32.1938 Z M 20.1877 36.0032 C 20.1877 36.9199 21.2062 37.3477 22.1026 36.8180 L 33.0214 30.3604 C 33.8159 29.8919 33.7955 28.7714 33.0214 28.3029 L 22.1026 21.8453 C 21.2673 21.3564 20.1877 21.7231 20.1877 22.6602 Z M 45.6514 50.3851 C 51.2740 50.3851 56.0000 45.6998 56.0000 40.0366 C 56.0000 34.3735 51.3349 29.6882 45.6514 29.6882 C 39.9884 29.6882 35.3030 34.3735 35.3030 40.0366 C 35.3030 45.7405 39.9884 50.3851 45.6514 50.3851 Z M 45.6718 46.7591 C 44.9588 46.7591 44.3272 46.2701 44.3272 45.4960 L 44.3272 41.2793 L 40.4364 41.2793 C 39.7439 41.2793 39.1940 40.7089 39.1940 40.0366 C 39.1940 39.3440 39.7439 38.7736 40.4364 38.7736 L 44.3272 38.7736 L 44.3272 34.5568 C 44.3272 33.8031 44.9588 33.3142 45.6718 33.3142 C 46.3848 33.3142 46.9960 33.8031 46.9960 34.5568 L 46.9960 38.7736 L 50.8868 38.7736 C 51.5794 38.7736 52.1497 39.3440 52.1497 40.0366 C 52.1497 40.7089 51.5794 41.2793 50.8868 41.2793 L 46.9960 41.2793 L 46.9960 45.4960 C 46.9960 46.2701 46.3848 46.7591 45.6718 46.7591 Z M 25.3415 46.1072 C 20.1469 46.1072 15.6449 43.7441 12.5689 40.1792 C 12.1208 39.6700 11.5911 39.4459 11.0818 39.4459 C 10.2466 39.4459 9.4725 40.1181 9.4725 41.0552 C 9.4725 41.5033 9.6762 42.0126 10.1244 42.5626 C 13.6893 46.7998 19.2710 49.5499 25.3415 49.5499 C 28.7028 49.5499 31.8806 48.6943 34.6511 47.2072 C 34.0196 46.2701 33.5511 45.2516 33.1843 44.1516 C 30.8621 45.3942 28.1935 46.1072 25.3415 46.1072 Z"
  }));
}

var _default = MemoriesBadgePlus;
exports["default"] = _default;