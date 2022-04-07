"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Goforward75(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 54.4024 C 41.0546 54.4024 51.9063 43.5742 51.9063 30.4961 C 51.9063 22.6211 47.9219 15.5430 41.8983 11.1602 C 40.8671 10.3633 39.5780 10.6211 38.9921 11.5820 C 38.4062 12.5664 38.7109 13.6680 39.6483 14.3945 C 44.6405 17.9570 47.8983 23.8398 47.9219 30.4961 C 47.9454 41.5586 39.0390 50.4180 27.9999 50.4180 C 16.9374 50.4180 8.1014 41.5586 8.1014 30.4961 C 8.1014 21.0039 14.6171 13.1055 23.4765 11.0898 L 23.4765 14.4649 C 23.4765 16.1289 24.6249 16.5742 25.8905 15.6602 L 33.3905 10.4102 C 34.4452 9.6836 34.4687 8.5586 33.3905 7.7851 L 25.9140 2.5351 C 24.6249 1.5976 23.4765 2.0430 23.4765 3.7305 L 23.4765 7.0351 C 12.5077 9.1680 4.0937 18.9649 4.0937 30.4961 C 4.0937 43.5742 14.9218 54.4024 27.9999 54.4024 Z M 34.3280 40.3867 C 38.2187 40.3867 40.7968 37.8789 40.7968 34.1055 C 40.7968 30.6602 38.4765 28.1992 35.1249 28.1992 C 33.7421 28.1992 32.2421 28.8320 31.5624 29.8867 L 31.9609 24.8242 L 38.9687 24.8242 C 39.6483 24.8242 40.2343 24.2617 40.2343 23.4649 C 40.2343 22.6680 39.6483 22.1524 38.9687 22.1524 L 31.4687 22.1524 C 30.2499 22.1524 29.5702 22.8555 29.4765 24.0976 L 28.9609 30.8476 C 28.8436 32.0195 29.4765 32.5820 30.4843 32.5820 C 31.2577 32.5820 31.5858 32.4414 32.2655 31.9258 C 33.1562 31.1055 33.8827 30.7773 34.8202 30.7773 C 36.6249 30.7773 37.8436 32.1133 37.8436 34.1524 C 37.8436 36.2149 36.4140 37.7149 34.4687 37.7149 C 33.0858 37.7149 31.8905 36.9180 31.2812 35.6992 C 30.9296 35.0898 30.5077 34.7617 29.9218 34.7617 C 29.1483 34.7617 28.6093 35.3242 28.6093 36.1211 C 28.6093 36.4492 28.6796 36.7539 28.8202 37.0586 C 29.4530 38.7461 31.5155 40.3867 34.3280 40.3867 Z M 18.0390 40.3164 C 18.6483 40.3164 19.1171 40.0117 19.4921 39.2149 L 26.0780 25.7149 C 26.4062 25.0820 26.5234 24.6602 26.5234 24.1680 C 26.5234 23.0195 25.6562 22.1758 24.4843 22.1758 L 15.8124 22.1758 C 15.1327 22.1758 14.6405 22.7383 14.6405 23.4883 C 14.6405 24.2617 15.1327 24.8008 15.8124 24.8008 L 23.2187 24.8008 L 16.7733 37.7617 C 16.5858 38.1133 16.4687 38.3945 16.4687 38.7929 C 16.4687 39.6602 17.1483 40.3164 18.0390 40.3164 Z"
  }));
}

var _default = Goforward75;
exports["default"] = _default;