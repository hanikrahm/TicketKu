"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Thermometer(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 25.0117 54.0391 C 31.7617 54.0391 37.2461 48.5547 37.2461 41.8047 C 37.2461 38.2422 35.7696 35.125 32.9805 32.5938 C 32.4649 32.125 32.3476 31.8672 32.3476 31.1641 L 32.3945 10.1172 C 32.3945 5.2187 29.4180 1.9609 25.0117 1.9609 C 20.5820 1.9609 17.6055 5.2187 17.6055 10.1172 L 17.6289 31.1641 C 17.6289 31.8672 17.5117 32.125 17.0196 32.5938 C 14.2070 35.125 12.7539 38.2422 12.7539 41.8047 C 12.7539 48.5547 18.2149 54.0391 25.0117 54.0391 Z M 25.0117 50.6407 C 20.1367 50.6407 16.1758 46.6563 16.1758 41.8047 C 16.1758 38.8750 17.5586 36.2266 20.0430 34.5625 C 20.7696 34.0703 21.0508 33.625 21.0508 32.6641 L 21.0508 10.2578 C 21.0508 7.3047 22.6680 5.4063 25.0117 5.4063 C 27.3320 5.4063 28.9258 7.3047 28.9258 10.2578 L 28.9258 32.6641 C 28.9258 33.625 29.2070 34.0703 29.9336 34.5625 C 32.4180 36.2266 33.8008 38.8750 33.8008 41.8047 C 33.8008 46.6563 29.8633 50.6407 25.0117 50.6407 Z M 36.7539 10.5625 L 41.8633 10.5625 C 42.6836 10.5625 43.2461 9.9297 43.2461 9.2031 C 43.2461 8.4766 42.6836 7.8438 41.8633 7.8438 L 36.7539 7.8438 C 35.9336 7.8438 35.3711 8.4766 35.3711 9.2031 C 35.3711 9.9297 35.9336 10.5625 36.7539 10.5625 Z M 36.7539 17.1485 L 41.8633 17.1485 C 42.6836 17.1485 43.2461 16.5156 43.2461 15.7891 C 43.2461 15.0625 42.6836 14.4297 41.8633 14.4297 L 36.7539 14.4297 C 35.9336 14.4297 35.3711 15.0625 35.3711 15.7891 C 35.3711 16.5156 35.9336 17.1485 36.7539 17.1485 Z M 24.9883 47.4766 C 28.1289 47.4766 30.6602 44.9453 30.6602 41.7813 C 30.6602 39.5781 29.4180 37.7734 27.6133 36.7891 C 26.8633 36.3907 26.6055 36.1094 26.6055 34.9609 L 26.6055 22.5156 C 26.6055 21.2969 25.9023 20.5703 24.9883 20.5703 C 24.0976 20.5703 23.3711 21.2969 23.3711 22.5156 L 23.3711 34.9609 C 23.3711 36.1094 23.1133 36.3907 22.3633 36.7891 C 20.5586 37.7734 19.3164 39.5781 19.3164 41.7813 C 19.3164 44.9453 21.8476 47.4766 24.9883 47.4766 Z M 36.7539 23.7344 L 41.8633 23.7344 C 42.6836 23.7344 43.2461 23.1016 43.2461 22.375 C 43.2461 21.6485 42.6836 20.9922 41.8633 20.9922 L 36.7539 20.9922 C 35.9336 20.9922 35.3711 21.6485 35.3711 22.375 C 35.3711 23.1016 35.9336 23.7344 36.7539 23.7344 Z M 36.7539 30.3203 L 41.8633 30.3203 C 42.6836 30.3203 43.2461 29.6641 43.2461 28.9375 C 43.2461 28.2109 42.6836 27.5782 41.8633 27.5782 L 36.7539 27.5782 C 35.9336 27.5782 35.3711 28.2109 35.3711 28.9375 C 35.3711 29.6641 35.9336 30.3203 36.7539 30.3203 Z"
  }));
}

var _default = Thermometer;
exports["default"] = _default;