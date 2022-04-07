"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowRightArrowLeft(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 50.1484 16.3633 C 50.1484 15.1446 49.2815 14.2539 48.0628 14.2539 L 17.6641 14.2539 L 12.1563 14.5117 L 16.6095 10.7148 L 23.3595 4.1055 C 23.7344 3.7539 23.9220 3.2852 23.9220 2.6758 C 23.9220 1.4805 23.1016 .6133 21.8595 .6133 C 21.3438 .6133 20.7344 .8711 20.3360 1.2695 L 6.5548 14.7930 C 6.0860 15.2383 5.8516 15.7774 5.8516 16.3633 C 5.8516 16.9258 6.0860 17.4648 6.5548 17.9102 L 20.3360 31.4570 C 20.7344 31.8555 21.3438 32.0899 21.8595 32.0899 C 23.1016 32.0899 23.9220 31.2461 23.9220 30.0274 C 23.9220 29.4180 23.7344 28.9726 23.3595 28.5977 L 16.6095 22.0117 L 12.1563 18.2148 L 17.6641 18.4492 L 48.0628 18.4492 C 49.2815 18.4492 50.1484 17.5821 50.1484 16.3633 Z M 50.1484 39.6367 C 50.1484 39.0508 49.9376 38.5117 49.4452 38.0664 L 35.6641 24.5430 C 35.2657 24.1446 34.6563 23.8867 34.1641 23.8867 C 32.8985 23.8867 32.0782 24.7539 32.0782 25.9726 C 32.0782 26.5586 32.2891 27.0274 32.6641 27.4024 L 39.4141 33.9883 L 43.8438 37.7852 L 38.3595 37.5508 L 7.9376 37.5508 C 6.7422 37.5508 5.8516 38.4180 5.8516 39.6367 C 5.8516 40.8555 6.7422 41.7227 7.9376 41.7227 L 38.3595 41.7227 L 43.8438 41.4883 L 39.4141 45.2852 L 32.6641 51.8711 C 32.2891 52.2461 32.0782 52.7148 32.0782 53.3008 C 32.0782 54.5195 32.8985 55.3867 34.1641 55.3867 C 34.6563 55.3867 35.2657 55.1289 35.6641 54.7305 L 49.4452 41.2070 C 49.9376 40.7617 50.1484 40.2227 50.1484 39.6367 Z"
  }));
}

var _default = ArrowRightArrowLeft;
exports["default"] = _default;