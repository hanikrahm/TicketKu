"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TrayFull(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.7148 48.0039 L 48.2852 48.0039 C 53.1836 48.0039 55.6446 45.5664 55.6446 40.7383 L 55.6446 26.8633 C 55.6446 24.7539 55.3398 23.6992 54.3088 22.4102 L 46.1992 12.4023 C 43.4569 9.0274 42.2382 7.9961 38.0898 7.9961 L 17.9101 7.9961 C 13.7617 7.9961 12.5429 9.0274 9.8007 12.4023 L 1.6913 22.4102 C .6601 23.6992 .3554 24.7539 .3554 26.8633 L .3554 40.7383 C .3554 45.5898 2.8398 48.0039 7.7148 48.0039 Z M 27.9882 33.0274 C 24.6835 33.0274 22.5507 30.1445 22.5507 27.4258 L 22.5507 27.3555 C 22.5507 26.3711 21.9648 25.4570 20.7695 25.4570 L 5.3007 25.4570 C 4.5273 25.4570 4.3632 24.7774 4.7617 24.2852 L 13.4570 13.3164 C 14.6288 11.8633 15.9413 11.2774 17.6523 11.2774 L 38.3476 11.2774 C 40.0585 11.2774 41.3710 11.8633 42.5430 13.3164 L 51.2382 24.2852 C 51.6366 24.7774 51.4724 25.4570 50.6992 25.4570 L 35.2304 25.4570 C 34.0351 25.4570 33.4492 26.3711 33.4492 27.3555 L 33.4492 27.4258 C 33.4492 30.1445 31.3163 33.0274 27.9882 33.0274 Z M 37.8554 14.7227 L 18.1679 14.7227 C 17.5117 14.7227 17.0429 15.2149 17.0429 15.8477 C 17.0429 16.4805 17.5117 16.9727 18.1679 16.9727 L 37.8554 16.9727 C 38.4882 16.9727 38.9570 16.4805 38.9570 15.8477 C 38.9570 15.2149 38.4882 14.7227 37.8554 14.7227 Z M 40.9726 20.0196 L 15.0507 20.0196 C 14.3710 20.0196 13.8788 20.6055 13.8788 21.2383 C 13.8788 21.8711 14.3710 22.4102 15.0507 22.4102 L 40.9726 22.4102 C 41.6288 22.4102 42.1210 21.8711 42.1210 21.2383 C 42.1210 20.6055 41.6288 20.0196 40.9726 20.0196 Z M 7.7851 44.2305 C 5.4413 44.2305 4.1288 42.9883 4.1288 40.5508 L 4.1288 28.8789 L 18.9882 28.8789 C 19.5741 33.2617 23.2304 36.4961 27.9882 36.4961 C 32.7460 36.4961 36.4257 33.2383 36.9882 28.8789 L 51.8708 28.8789 L 51.8708 40.5508 C 51.8708 42.9883 50.5350 44.2305 48.2147 44.2305 Z"
  }));
}

var _default = TrayFull;
exports["default"] = _default;