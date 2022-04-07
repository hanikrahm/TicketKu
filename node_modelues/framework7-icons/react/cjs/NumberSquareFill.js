"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function NumberSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 21.6835 39.9883 C 20.6757 39.9883 19.9257 39.1211 20.1366 38.1367 L 21.1210 33.2617 L 18.9179 33.2617 C 18.0976 33.2617 17.5351 32.6523 17.5351 31.8320 C 17.5351 30.8711 18.2148 30.1680 19.1757 30.1680 L 21.8007 30.1680 L 22.8320 25.1758 L 20.6757 25.1758 C 19.8554 25.1758 19.2695 24.5664 19.2695 23.7227 C 19.2695 22.7852 19.9726 22.0586 20.9101 22.0586 L 23.4882 22.0586 L 24.5663 17.0196 C 24.7304 16.0820 25.3398 15.6133 26.3241 15.6133 C 27.3554 15.6133 28.0585 16.4805 27.8476 17.4649 L 26.9101 22.0586 L 31.4804 22.0586 L 32.5351 17.0196 C 32.7226 16.0820 33.3554 15.6133 34.3163 15.6133 C 35.3241 15.6133 36.0742 16.4571 35.8632 17.4649 L 34.9257 22.0586 L 37.1054 22.0586 C 37.9023 22.0586 38.4882 22.6680 38.4882 23.5118 C 38.4882 24.4727 37.8085 25.1758 36.8476 25.1758 L 34.2695 25.1758 L 33.2148 30.1680 L 35.3476 30.1680 C 36.1679 30.1680 36.7539 30.7774 36.7539 31.5977 C 36.7539 32.5586 36.0507 33.2617 35.1132 33.2617 L 32.5585 33.2617 L 31.4335 38.5586 C 31.2460 39.4961 30.6132 39.9883 29.6288 39.9883 C 28.6210 39.9883 27.9179 39.1211 28.1288 38.1367 L 29.1132 33.2852 L 24.5429 33.2852 L 23.4413 38.5586 C 23.2539 39.4961 22.6444 39.9883 21.6835 39.9883 Z M 24.9882 30.4492 L 29.9335 30.4492 L 31.0820 24.9414 L 26.1366 24.9414 Z"
  }));
}

var _default = NumberSquareFill;
exports["default"] = _default;