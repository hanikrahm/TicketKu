"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Wrench(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 4.6734 52.3025 C 8.3709 56 13.4801 55.7983 17.5137 51.7871 C 22.1300 47.1709 26.7014 37.9384 33.1328 31.5070 C 38.1300 26.5098 43.7995 31.3725 50.6789 24.7843 C 53.4353 22.1625 54.9590 18.3978 54.3991 15.6638 L 45.7940 18.0168 C 44.3598 18.3978 43.3291 17.4790 42.8807 15.9328 L 42.2308 13.6694 C 41.7826 12.1232 42.3205 10.8235 43.7545 10.4426 L 52.3371 8.1120 C 52.0906 7.3277 51.3513 6.2521 50.4325 5.3109 C 45.2561 -6.6336e-15 36.5838 .6 31.5866 4.81790504132468 C 24.1244 11.9215 29.7714 19.4285 24.8639 24.3361 C 19.0151 30.1849 9.7602 34.8459 5.1664 39.4622 C 1.1328 43.4734 .9535 48.5826 4.6734 52.3025 Z M 6.8023 50.1512 C 4.3821 47.6862 4.5614 44.2129 7.2504 41.5462 C 11.8891 36.9299 21.7042 31.7759 27.0152 26.4650 C 32.7966 20.6834 26.7014 13.4678 33.7602 6.9468 C 37.3233 3.6526 43.4411 3.4061 47.5641 6.5658 L 43.1496 7.7311 C 39.8779 8.5826 38.4437 11.0924 39.4297 14.4986 L 40.0571 16.6723 L 42.5445 25.7927 C 38.6902 26.3529 34.7014 25.6807 30.9815 29.3557 C 25.1552 35.1820 20.0683 45.0644 15.4297 49.7255 C 12.7182 52.4594 9.2224 52.6386 6.8023 50.1512 Z M 32.8639 18.3529 L 37.6818 17.0756 C 38.1076 16.9636 38.3541 16.5378 38.2420 16.0672 C 38.1300 15.6414 37.6818 15.3949 37.2784 15.5070 L 32.4381 16.8067 C 32.0123 16.9187 31.7658 17.3669 31.8779 17.7703 C 32.0123 18.2409 32.3933 18.4874 32.8639 18.3529 Z M 33.4689 20.8179 L 38.2644 19.5406 C 38.6902 19.4285 38.9591 19.0028 38.8247 18.5322 C 38.7126 18.1064 38.2644 17.8823 37.8611 17.9720 L 33.0207 19.2941 C 32.5950 19.3837 32.3485 19.8319 32.4605 20.2353 C 32.5950 20.7059 32.9983 20.9524 33.4689 20.8179 Z M 46.3539 20.7059 L 50.9928 19.4510 C 50.4775 20.6610 49.7376 21.8711 48.6624 22.9243 C 47.3402 24.2016 45.9730 24.9412 44.5613 25.3445 L 43.3066 20.7731 C 44.2029 21.0420 45.2337 21.0196 46.3539 20.7059 Z M 34.0516 23.2829 L 38.9143 21.9832 C 39.3177 21.8711 39.5641 21.4230 39.4745 20.9972 C 39.3625 20.5938 38.9367 20.3249 38.4885 20.4593 L 33.6706 21.7591 C 33.2448 21.8711 32.9983 22.2969 33.0880 22.7227 C 33.1776 23.1933 33.6258 23.3949 34.0516 23.2829 Z M 8.3933 48.6274 C 9.8051 49.9944 12.2252 50.0168 13.5698 48.6050 C 14.9815 47.1260 15.0487 44.7731 13.5922 43.3613 C 12.1356 41.9720 9.7602 41.9047 8.3485 43.3837 C 6.9591 44.8179 6.9367 47.2157 8.3933 48.6274 Z"
  }));
}

var _default = Wrench;
exports["default"] = _default;