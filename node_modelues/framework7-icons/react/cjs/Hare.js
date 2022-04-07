"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Hare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 16.4781 51.2340 C 19.8605 51.2340 22.9354 50.4743 25.4858 48.1771 C 26.4626 48.8825 27.5478 49.2804 29.1757 49.2804 C 30.7132 49.2804 31.9070 48.7740 34.0415 48.7740 C 36.0129 48.7740 36.9898 49.2804 38.5634 49.2804 C 42.2893 49.2804 43.5918 47.3631 43.5918 45.2469 C 43.5918 41.8282 40.9872 39.7843 35.7777 39.3321 C 37.6410 38.4277 39.3591 37.7223 40.5530 37.2882 C 42.7234 38.7352 45.8529 39.6034 48.1682 39.5853 C 53.0335 39.5492 56 38.0298 56 33.0194 C 56 26.8696 51.3332 22.2391 45.8348 22.1848 L 41.8914 16.8489 C 38.8890 12.8153 35.6692 10.5543 31.5452 10.5543 C 28.3437 10.5543 23.9845 12.3269 23.9845 14.8412 C 23.9845 16.9393 26.3721 18.4406 28.6873 19.9057 C 31.4006 21.6060 35.0724 23.7223 38.4730 25.6939 C 38.0026 26.1099 37.6769 26.2908 37.2069 26.2908 C 36.6642 26.2908 35.9225 26.0195 34.9639 25.4587 C 27.6383 21.3347 23.2791 17.9885 17.6357 17.9885 C 10.9251 17.9885 6.0775 21.4432 3.7804 28.0634 C 1.5375 28.5337 0 29.9988 0 32.2598 C 0 35.0634 2.2610 36.5104 4.5943 36.6370 C 6.3308 39.4406 11.1240 41.9187 17.2920 41.4122 L 19.0104 42.8412 C 18.5582 43.0763 18.1240 43.1487 17.5995 43.1487 C 16.4057 43.1306 15.2662 42.7507 13.8915 42.7507 C 11.3773 42.7507 9.6047 44.2158 9.6047 46.4045 C 9.6047 49.4975 12.3540 51.2340 16.4781 51.2340 Z M 33.9511 46.1874 C 31.6899 46.1874 30.2610 46.5492 29.2481 46.5492 C 28.4341 46.5492 27.5116 46.4226 26.6073 45.6810 L 18.5220 38.8618 C 12.7338 39.1151 8.4832 37.5957 6.0413 34.0504 C 4.1964 34.2675 2.8579 33.5621 2.8579 32.0427 C 2.8579 30.6680 4.0517 29.7094 6.0595 29.8179 C 7.9044 23.7042 11.9742 20.8644 17.5995 20.8644 C 23.5142 20.8644 29.5917 25.6215 34.0052 28.1176 C 35.2172 28.8411 36.5375 29.0763 37.4239 29.0763 C 39.4136 29.0763 40.9690 27.8283 42.3800 25.2959 L 30.3514 17.8799 C 29.0853 17.0659 27.2584 15.7094 27.2584 15.2210 C 27.2584 14.1538 29.7545 13.3580 31.5814 13.3580 C 34.4393 13.3580 36.8812 15.0401 39.0153 17.7352 L 44.5686 24.3735 C 49.6873 24.1383 53.5399 28.0453 53.5399 33.0376 C 53.5399 36.2391 52.0570 37.2159 48.2586 37.2159 C 45.8889 37.2159 43.2661 36.2572 41.0053 34.8282 C 37.6951 35.6603 34.2222 37.2339 31.4186 39.3140 C 31.0388 39.3502 30.7313 39.3864 30.4419 39.4226 L 29.1395 36.2391 C 26.4083 29.6732 22.0310 27.4303 17.5995 27.4303 C 16.8760 27.4303 16.0439 27.4484 15.3023 27.6112 C 14.3979 27.8101 14.0724 28.2804 14.0724 28.8773 C 14.0724 29.5647 14.5788 30.0169 15.3023 29.9988 C 16.0801 29.9626 16.5866 29.8722 17.4729 29.8722 C 21.5788 29.8722 24.5995 32.0608 27.0956 38.0298 L 28.8502 42.0634 C 30.2248 41.7740 31.5272 41.5569 33.5711 41.5569 C 37.2609 41.5569 40.9146 42.5337 40.9146 45.0298 C 40.9146 45.9885 40.0826 46.6396 38.5634 46.6396 C 36.8086 46.6396 35.5428 46.1874 33.9511 46.1874 Z M 46.9924 31.8257 C 47.7881 31.8437 48.4393 31.1383 48.4756 30.3605 C 48.4934 29.5828 47.8966 28.9316 47.0828 28.9135 C 46.3049 28.8954 45.6358 29.5647 45.6177 30.3243 C 45.5814 31.1202 46.2145 31.8076 46.9924 31.8257 Z M 12.2093 46.4226 C 12.2093 45.6991 12.6977 45.1383 13.7468 45.1383 C 14.7778 45.1383 15.8993 45.4277 17.1473 45.4277 C 18.8114 45.4277 19.9871 45.2830 21.0724 44.5414 L 23.4419 46.4949 C 21.7778 47.9962 19.3179 48.7740 16.3876 48.7740 C 13.8553 48.7740 12.2093 47.8696 12.2093 46.4226 Z"
  }));
}

var _default = Hare;
exports["default"] = _default;