"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CropRotate(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 37.2924 10.2001 L 37.2924 7.4771 L 37.8504 7.4771 C 42.8500 7.4771 45.9970 10.9589 45.9970 15.8693 C 45.9970 18.8378 45.0820 19.9537 45.0373 20.7796 C 44.9926 21.3822 45.2382 21.7616 45.7292 22.0072 C 46.4211 22.3419 47.2468 22.0295 47.6262 21.3822 C 48.3183 20.1993 48.7868 18.2352 48.7868 15.8470 C 48.7868 9.3073 44.4346 4.9103 37.8727 4.9103 L 37.2924 4.9103 L 37.2924 1.9864 C 37.2924 .4687 35.8863 0 34.6587 .8482 L 28.5877 4.9549 C 27.8065 5.4906 27.7842 6.6959 28.5877 7.2316 L 34.6587 11.3161 C 35.8639 12.1419 37.2924 11.6732 37.2924 10.2001 Z M 22.3829 38.4568 L 34.7033 38.4568 L 34.7033 48.0988 C 34.7033 49.1925 35.4175 49.9513 36.4889 49.9513 C 37.5825 49.9513 38.2968 49.1925 38.2968 48.0988 L 38.2968 38.4568 L 47.8049 38.4568 C 48.8316 38.4568 49.5461 37.7871 49.5461 36.7604 C 49.5461 35.7561 48.8316 35.0865 47.8049 35.0865 L 38.2968 35.0865 L 38.2968 22.9892 C 38.2968 19.3511 36.8013 17.8557 33.1632 17.8557 L 20.8428 17.8557 L 20.8428 8.3475 C 20.8428 7.2539 20.1286 6.4950 19.0573 6.4950 C 17.9859 6.4950 17.2493 7.2539 17.2493 8.3475 L 17.2493 17.8557 L 7.6296 17.8557 C 6.5805 17.8557 5.8663 18.5253 5.8663 19.5520 C 5.8663 20.5564 6.5805 21.2260 7.6296 21.2260 L 17.2493 21.2260 L 17.2493 33.3232 C 17.2493 36.9613 18.7448 38.4568 22.3829 38.4568 Z M 22.9409 35.0865 C 21.3785 35.0865 20.8428 34.5508 20.8428 32.9884 L 20.8428 21.2260 L 32.6052 21.2260 C 34.1676 21.2260 34.7033 21.7616 34.7033 23.3240 L 34.7033 35.0865 Z M 18.2761 45.7999 L 18.2761 48.8131 L 17.6957 48.8131 C 12.7185 48.8131 9.5491 45.3312 9.5491 40.4209 C 9.5491 37.4524 10.4642 36.3364 10.5311 35.5329 C 10.5534 34.9079 10.3303 34.5285 9.8169 34.2830 C 9.1250 33.9482 8.3215 34.2607 7.9197 34.9079 C 7.2501 36.0909 6.7591 38.0550 6.7591 40.4432 C 6.7591 46.9828 11.1114 51.3798 17.6734 51.3798 L 18.2761 51.3798 L 18.2761 54.0136 C 18.2761 55.5313 19.6599 56 20.9098 55.1518 L 26.9584 51.0450 C 27.7619 50.5093 27.7619 49.3041 26.9584 48.7684 L 20.9098 44.6839 C 19.6822 43.8581 18.2761 44.3268 18.2761 45.7999 Z"
  }));
}

var _default = CropRotate;
exports["default"] = _default;