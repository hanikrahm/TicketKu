"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CloudSunBoltFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 35.9863 7.9860 C 36.8756 7.9860 37.5912 7.2319 37.5912 6.3810 L 37.5912 2.2043 C 37.5912 1.3148 36.8756 .5992 35.9863 .5992 C 35.0968 .5992 34.3813 1.3148 34.3813 2.2043 L 34.3813 6.3810 C 34.3813 7.2319 35.0968 7.9860 35.9863 7.9860 Z M 24.7708 11.7181 C 25.4089 12.3562 26.4531 12.3369 27.0526 11.7181 C 27.6520 11.0993 27.6714 10.0744 27.0526 9.4750 L 24.0746 6.4777 C 23.4365 5.8590 22.4310 5.8590 21.8122 6.4777 C 21.1935 7.0965 21.1935 8.1214 21.8122 8.7402 Z M 44.9201 11.7181 C 45.5196 12.3369 46.5636 12.3562 47.2019 11.7181 L 50.1602 8.7402 C 50.7792 8.1214 50.7598 7.0965 50.1602 6.4777 C 49.5416 5.8590 48.5361 5.8590 47.8982 6.4777 L 44.9201 9.4750 C 44.3011 10.0744 44.3205 11.0993 44.9201 11.7181 Z M 40.9559 28.9281 C 43.7985 27.0137 45.5580 24.0551 45.5580 20.6518 C 45.5580 15.3341 41.3040 11.0606 35.9863 11.0606 C 32.4863 11.0606 29.4504 12.9363 27.8454 15.7402 C 28.6576 16.5717 29.3537 17.4805 29.9338 18.6021 C 36.3149 19.1242 40.4339 23.0883 40.9559 28.9281 Z M 8.0249 39.5828 L 28.9476 39.5828 C 34.4200 39.5828 38.6740 35.4254 38.6740 30.0690 C 38.6740 24.7513 34.3427 20.7292 28.5609 20.6905 C 26.2984 16.3590 22.2763 13.8645 17.5967 13.8645 C 11.3122 13.8645 5.9752 18.7374 5.3951 25.0994 C 2.1077 26.0855 0 28.8701 0 32.2734 C 0 36.6049 3.2680 39.5828 8.0249 39.5828 Z M 50.2185 22.2568 L 54.3953 22.2568 C 55.2654 22.2568 55.9810 21.5413 56 20.6518 C 56 19.7623 55.2654 19.0469 54.3953 19.0469 L 50.2185 19.0469 C 49.3484 19.0469 48.6134 19.7623 48.6134 20.6518 C 48.6134 21.5413 49.3484 22.2568 50.2185 22.2568 Z M 47.8982 34.8452 C 48.5361 35.4640 49.5416 35.4447 50.1602 34.8259 C 50.7598 34.2071 50.7792 33.1822 50.1602 32.5635 L 47.1631 29.6049 C 46.5445 29.0054 45.5386 28.9861 44.9201 29.6049 C 44.3011 30.2237 44.3011 31.2485 44.9201 31.8673 Z M 24.2100 46.5442 L 20.3619 46.5442 L 22.1409 43.1795 C 22.3537 42.7541 22.1796 42.4447 21.7542 42.4447 L 17.7128 42.4447 C 17.1907 42.4447 17.0166 42.6574 16.8426 43.0248 L 14.3674 48.6519 C 14.1741 49.1160 14.3674 49.4061 14.8702 49.4061 L 18.0995 49.4061 L 15.6244 55.4005 C 15.5083 55.6519 15.5664 55.8646 15.7404 55.9227 C 15.9338 56 16.1271 55.9420 16.3205 55.7293 L 24.5001 47.4723 C 24.9062 47.0663 24.7515 46.5442 24.2100 46.5442 Z"
  }));
}

var _default = CloudSunBoltFill;
exports["default"] = _default;