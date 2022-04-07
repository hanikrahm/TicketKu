"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PhoneArrowUpRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 33.1679 24.6133 C 33.6367 24.6133 34.0351 24.4492 34.3867 24.0976 L 44.4648 13.9726 L 48.0740 10.0820 L 47.6756 16.9492 L 47.6756 20.4414 C 47.6756 21.3555 48.3788 22.0586 49.2927 22.1055 C 50.2306 22.1524 51.0274 21.4024 51.0274 20.4414 L 51.0274 6.8711 C 51.0274 5.6289 50.4178 4.9961 49.1756 4.9961 L 35.5585 4.9961 C 34.5976 4.9961 33.8476 5.7929 33.8945 6.7539 C 33.9413 7.6680 34.6445 8.3476 35.5585 8.3476 L 39.1210 8.3476 L 46.0116 7.9726 L 42.0742 11.5586 L 31.9726 21.6836 C 31.5976 22.0586 31.4101 22.4805 31.4101 22.9726 C 31.4101 23.8867 32.1835 24.6133 33.1679 24.6133 Z M 39.0507 51.0039 C 43.1289 51.0039 45.8242 49.9024 48.2146 47.2305 C 48.4023 47.0430 48.5664 46.8320 48.7536 46.6445 C 50.1600 45.0742 50.8162 43.5273 50.8162 42.0508 C 50.8162 40.3633 49.8322 38.7929 47.7461 37.3398 L 40.9257 32.6055 C 38.8163 31.1524 36.3554 30.9883 34.3867 32.9336 L 32.5820 34.7383 C 32.0429 35.2773 31.5742 35.3008 31.0351 34.9726 C 29.7929 34.1758 27.2382 31.9492 25.5038 30.2148 C 23.6757 28.4102 21.8945 26.3945 20.9804 24.9180 C 20.6523 24.3789 20.6991 23.9336 21.2382 23.3945 L 23.0194 21.5898 C 24.9882 19.6211 24.8242 17.1367 23.3710 15.0508 L 18.6132 8.2305 C 17.1835 6.1445 15.6132 5.1836 13.9257 5.1602 C 12.4491 5.1367 10.9023 5.8164 9.3320 7.2226 C 9.1210 7.4102 8.9335 7.5742 8.7226 7.7383 C 6.0742 10.1289 4.9726 12.8242 4.9726 16.8789 C 4.9726 23.5820 9.0976 31.7383 16.6679 39.3086 C 24.1913 46.8320 32.371 51.0039 39.0507 51.0039 Z M 39.0742 47.3945 C 33.0976 47.5117 25.4335 42.9180 19.3632 36.8711 C 13.2460 30.7773 8.4413 22.8555 8.5585 16.8789 C 8.6054 14.3008 9.4960 12.0742 11.3476 10.4805 C 11.4882 10.3398 11.6289 10.2226 11.7929 10.1055 C 12.4726 9.4961 13.2460 9.1680 13.9023 9.1680 C 14.6054 9.1680 15.2148 9.4258 15.6601 10.1289 L 20.2070 16.9492 C 20.6991 17.6758 20.7460 18.4961 20.0194 19.2226 L 17.9569 21.2851 C 16.3163 22.9024 16.4569 24.8711 17.6289 26.4414 C 18.9648 28.2461 21.2851 30.8711 23.0663 32.6524 C 24.8710 34.4570 27.7070 36.9883 29.5116 38.3476 C 31.0820 39.5195 33.0742 39.6367 34.6913 38.0195 L 36.7538 35.9570 C 37.4804 35.2305 38.2773 35.2773 39.0038 35.7461 L 45.8242 40.2930 C 46.5273 40.7617 46.8085 41.3476 46.8085 42.0508 C 46.8085 42.7305 46.4804 43.4805 45.8476 44.1836 C 45.7304 44.3476 45.6367 44.4648 45.4960 44.6289 C 43.8789 46.4570 41.6523 47.3476 39.0742 47.3945 Z"
  }));
}

var _default = PhoneArrowUpRight;
exports["default"] = _default;