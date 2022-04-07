"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MapPinEllipse(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9883 43.1992 C 28.9492 43.1992 30.1680 39.4492 30.1680 32.5352 L 30.1680 21.4961 C 33.9883 20.5117 36.8008 17.0430 36.8008 12.9180 C 36.8008 8.0664 32.8867 4.1055 27.9883 4.1055 C 23.1133 4.1055 19.1992 8.0664 19.1992 12.9180 C 19.1992 17.0430 21.9883 20.5117 25.8086 21.4726 L 25.8086 32.5352 C 25.8086 39.4258 27.0508 43.1992 27.9883 43.1992 Z M 25.4805 13.4102 C 23.8867 13.4102 22.4805 12.0039 22.4805 10.3867 C 22.4805 8.7461 23.8867 7.3633 25.4805 7.3633 C 27.1211 7.3633 28.4805 8.7461 28.4805 10.3867 C 28.4805 12.0039 27.1211 13.4102 25.4805 13.4102 Z M 27.9883 51.8945 C 42.1680 51.8945 50.3711 46.9727 50.3711 41.7461 C 50.3711 35.4414 40.3399 31.6211 33.8711 31.5977 L 33.8711 35.2539 C 38.3711 35.2774 45.3789 37.7148 45.3789 41.1836 C 45.3789 44.8633 38.7696 47.9570 27.9883 47.9570 C 17.2305 47.9570 10.6211 44.8867 10.6211 41.1836 C 10.6211 37.7148 17.6289 35.2774 22.1289 35.2539 L 22.1289 31.5977 C 15.6602 31.6211 5.6289 35.4414 5.6289 41.7461 C 5.6289 46.9727 13.8321 51.8945 27.9883 51.8945 Z"
  }));
}

var _default = MapPinEllipse;
exports["default"] = _default;