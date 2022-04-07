"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BellSlash(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 39.9415 33.7891 L 48.3323 42.3672 C 48.7072 41.8984 48.9179 41.3359 48.9179 40.6797 C 48.9179 38.8047 46.9728 37.0469 45.2852 35.3594 C 43.3634 33.2031 42.6603 30.8828 42.5431 27.5313 C 42.4259 17.5703 39.9415 11.5469 33.6603 9.2734 C 32.7931 5.9922 30.1447 3.7891 26.9103 3.7891 C 23.6525 3.7891 21.0274 5.9922 20.1368 9.2734 C 18.8712 9.6953 17.7931 10.2813 16.8556 11.0313 L 19.5509 13.7734 C 20.3947 13.1875 21.3321 12.6953 22.3400 12.4375 C 22.9259 12.2734 23.2306 11.9922 23.2540 11.4062 C 23.3478 8.9453 24.7306 7.2344 26.9103 7.2344 C 29.0431 7.2344 30.4728 8.9453 30.5431 11.4062 C 30.5665 11.9922 30.8947 12.2969 31.4806 12.4375 C 35.5821 13.4687 38.6525 16.9375 38.8165 27.625 C 38.9337 30.4844 39.1681 32.2187 39.9415 33.7891 Z M 47.9571 51.2031 C 48.6602 51.9062 49.8088 51.9062 50.5120 51.2031 C 51.2147 50.5234 51.2147 49.3516 50.5120 48.6484 L 9.2852 7.4687 C 8.5821 6.7656 7.4103 6.7656 6.7071 7.4687 C 6.0274 8.1484 6.0274 9.3203 6.7071 10.0234 Z M 8.3243 43.7500 L 31.9259 43.7500 C 31.7618 46.9141 29.7228 48.9297 26.9103 48.9297 C 24.0743 48.9297 22.0587 46.9141 21.8712 43.7500 L 18.2150 43.7500 C 18.4025 48.2500 21.9415 52.2109 26.9103 52.2109 C 31.6915 52.2109 35.1603 48.5078 35.5352 44.1719 L 35.1134 43.7500 L 36.6368 43.7500 L 33.0978 40.2109 L 9.3556 40.2109 L 9.3556 39.9297 C 9.7774 39.2266 11.1603 37.8672 12.4025 36.4844 C 14.0665 34.6094 14.8634 31.6094 15.0743 27.0156 C 15.1212 25.3516 15.2384 23.875 15.4259 22.5391 L 12.1447 19.2578 C 11.6525 21.4375 11.3947 23.9219 11.3478 26.7344 C 11.1603 29.4297 10.7384 32.7578 9.1915 34.375 C 7.1759 36.4609 4.7853 38.5703 4.7853 40.9141 C 4.7853 42.6250 6.0978 43.7500 8.3243 43.7500 Z"
  }));
}

var _default = BellSlash;
exports["default"] = _default;