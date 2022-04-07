"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Speaker2Fill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 26.0001 49.4510 C 27.5814 49.4510 28.7210 48.2882 28.7210 46.7300 L 28.7210 9.6369 C 28.7210 8.0787 27.5814 6.7765 25.9536 6.7765 C 24.8140 6.7765 24.0466 7.2881 22.8140 8.4509 L 12.5582 18.1486 C 12.3954 18.2881 12.1861 18.3579 11.9535 18.3579 L 5.0465 18.3579 C 1.7674 18.3579 0 20.1486 0 23.6370 L 0 32.6602 C 0 36.1486 1.7674 37.9393 5.0465 37.9393 L 11.9535 37.9393 C 12.1861 37.9393 12.3954 38.0091 12.5582 38.1486 L 22.8140 47.9393 C 23.9303 48.9859 24.8605 49.4510 26.0001 49.4510 Z M 48.4886 44.7068 C 49.3954 45.3114 50.5118 45.0789 51.1629 44.1486 C 54.2325 39.8696 56.0000 34.1719 56.0000 28.2184 C 56.0000 22.2416 54.2559 16.5439 51.1629 12.2648 C 50.4885 11.3578 49.3954 11.1253 48.4886 11.7300 C 47.6046 12.3346 47.4651 13.4741 48.1628 14.4741 C 50.6976 18.1951 52.2560 23.0788 52.2560 28.2184 C 52.2560 33.3579 50.7442 38.2882 48.1395 41.9626 C 47.4884 42.9626 47.6046 44.1021 48.4886 44.7068 Z M 39.2094 38.4277 C 40.0001 38.9858 41.1396 38.7998 41.8140 37.8928 C 43.6281 35.4510 44.7212 31.8695 44.7212 28.2184 C 44.7212 24.5672 43.6048 21.0090 41.8140 18.5207 C 41.1396 17.6137 40.0234 17.4277 39.2094 17.9858 C 38.1862 18.6602 38.0699 19.8463 38.8140 20.8695 C 40.1629 22.6835 40.9768 25.4509 40.9768 28.2184 C 40.9768 30.9858 40.1164 33.7533 38.7908 35.5905 C 38.0931 36.5905 38.2094 37.7300 39.2094 38.4277 Z"
  }));
}

var _default = Speaker2Fill;
exports["default"] = _default;