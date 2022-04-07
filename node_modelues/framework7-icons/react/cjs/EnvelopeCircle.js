"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function EnvelopeCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 27.9765 29.2890 C 28.3749 29.2890 28.8202 29.1250 29.2655 28.6797 L 39.6014 18.3437 C 39.3202 18.1094 38.6405 17.8750 37.6327 17.8750 L 18.2968 17.8750 C 17.3124 17.8750 16.6093 18.1094 16.3280 18.3437 L 26.6640 28.6797 C 27.1327 29.1484 27.5780 29.2890 27.9765 29.2890 Z M 23.3358 28.0469 L 15.1796 19.8906 C 15.0390 20.1250 14.9687 20.6875 14.9687 21.5078 L 14.9687 34.4922 C 14.9687 35.3125 15.0390 35.8984 15.2030 36.1797 Z M 32.5234 28.0469 L 40.6562 36.1797 C 40.8202 35.8984 40.8905 35.3125 40.8905 34.4922 L 40.8905 21.5078 C 40.8905 20.6875 40.8202 20.1250 40.7030 19.8906 Z M 27.9530 31.1406 C 27.1093 31.1406 26.4530 30.8359 25.5390 29.9922 L 24.7890 29.2890 L 16.3749 37.7031 C 16.6562 37.9609 17.3124 38.1250 18.2968 38.1250 L 37.6093 38.1250 C 38.5936 38.1250 39.2499 37.9609 39.5312 37.7031 L 31.1171 29.2890 L 30.3671 29.9922 C 29.4530 30.8359 28.7968 31.1406 27.9530 31.1406 Z"
  }));
}

var _default = EnvelopeCircle;
exports["default"] = _default;