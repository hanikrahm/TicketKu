"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PhoneArrowRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 5.7110 28.0000 C 5.6875 36.8359 8.1953 45.5547 13.2579 50.5937 C 15.9063 53.2422 18.3906 54.4375 22.3985 54.4375 C 27.2031 54.4375 29.8047 51.8828 29.0313 47.0781 L 27.5782 38.8984 C 27.1094 36.3672 25.4688 34.5156 22.6797 34.4922 L 20.3360 34.4922 C 19.1172 34.4922 18.5782 33.8359 18.4610 32.0781 C 18.4141 31.3750 18.3672 29.7344 18.3672 28.0000 C 18.3672 26.2656 18.4141 24.6250 18.4610 23.9219 C 18.5782 22.1641 19.1172 21.5078 20.3360 21.5078 L 22.6797 21.5078 C 25.4688 21.5078 27.1094 19.6328 27.5782 17.1016 L 29.0313 8.9453 C 29.8047 4.1641 27.2735 1.5625 22.3985 1.5625 C 18.3906 1.5625 15.9063 2.7578 13.2579 5.4063 C 8.1953 10.4688 5.6875 19.1641 5.7110 28.0000 Z M 9.3438 28.0000 C 9.3438 20.0312 11.4531 12.1563 15.7891 7.9375 C 17.5000 6.2968 19.4453 5.3359 21.8828 5.3359 C 24.5313 5.3359 26.0547 6.2266 25.4922 8.6875 L 23.9922 16.2344 C 23.8282 17.1016 23.2657 17.6875 22.2579 17.6875 L 19.5626 17.6875 C 16.9844 17.6875 15.7891 19.2812 15.3438 21.5312 C 15.0391 23.0781 14.9219 25.4922 14.9219 28.0000 C 14.9219 30.5078 15.0391 32.9219 15.3438 34.4922 C 15.7891 36.7188 16.9844 38.3125 19.5626 38.3125 L 22.2579 38.3125 C 23.2657 38.3125 23.8282 38.8984 23.9922 39.7656 L 25.4922 47.3125 C 26.0313 49.7266 24.5782 50.6641 21.8828 50.6641 C 19.4453 50.6641 17.5000 49.7031 15.7891 48.0625 C 11.4531 43.8437 9.3438 35.9688 9.3438 28.0000 Z M 27.7891 29.6641 L 39.9766 29.6641 L 45.2969 29.4297 L 40.1875 34.0234 L 37.7266 36.4844 C 37.3985 36.8125 37.2110 37.2578 37.2110 37.7500 C 37.2110 38.7109 37.9141 39.3672 38.8282 39.3672 C 39.2969 39.3672 39.7422 39.1797 40.0704 38.8516 L 49.6798 29.2422 C 50.1017 28.8437 50.3125 28.3984 50.3125 28.0000 C 50.3125 27.6016 50.1017 27.1328 49.6798 26.7344 L 40.0704 17.1484 C 39.7422 16.8203 39.2969 16.6328 38.8282 16.6328 C 37.9141 16.6328 37.2110 17.2890 37.2110 18.2266 C 37.2110 18.7422 37.3985 19.1641 37.7266 19.4922 L 40.1875 21.9766 L 45.2969 26.5469 L 39.9766 26.3125 L 27.7657 26.3125 C 26.7110 26.3125 26.0782 27.1328 26.0782 28.0000 C 26.0782 28.8672 26.6875 29.6641 27.7891 29.6641 Z"
  }));
}

var _default = PhoneArrowRight;
exports["default"] = _default;