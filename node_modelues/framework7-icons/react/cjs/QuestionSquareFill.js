"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function QuestionSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 27.5898 33.0508 C 26.3007 33.0508 25.6210 32.3945 25.6210 31.1289 L 25.6210 30.8008 C 25.6210 28.3867 26.9335 27.0742 28.6913 25.8555 C 30.8710 24.3789 31.8788 23.5352 31.8788 21.8477 C 31.8788 19.9961 30.4257 18.7305 28.1992 18.7305 C 26.5585 18.7305 25.3163 19.5508 24.5663 20.8867 C 23.7695 21.8242 23.5351 22.5508 22.1523 22.5508 C 21.3320 22.5508 20.4648 21.9649 20.4648 20.8633 C 20.4648 20.4414 20.5351 20.0430 20.6523 19.6445 C 21.2851 17.3711 24.1210 15.4023 28.3398 15.4023 C 32.5351 15.4023 36.1679 17.5820 36.1679 21.6602 C 36.1679 24.6133 34.4570 26.0196 32.0663 27.6367 C 30.3788 28.7852 29.5585 29.6289 29.5585 31.0118 L 29.5585 31.3164 C 29.5585 32.2774 28.8085 33.0508 27.5898 33.0508 Z M 27.6601 40.1055 C 26.3241 40.1055 25.0351 39.0274 25.0351 37.5742 C 25.0351 36.1211 26.3007 35.0430 27.6601 35.0430 C 29.0429 35.0430 30.2851 36.0977 30.2851 37.5742 C 30.2851 39.0508 29.0195 40.1055 27.6601 40.1055 Z"
  }));
}

var _default = QuestionSquareFill;
exports["default"] = _default;