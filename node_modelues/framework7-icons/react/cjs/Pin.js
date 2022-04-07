"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Pin(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.4219 35.9688 L 25.9375 35.9688 L 25.9375 48.0156 C 25.9375 51.5781 27.4375 54.5781 28.0234 54.5781 C 28.5859 54.5781 30.0859 51.5781 30.0859 48.0156 L 30.0859 35.9688 L 42.5781 35.9688 C 44.1953 35.9688 45.3672 34.9375 45.3672 33.3672 C 45.3672 32.3828 45.0625 31.6797 44.3828 30.9532 L 37.2109 23.1719 C 36.7188 22.6563 36.4141 22.2813 36.5312 21.3203 L 37.7266 12.7657 C 37.7969 12.2735 37.8437 11.9922 38.2890 11.6875 L 44.0312 7.5157 C 45.3203 6.5781 45.8828 5.4297 45.8828 4.3750 C 45.8828 2.8047 44.6172 1.4219 42.8125 1.4219 L 13.1875 1.4219 C 11.3828 1.4219 10.1172 2.8047 10.1172 4.3750 C 10.1172 5.4297 10.6797 6.5781 11.9453 7.5157 L 17.7109 11.6875 C 18.1562 11.9922 18.2031 12.2735 18.2734 12.7657 L 19.4688 21.3203 C 19.6094 22.2813 19.2812 22.6563 18.7890 23.1719 L 11.6172 30.9532 C 10.9375 31.6797 10.6328 32.3828 10.6328 33.3672 C 10.6328 34.9375 11.8047 35.9688 13.4219 35.9688 Z M 16.4688 32.1953 C 16.2578 32.1953 16.1172 32.0547 16.1172 31.8437 C 16.1172 31.7032 16.2109 31.5625 16.3281 31.4453 L 22.3281 25.1641 C 23.1015 24.3906 23.4062 23.5469 23.3125 22.6797 L 21.8594 11.3828 C 21.7422 10.4688 21.4375 9.7891 20.7578 9.3203 L 15.6719 5.9453 C 15.5078 5.8281 15.4610 5.7110 15.4610 5.5469 C 15.4610 5.3359 15.6250 5.1953 15.8359 5.1953 L 40.1641 5.1953 C 40.3750 5.1953 40.5390 5.3359 40.5390 5.5469 C 40.5390 5.7110 40.4922 5.8281 40.3281 5.9453 L 35.2422 9.3203 C 34.5625 9.7891 34.2578 10.4688 34.1406 11.3828 L 32.6875 22.6797 C 32.5937 23.5469 32.8984 24.3906 33.6484 25.1641 L 39.6719 31.4453 C 39.7890 31.5625 39.8594 31.7032 39.8594 31.8437 C 39.8594 32.0547 39.7422 32.1953 39.5312 32.1953 Z"
  }));
}

var _default = Pin;
exports["default"] = _default;