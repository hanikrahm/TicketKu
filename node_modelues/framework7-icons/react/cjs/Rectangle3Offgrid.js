"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Rectangle3Offgrid(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 4.5209 28.3552 L 22.6045 28.3552 C 25.6315 28.3552 27.1450 26.9006 27.1450 23.8736 L 27.1450 15.7360 C 27.1450 12.7286 25.6315 11.2740 22.6045 11.2740 L 4.5209 11.2740 C 1.5135 11.2740 0 12.7286 0 15.7360 L 0 23.8736 C 0 26.9006 1.5135 28.3552 4.5209 28.3552 Z M 38.6438 44.8663 L 51.4793 44.8663 C 54.5065 44.8663 56 43.4118 56 40.3847 L 56 18.5468 C 56 15.5394 54.5065 14.0849 51.4793 14.0849 L 38.6438 14.0849 C 35.6367 14.0849 34.1230 15.5394 34.1230 18.5468 L 34.1230 40.3847 C 34.1230 43.4118 35.6367 44.8663 38.6438 44.8663 Z M 4.7568 25.3871 C 3.5970 25.3871 2.9681 24.7974 2.9681 23.5788 L 2.9681 16.0701 C 2.9681 14.8318 3.5970 14.2421 4.7568 14.2421 L 22.3686 14.2421 C 23.5480 14.2421 24.1770 14.8318 24.1770 16.0701 L 24.1770 23.5788 C 24.1770 24.7974 23.5480 25.3871 22.3686 25.3871 Z M 38.8797 41.8982 C 37.7199 41.8982 37.0911 41.2889 37.0911 40.0702 L 37.0911 18.8809 C 37.0911 17.6426 37.7199 17.0529 38.8797 17.0529 L 51.2434 17.0529 C 52.4229 17.0529 53.0319 17.6426 53.0319 18.8809 L 53.0319 40.0702 C 53.0319 41.2889 52.4229 41.8982 51.2434 41.8982 Z M 9.5528 47.3233 L 25.0419 47.3233 C 28.0492 47.3233 29.5628 45.8688 29.5628 42.8417 L 29.5628 37.2987 C 29.5628 34.2913 28.0492 32.8368 25.0419 32.8368 L 9.5528 32.8368 C 6.5258 32.8368 5.0320 34.2913 5.0320 37.2987 L 5.0320 42.8417 C 5.0320 45.8688 6.5258 47.3233 9.5528 47.3233 Z M 9.7691 44.3553 C 8.6290 44.3553 8.0000 43.7459 8.0000 42.5272 L 8.0000 37.6329 C 8.0000 36.3945 8.6290 35.8048 9.7691 35.8048 L 24.8060 35.8048 C 25.9657 35.8048 26.5947 36.3945 26.5947 37.6329 L 26.5947 42.5272 C 26.5947 43.7459 25.9657 44.3553 24.8060 44.3553 Z"
  }));
}

var _default = Rectangle3Offgrid;
exports["default"] = _default;