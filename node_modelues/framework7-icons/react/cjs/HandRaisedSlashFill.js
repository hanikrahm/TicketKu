"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function HandRaisedSlashFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 45.1094 42.5782 C 47.2656 38.5000 48.2031 34.2109 48.8125 32.125 C 49.5157 29.8047 50.8516 26.8282 50.8516 25.2578 C 50.8516 24.2500 49.5157 23.3594 48.6484 23.3594 C 46.6094 23.3594 45.8594 24.2734 44.6641 26.8047 C 43.3516 29.5938 41.7578 34.7969 40.5156 34.7969 C 39.7656 34.7969 39.5078 33.5078 39.5078 31.0469 L 39.5078 8.4297 C 39.5078 7.1875 38.7578 6.0625 37.1641 6.0625 C 35.5938 6.0625 34.8203 7.1875 34.8203 8.4297 L 34.8203 26.9453 C 34.0703 26.7344 33.2265 26.5703 32.2656 26.4531 L 32.2656 5.3594 C 32.2656 4.1172 31.4922 3.0156 29.9219 3.0156 C 28.3516 3.0156 27.5781 4.1172 27.5781 5.3594 L 27.5781 25.0938 Z M 25.0234 22.5391 L 25.0234 7.1641 C 25.0234 5.9219 24.2265 4.7969 22.6797 4.7969 C 21.1328 4.7969 20.3360 5.9219 20.3360 7.1641 L 20.3360 17.8516 Z M 45.1328 51.7422 C 45.8594 52.4922 47.0312 52.4219 47.6875 51.7422 C 48.3906 51.0156 48.3672 49.8906 47.6875 49.1875 L 8.4062 9.9297 C 7.6797 9.2031 6.5312 9.2500 5.8281 9.9297 C 5.1484 10.6094 5.1719 11.8047 5.8281 12.4844 Z M 17.7812 15.3438 L 17.7812 13.5156 C 17.7812 12.2734 17.0547 11.1484 15.4844 11.1484 C 14.9453 11.1484 14.3828 11.3828 14.1719 11.6641 Z M 13.0938 36.2500 C 13.0938 47.8047 19.5156 52.9844 28.4219 52.9844 C 32.8281 52.9844 36.2969 51.8594 39.2500 49.7266 L 13.0938 23.5938 Z"
  }));
}

var _default = HandRaisedSlashFill;
exports["default"] = _default;