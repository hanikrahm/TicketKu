"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CloudBoltFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 12.3071 34.9036 L 41.3000 34.9036 C 48.7058 34.9036 54.4296 29.3200 54.4296 22.1243 C 54.4296 14.8586 48.4488 9.4151 40.5290 9.4852 C 37.5386 3.4576 32.0484 0 25.5770 0 C 16.9563 0 9.6905 6.7751 9.0130 15.4893 C 4.4807 16.7276 1.5603 20.5590 1.5603 25.1381 C 1.5603 30.9320 5.9058 34.9036 12.3071 34.9036 Z M 33.6137 43.9216 L 28.8011 43.9216 L 31.1140 39.4827 C 31.3943 38.9921 31.1841 38.5949 30.6701 38.5949 L 25.6004 38.5949 C 24.9229 38.5949 24.6893 38.8285 24.4790 39.3191 L 21.3017 46.5615 C 21.0447 47.1456 21.3017 47.4960 21.9091 47.4960 L 25.9742 47.4960 L 22.7735 55.2290 C 22.6567 55.5561 22.7035 55.8131 22.9371 55.9066 C 23.1473 56 23.4043 55.9299 23.6613 55.6729 L 33.9876 45.0897 C 34.4782 44.5757 34.2912 43.9216 33.6137 43.9216 Z"
  }));
}

var _default = CloudBoltFill;
exports["default"] = _default;