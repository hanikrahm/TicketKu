"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowRightArrowLeftSquare(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 39.0507 20.6758 C 39.0507 19.7383 38.3944 19.0820 37.4804 19.0820 L 25.3398 19.0820 L 21.7539 19.2461 L 24.3554 17.0664 L 26.1835 15.4727 C 26.4882 15.2149 26.6523 14.8164 26.6523 14.3477 C 26.6523 13.4805 25.9726 12.8242 25.1054 12.8242 C 24.6601 12.8242 24.2851 12.9649 24.0039 13.2461 L 17.6054 19.3398 C 17.1601 19.7617 16.9960 20.2071 16.9960 20.6758 C 16.9960 21.1445 17.1835 21.6602 17.6054 22.0586 L 24.0039 28.1055 C 24.2851 28.3867 24.6601 28.5508 25.1054 28.5508 C 25.9726 28.5508 26.6523 27.8711 26.6523 27.0039 C 26.6523 26.5352 26.4882 26.1133 26.1835 25.8555 L 24.3554 24.3086 L 21.7304 22.1055 L 25.3398 22.2696 L 37.4804 22.2696 C 38.3944 22.2696 39.0507 21.5898 39.0507 20.6758 Z M 39.0507 35.0196 C 39.0507 34.5742 38.8866 34.1289 38.4413 33.7071 L 32.0429 27.5898 C 31.7617 27.3086 31.3866 27.1914 30.9413 27.1914 C 30.0742 27.1914 29.3944 27.8477 29.3944 28.7149 C 29.3944 29.1836 29.5585 29.5820 29.8632 29.8398 L 31.6913 31.4336 L 34.2929 33.5898 L 30.7070 33.4492 L 18.5663 33.4492 C 17.6523 33.4492 16.9960 34.1055 16.9960 35.0196 C 16.9960 35.9571 17.6523 36.6133 18.5663 36.6133 L 30.7070 36.6133 L 34.3398 36.4727 L 31.6913 38.6758 L 29.8632 40.2227 C 29.5585 40.4570 29.3944 40.9024 29.3944 41.3477 C 29.3944 42.2149 30.0742 42.8945 30.9413 42.8945 C 31.3866 42.8945 31.7617 42.7539 32.0429 42.4727 L 38.4413 36.4023 C 38.8632 36.0039 39.0507 35.5118 39.0507 35.0196 Z"
  }));
}

var _default = ArrowRightArrowLeftSquare;
exports["default"] = _default;