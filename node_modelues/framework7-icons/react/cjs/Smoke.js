"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Smoke(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 1.2461 27.3086 C 1.2461 31.7383 4.3398 35.5820 9.3086 36.4727 C 9.0273 37.2929 8.9101 38.1602 8.9101 39.0742 C 8.9101 43.8555 12.4726 47.6758 17.8164 47.6758 L 44.6992 47.6758 C 50.7695 47.6758 54.7539 43.5039 54.7539 38.2305 C 54.7539 33.8476 51.7775 30.0976 47.5587 29.0430 C 47.0898 24.3320 43.6445 20.4883 39.1445 19.5039 C 38.4882 15.4727 35.0195 12.4492 30.8711 12.4492 C 29.7460 12.4492 28.7617 12.5898 27.9179 12.8242 C 25.8320 10.1992 23.1133 8.3242 19.2226 8.3242 C 13.6679 8.3242 8.9804 12.6133 8.4414 18.1211 C 4.1758 19.1992 1.2461 22.9258 1.2461 27.3086 Z M 4.7617 27.3086 C 4.7617 24.2383 7.0820 21.7070 9.9179 21.3555 C 11.3242 21.2149 11.8867 20.5117 11.8633 19.1055 C 11.8164 15.2149 15.1445 11.8633 19.2226 11.8633 C 22.0117 11.8633 24.1679 13.3164 25.5976 15.6133 C 26.1601 16.5273 27.0038 16.7383 28.1523 16.3633 C 28.7617 16.1758 29.6289 15.9649 30.6367 15.9649 C 32.8398 15.9649 34.7382 17.3711 35.4179 19.3398 C 32.4648 19.7149 29.8633 21.2851 28.0820 23.6758 C 27.2382 23.4180 26.4648 23.3008 25.5976 23.3008 C 21.3086 23.3008 17.6289 26.3242 16.8554 30.5195 C 14.6758 30.7305 12.7538 31.6914 11.3242 33.1211 C 7.1054 32.8867 4.7617 30.3086 4.7617 27.3086 Z M 17.8164 44.1602 C 14.4414 44.1602 12.4257 41.9336 12.4257 39.0742 C 12.4257 36.0742 14.8867 33.9649 17.6992 33.9180 C 19.2695 33.8945 19.9492 33.4258 20.0664 31.9961 C 20.3242 28.9961 22.5976 26.8398 25.5976 26.8398 C 26.4648 26.8398 26.9570 26.9570 27.8711 27.3086 C 29.0898 27.8008 29.8398 27.5898 30.3554 26.5586 C 31.5507 24.2617 34.0351 22.7617 36.8476 22.7617 C 40.8320 22.7617 44.0898 26.0195 44.0898 30.0742 C 44.0898 31.6914 44.6054 32.1836 46.1288 32.3476 C 49.0352 32.6992 51.2384 35.2773 51.2384 38.2305 C 51.2384 41.5820 48.8240 44.1602 44.6992 44.1602 Z"
  }));
}

var _default = Smoke;
exports["default"] = _default;