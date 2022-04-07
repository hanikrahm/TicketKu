"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Helm(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 10.5461 47.8026 L 13.8389 44.5099 C 17.2468 47.4572 21.5987 49.3684 26.3422 49.7369 L 26.3422 54.3421 C 26.3422 55.2632 27.0560 56 27.9770 56 C 28.9211 56 29.6349 55.2632 29.6349 54.3421 L 29.6349 49.7369 C 34.4014 49.3684 38.7303 47.4572 42.1612 44.5099 L 45.4540 47.8026 C 46.1218 48.4474 47.1578 48.4704 47.7799 47.8026 C 48.4476 47.1579 48.4476 46.1217 47.7799 45.4540 L 44.4868 42.1612 C 47.4111 38.7303 49.2993 34.4013 49.6676 29.6579 L 54.3423 29.6579 C 55.2633 29.6579 55.9999 28.9210 55.9999 28 C 55.9999 27.0790 55.2633 26.3651 54.3423 26.3651 L 49.6676 26.3651 C 49.2993 21.5987 47.4111 17.2697 44.4868 13.8388 L 47.7799 10.5461 C 48.4476 9.8783 48.4476 8.8421 47.8025 8.1974 C 47.1578 7.5526 46.1218 7.5526 45.4540 8.1974 L 42.1612 11.4902 C 38.7303 8.5428 34.4014 6.6316 29.6349 6.2862 L 29.6349 1.6579 C 29.6349 .7368 28.9211 -2.9976e-15 27.9770 -2.9976021664879227e-15 C 27.0560 -2.9976e-15 26.3422 .7368 26.3422 1.6578829473684213 L 26.3422 6.2862 C 21.5987 6.6316 17.2468 8.5428 13.8389 11.4902 L 10.5461 8.1974 C 9.8553 7.5526 8.8421 7.5526 8.1744 8.1974 C 7.5296 8.8421 7.5527 9.8783 8.1974 10.5461 L 11.4902 13.8388 C 8.5658 17.2697 6.6777 21.5987 6.3092 26.3651 L 1.6349 26.3651 C .7139 26.3651 .1 27.0790 .1 28 C .1 28.9210 .7139 29.6579 1.6349 29.6579 L 6.3092 29.6579 C 6.6777 34.4013 8.5658 38.7303 11.4902 42.1612 L 8.1974 45.4540 C 7.5527 46.1217 7.5296 47.1579 8.1974 47.8026 C 8.8421 48.4704 9.8553 48.4474 10.5461 47.8026 Z M 29.6349 10.0395 C 33.4112 10.3849 36.8191 11.8586 39.5132 14.1382 L 29.6349 24.0165 Z M 16.4639 14.1382 C 19.1810 11.8586 22.5889 10.3849 26.3422 10.0395 L 26.3422 24.0165 Z M 10.2007 26.3651 C 10.5231 22.6118 11.9507 19.2270 14.1612 16.5099 L 23.9935 26.3651 Z M 31.9836 26.3651 L 41.8389 16.5099 C 44.0266 19.2270 45.4540 22.6118 45.7766 26.3651 Z M 10.2007 29.6579 L 23.9935 29.6579 L 14.1612 39.4902 C 11.9507 36.7961 10.5231 33.3882 10.2007 29.6579 Z M 31.9836 29.6579 L 45.7766 29.6579 C 45.4540 33.3882 44.0266 36.7961 41.8389 39.4902 Z M 16.4639 41.8619 L 26.3422 31.9836 L 26.3422 45.9605 C 22.5889 45.6151 19.1810 44.1415 16.4639 41.8619 Z M 29.6349 31.9836 L 39.5132 41.8619 C 36.8191 44.1415 33.4112 45.6151 29.6349 45.9605 Z"
  }));
}

var _default = Helm;
exports["default"] = _default;