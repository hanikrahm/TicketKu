"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Printer(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 8.5117 46.2227 L 10.9726 46.2227 L 10.9726 48.8242 C 10.9726 51.9414 12.4960 53.3008 15.4492 53.3008 L 40.5508 53.3008 C 43.5273 53.3008 45.0272 51.9414 45.0272 48.8242 L 45.0272 46.2227 L 47.5117 46.2227 C 52.0588 46.2227 54.4727 43.9258 54.4727 39.3555 L 54.4727 17.4179 C 54.4727 12.8711 52.0588 10.5508 47.5117 10.5508 L 45.1914 10.5508 L 45.1914 9.3086 C 45.1914 4.7383 42.9179 2.6992 38.5586 2.6992 L 17.4414 2.6992 C 13.3398 2.6992 10.8086 4.7383 10.8086 9.3086 L 10.8086 10.5508 L 8.5117 10.5508 C 4.1758 10.5508 1.5273 12.8711 1.5273 17.4179 L 1.5273 39.3555 C 1.5273 43.9258 3.9414 46.2227 8.5117 46.2227 Z M 14.4414 9.0508 C 14.4414 7.0820 15.4492 6.1211 17.3945 6.1211 L 38.6055 6.1211 C 40.5742 6.1211 41.5586 7.0820 41.5586 9.0508 L 41.5586 10.5508 L 14.4414 10.5508 Z M 8.4648 42.7070 C 6.3789 42.7070 5.3008 41.6055 5.3008 39.5430 L 5.3008 17.2305 C 5.3008 15.1679 6.3789 14.0664 8.4648 14.0664 L 47.5588 14.0664 C 49.6208 14.0664 50.6994 15.1679 50.6994 17.2305 L 50.6994 39.5430 C 50.6994 41.6055 49.6208 42.7070 47.5588 42.7070 L 45.0272 42.7070 L 45.0272 28.6445 C 45.0272 25.5274 43.5273 24.1679 40.5508 24.1679 L 15.4492 24.1679 C 12.6367 24.1679 10.9726 25.5274 10.9726 28.6445 L 10.9726 42.7070 Z M 16.6211 49.7852 C 15.3789 49.7852 14.7460 49.1758 14.7460 47.8867 L 14.7460 29.5586 C 14.7460 28.2930 15.3789 27.7070 16.6211 27.7070 L 39.4023 27.7070 C 40.6679 27.7070 41.2539 28.2930 41.2539 29.5586 L 41.2539 47.8867 C 41.2539 49.1758 40.6679 49.7852 39.4023 49.7852 Z M 19.8789 36.1445 L 36.1679 36.1445 C 37.0117 36.1445 37.6211 35.5117 37.6211 34.6679 C 37.6211 33.8711 37.0117 33.2617 36.1679 33.2617 L 19.8789 33.2617 C 19.0351 33.2617 18.4023 33.8711 18.4023 34.6679 C 18.4023 35.5117 19.0351 36.1445 19.8789 36.1445 Z M 19.8789 44.3242 L 36.1679 44.3242 C 37.0117 44.3242 37.6211 43.6914 37.6211 42.8945 C 37.6211 42.0742 37.0117 41.4414 36.1679 41.4414 L 19.8789 41.4414 C 19.0351 41.4414 18.4023 42.0742 18.4023 42.8945 C 18.4023 43.6914 19.0351 44.3242 19.8789 44.3242 Z"
  }));
}

var _default = Printer;
exports["default"] = _default;