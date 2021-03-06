"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BandageFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 44.3710 28.5508 L 48.1446 24.4492 C 53.4649 19.1054 53.3709 12.3320 48.5430 7.4570 C 43.7147 2.5586 36.8944 2.5352 31.5273 7.8554 L 27.4491 11.6289 C 29.4882 11.0430 31.6679 11.5117 33.9413 13.8086 L 42.4960 22.3398 C 44.7695 24.6132 44.9569 26.5117 44.3710 28.5508 Z M 24.3319 39.8476 C 26.6757 42.1914 28.9257 42.2617 31.3398 39.8476 L 39.8710 31.2930 C 42.3085 28.8789 42.2382 26.6523 39.8944 24.3086 L 31.6913 16.0820 C 29.3476 13.7383 27.1210 13.6914 24.6835 16.1289 L 16.1522 24.6601 C 13.7382 27.0742 13.8085 29.3242 16.1522 31.6679 Z M 26.4647 24.6132 C 25.5741 23.7226 25.5741 22.3398 26.4413 21.4726 C 27.3319 20.5820 28.6913 20.5820 29.5820 21.4726 C 30.4257 22.3398 30.4726 23.6992 29.5351 24.6132 C 28.7147 25.4336 27.3085 25.4336 26.4647 24.6132 Z M 21.4960 29.5586 C 20.6054 28.6679 20.6054 27.3086 21.4960 26.4179 C 22.3866 25.5273 23.7460 25.5508 24.6366 26.4414 C 25.4804 27.2851 25.5038 28.6679 24.6366 29.5117 C 23.7226 30.4492 22.3632 30.4023 21.4960 29.5586 Z M 34.5038 29.5586 C 33.6600 30.4023 32.2773 30.4023 31.3866 29.5117 C 30.5429 28.6914 30.5429 27.2851 31.3866 26.4414 C 32.3007 25.5273 33.6600 25.5508 34.5038 26.4179 C 35.3944 27.3086 35.3944 28.6679 34.5038 29.5586 Z M 7.4569 48.5195 C 12.2851 53.4179 19.1522 53.4648 24.4726 48.1211 L 28.5038 44.3242 C 26.4882 44.9101 24.4022 44.5117 22.1288 42.2383 L 13.5741 33.6836 C 11.3007 31.4101 11.0898 29.5117 11.6757 27.4726 L 7.8788 31.5273 C 2.5351 36.8476 2.6288 43.6445 7.4569 48.5195 Z M 26.4413 34.4805 C 25.5741 33.6367 25.5507 32.2773 26.4647 31.3632 C 27.3319 30.4961 28.7147 30.5195 29.5351 31.3632 C 30.4257 32.2305 30.4726 33.6367 29.5820 34.4805 C 28.6679 35.3711 27.3319 35.3711 26.4413 34.4805 Z"
  }));
}

var _default = BandageFill;
exports["default"] = _default;