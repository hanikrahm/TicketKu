"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CloudBoltRain(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 12.2617 35.8633 L 41.3476 35.8633 C 49.0352 35.8633 54.7539 30.0274 54.7539 22.7852 C 54.7539 15.3321 48.6603 9.8711 40.7148 9.8711 C 37.7851 4.0821 32.3476 .3555 25.5742 .3555 C 16.7617 .3555 9.4960 7.2461 8.7226 15.9648 C 4.4804 17.1836 1.2461 20.8867 1.2461 25.8321 C 1.2461 31.3633 5.2773 35.8633 12.2617 35.8633 Z M 12.2148 32.0899 C 7.4101 32.0899 4.9960 29.4180 4.9960 25.9492 C 4.9960 23.1133 6.6367 20.5821 10.6211 19.5274 C 11.9101 19.1992 12.3789 18.5899 12.4960 17.2539 C 13.0351 9.6133 18.7773 4.1055 25.5742 4.1055 C 30.8476 4.1055 34.9960 6.9883 37.5273 12.1914 C 38.0664 13.3164 38.7695 13.7148 40.1523 13.7148 C 47.0898 13.7148 51.0037 17.9102 51.0037 22.9024 C 51.0037 28.0117 46.9256 32.0899 41.5820 32.0899 Z M 23.5586 55.5508 C 23.7695 55.6445 24.0273 55.5742 24.2382 55.3164 L 34.1523 45.2852 C 34.6445 44.7695 34.4804 44.1602 33.8007 44.1602 L 29.1367 44.1602 L 31.2929 40.0820 C 31.5742 39.5899 31.3633 39.2149 30.8476 39.2149 L 25.9492 39.2149 C 25.2929 39.2149 25.0820 39.4492 24.8711 39.9180 L 21.8711 46.7383 C 21.6367 47.2774 21.8945 47.6289 22.4804 47.6289 L 26.3945 47.6289 L 23.3945 54.8945 C 23.2538 55.1758 23.3242 55.4570 23.5586 55.5508 Z M 7.1289 47.3945 C 7.8086 47.7930 8.6523 47.5586 9.0507 46.8555 L 12.1211 41.5820 C 12.5429 40.8555 12.3086 40.0352 11.6054 39.6367 C 10.9023 39.2149 10.1054 39.4492 9.6601 40.1758 L 6.5898 45.4961 C 6.1914 46.1758 6.4023 46.9961 7.1289 47.3945 Z M 39.7070 47.3945 C 40.4101 47.7930 41.2538 47.5586 41.6523 46.8555 L 44.6992 41.5820 C 45.1208 40.8555 44.8867 40.0352 44.1836 39.6367 C 43.4804 39.2149 42.6836 39.4492 42.2617 40.1758 L 39.1914 45.4961 C 38.7929 46.1758 38.9804 46.9961 39.7070 47.3945 Z M 11.6758 53.9570 C 12.3554 54.3555 13.1992 54.1211 13.5976 53.4180 L 16.6445 48.1211 C 17.0898 47.4180 16.8554 46.5977 16.1523 46.1758 C 15.4492 45.7774 14.6523 46.0117 14.2070 46.7148 L 11.1367 52.0586 C 10.7382 52.7148 10.9492 53.5352 11.6758 53.9570 Z M 44.2538 53.9570 C 44.9570 54.3555 45.8005 54.1211 46.1994 53.4180 L 49.2459 48.1211 C 49.6679 47.4180 49.4336 46.5977 48.7304 46.1758 C 48.0272 45.7774 47.2304 46.0117 46.8085 46.7148 L 43.7148 52.0586 C 43.3398 52.7148 43.5273 53.5352 44.2538 53.9570 Z"
  }));
}

var _default = CloudBoltRain;
exports["default"] = _default;