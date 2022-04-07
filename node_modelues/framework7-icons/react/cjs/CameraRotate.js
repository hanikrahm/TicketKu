"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CameraRotate(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.8086 50.3477 L 48.1914 50.3477 C 53.0663 50.3477 55.5508 47.9102 55.5508 43.0820 L 55.5508 18.5430 C 55.5508 13.7149 53.0663 11.3008 48.1914 11.3008 L 42.7069 11.3008 C 40.8789 11.3008 40.3164 10.9258 39.2617 9.7539 L 37.3633 7.6445 C 36.2149 6.3555 35.0196 5.6523 32.5820 5.6523 L 23.2539 5.6523 C 20.8398 5.6523 19.6445 6.3555 18.4727 7.6445 L 16.5742 9.7539 C 15.5430 10.9023 14.9571 11.3008 13.1289 11.3008 L 7.8086 11.3008 C 2.9336 11.3008 .4492 13.7149 .4492 18.5430 L .4492 43.0820 C .4492 47.9102 2.9336 50.3477 7.8086 50.3477 Z M 7.8789 46.5742 C 5.5586 46.5742 4.2227 45.3320 4.2227 42.8945 L 4.2227 18.7539 C 4.2227 16.3164 5.5586 15.0742 7.8789 15.0742 L 14.0664 15.0742 C 16.1758 15.0742 17.3008 14.6758 18.4727 13.3633 L 20.3242 11.3008 C 21.6602 9.8008 22.3398 9.4258 24.4258 9.4258 L 31.4102 9.4258 C 33.4961 9.4258 34.1758 9.8008 35.5117 11.3008 L 37.3633 13.3633 C 38.5352 14.6758 39.6602 15.0742 41.7696 15.0742 L 48.1213 15.0742 C 50.4416 15.0742 51.7775 16.3164 51.7775 18.7539 L 51.7775 42.8945 C 51.7775 45.3320 50.4416 46.5742 48.1213 46.5742 Z M 28.0117 16.6914 C 25.1992 16.6914 22.3164 17.6992 20.3711 19.3398 C 19.2930 20.1836 19.0117 21.3555 19.8086 22.1992 C 20.6055 23.0430 21.6367 22.9258 22.5039 22.2461 C 24.1445 20.9336 25.8086 20.2773 28.0117 20.2773 C 32.5586 20.2773 36.3320 23.3476 37.3398 27.3555 L 34.7852 27.3555 C 33.7305 27.3555 33.4727 28.3633 34.0820 29.1602 L 37.7617 34.2930 C 38.3711 35.1367 39.4258 35.2071 40.0586 34.2930 L 43.6914 29.1602 C 44.2775 28.3398 44.0428 27.3555 42.9882 27.3555 L 40.7149 27.3555 C 39.6133 21.0508 34.5039 16.6914 28.0117 16.6914 Z M 12.9414 31.4805 L 15.3555 31.4805 C 16.4805 37.7852 21.5898 42.1445 28.0586 42.1445 C 30.8945 42.1445 33.7305 41.1602 35.7227 39.5195 C 36.8008 38.6758 37.0820 37.4805 36.2852 36.6367 C 35.4883 35.7930 34.4571 35.9336 33.5430 36.5898 C 31.9024 37.8789 30.2617 38.5820 28.0586 38.5820 C 23.5352 38.5820 19.7383 35.5117 18.7539 31.4805 L 21.1680 31.4805 C 22.1992 31.4805 22.4805 30.4961 21.8711 29.6758 L 18.1914 24.5664 C 17.5820 23.7227 16.5274 23.6523 15.8945 24.5664 L 12.2617 29.6758 C 11.6758 30.4961 11.9102 31.4805 12.9414 31.4805 Z"
  }));
}

var _default = CameraRotate;
exports["default"] = _default;