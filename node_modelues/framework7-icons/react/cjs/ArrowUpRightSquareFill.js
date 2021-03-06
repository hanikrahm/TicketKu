"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUpRightSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 36.7070 34.3633 C 35.5351 34.3633 34.8085 33.5898 34.8085 32.3711 L 34.8085 27.8945 L 35.1835 23.8633 L 31.4570 27.8477 L 21.9413 37.3398 C 21.5663 37.7383 21.0976 37.9492 20.4648 37.9492 C 19.3163 37.9492 18.5898 37.1992 18.5898 36.0274 C 18.5898 35.4883 18.8241 35.0196 19.1992 34.6445 L 28.7148 25.1289 L 32.7460 21.3555 L 28.9257 21.7774 L 24.2148 21.7774 C 22.9960 21.7774 22.1757 21.0274 22.1757 19.8789 C 22.1757 18.7305 22.9726 18.0039 24.1679 18.0039 L 36.4257 18.0039 C 37.7617 18.0039 38.5820 18.5898 38.5820 20.1367 L 38.5820 32.3008 C 38.5820 33.5196 37.8320 34.3633 36.7070 34.3633 Z"
  }));
}

var _default = ArrowUpRightSquareFill;
exports["default"] = _default;