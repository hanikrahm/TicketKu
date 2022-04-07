"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CameraRotateFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.8086 50.3477 L 48.1914 50.3477 C 53.0663 50.3477 55.5508 47.9102 55.5508 43.0820 L 55.5508 18.5430 C 55.5508 13.7149 53.0663 11.3008 48.1914 11.3008 L 42.7069 11.3008 C 40.8789 11.3008 40.3164 10.9258 39.2617 9.7539 L 37.3633 7.6445 C 36.2149 6.3555 35.0196 5.6523 32.5820 5.6523 L 23.2539 5.6523 C 20.8398 5.6523 19.6445 6.3555 18.4727 7.6445 L 16.5742 9.7539 C 15.5430 10.9023 14.9571 11.3008 13.1289 11.3008 L 7.8086 11.3008 C 2.9336 11.3008 .4492 13.7149 .4492 18.5430 L .4492 43.0820 C .4492 47.9102 2.9336 50.3477 7.8086 50.3477 Z M 37.9258 37.5976 L 33.5196 31.7852 C 32.9102 30.9883 33.3086 29.9571 34.2461 29.9571 L 37.4102 29.9571 C 37.4102 24.2383 33.4961 20.2539 27.9883 20.2539 C 26.2539 20.2539 24.8476 20.6758 23.4180 21.4492 C 21.8242 22.2227 20.6055 21.3086 20.6055 20.1602 C 20.6055 19.5976 20.8633 18.9649 21.5430 18.5430 C 23.0430 17.6289 25.3867 16.8320 27.9883 16.8320 C 35.4649 16.8320 40.8789 22.2695 40.8789 29.9571 L 43.6679 29.9571 C 44.6288 29.9571 44.9807 30.9649 44.3711 31.7852 L 39.9414 37.5976 C 39.4492 38.2539 38.4649 38.2773 37.9258 37.5976 Z M 27.9883 42.5898 C 20.5117 42.5898 15.1211 36.8945 15.1211 29.4649 L 12.3320 29.4649 C 11.3476 29.4649 11.0196 28.4336 11.6289 27.6133 L 16.0586 21.8008 C 16.5508 21.1680 17.5352 21.1211 18.0508 21.8008 L 22.4805 27.6133 C 23.0898 28.4336 22.6914 29.4649 21.7305 29.4649 L 18.5664 29.4649 C 18.5664 34.9023 22.4805 39.1445 27.9883 39.1445 C 29.7461 39.1445 31.1758 38.7227 32.5586 37.9727 C 34.1992 37.1523 35.3711 38.1367 35.3711 39.3320 C 35.3711 39.8945 35.0898 40.4336 34.4336 40.8789 C 32.9571 41.8398 30.5664 42.5898 27.9883 42.5898 Z"
  }));
}

var _default = CameraRotateFill;
exports["default"] = _default;