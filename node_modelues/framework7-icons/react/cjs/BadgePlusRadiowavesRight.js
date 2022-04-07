"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BadgePlusRadiowavesRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 46.8997 50.8082 C 47.7107 51.3713 48.8368 51.1460 49.4901 50.2225 C 53.6126 44.3206 56 36.7293 56 28.6874 C 56 20.6456 53.5900 13.0317 49.4901 7.1298 C 48.8368 6.2062 47.7333 5.9810 46.8997 6.5667 C 46.0434 7.1523 45.9083 8.2786 46.5615 9.2248 C 50.1659 14.5635 52.4186 21.4114 52.4186 28.6874 C 52.4186 35.9634 50.2559 42.9015 46.5394 48.1501 C 45.8861 49.0736 46.0213 50.2000 46.8997 50.8082 Z M 37.7990 44.6585 C 38.6775 45.2442 39.7588 45.0189 40.3895 44.1179 C 43.3857 39.9731 45.0977 34.4541 45.0977 28.6874 C 45.0977 22.8982 43.4078 17.3793 40.3895 13.2344 C 39.7363 12.3559 38.6775 12.1306 37.7990 12.7163 C 36.9656 13.3020 36.8304 14.4058 37.5062 15.3744 C 39.9390 18.9786 41.4708 23.7091 41.4708 28.6874 C 41.4708 33.6657 40.0066 38.4413 37.4836 42.0004 C 36.8304 42.9690 36.9656 44.0728 37.7990 44.6585 Z M 11.6911 40.3560 C 18.0210 40.3560 23.3597 35.0624 23.3597 28.6874 C 23.3597 22.2900 18.0886 16.9963 11.6911 16.9963 C 5.2937 16.9963 0 22.2900 0 28.6874 C 0 35.1074 5.2937 40.3560 11.6911 40.3560 Z M 28.8111 38.5764 C 29.5995 39.1170 30.6807 38.9368 31.3340 38.0583 C 33.1135 35.6931 34.1497 32.2240 34.1497 28.6874 C 34.1497 25.1508 33.0910 21.7043 31.3340 19.2940 C 30.6807 18.4155 29.5995 18.2353 28.8111 18.7759 C 27.8424 19.4291 27.7073 20.5780 28.4506 21.5691 C 29.7346 23.3262 30.5230 26.0068 30.5230 28.6874 C 30.5230 31.3681 29.7121 34.0487 28.4281 35.8282 C 27.7298 36.7968 27.8649 37.9006 28.8111 38.5764 Z M 11.6911 36.2788 C 10.8802 36.2788 10.2044 35.7156 10.2044 34.8596 L 10.2044 30.0615 L 5.7667 30.0615 C 5.0008 30.0615 4.3701 29.4308 4.3701 28.6649 C 4.3701 27.9215 5.0008 27.2682 5.7667 27.2682 L 10.2044 27.2682 L 10.2044 22.4927 C 10.2044 21.6367 10.8802 21.0961 11.6911 21.0961 C 12.4795 21.0961 13.1779 21.6367 13.1779 22.4927 L 13.1779 27.2682 L 17.5930 27.2682 C 18.3814 27.2682 18.9896 27.9215 18.9896 28.6649 C 18.9896 29.4308 18.3814 30.0615 17.5930 30.0615 L 13.1779 30.0615 L 13.1779 34.8596 C 13.1779 35.7156 12.4795 36.2788 11.6911 36.2788 Z"
  }));
}

var _default = BadgePlusRadiowavesRight;
exports["default"] = _default;