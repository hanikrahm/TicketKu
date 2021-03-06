"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TagCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 15.0858 21.4609 L 15.0858 25.9375 C 15.0858 27.3906 15.7655 28.0469 16.6796 28.9375 L 28.2343 40.3750 C 29.7109 41.8516 31.1171 41.8281 32.5468 40.4219 L 39.6952 33.25 C 41.1014 31.8203 41.1249 30.4375 39.6483 28.9609 L 28.2109 17.4063 C 27.3202 16.4922 26.6640 15.8125 25.2343 15.8125 L 20.5936 15.8125 C 19.5155 15.8125 18.9062 16.2812 18.1796 16.9844 L 16.0936 19.0469 C 15.3671 19.7734 15.0858 20.3828 15.0858 21.4609 Z M 23.5234 24.25 C 22.8671 24.9063 21.8358 24.9063 21.1796 24.2266 C 20.5234 23.5703 20.5234 22.5390 21.1796 21.8828 C 21.8124 21.2266 22.8671 21.2266 23.5234 21.8828 C 24.1796 22.5390 24.1796 23.6172 23.5234 24.25 Z"
  }));
}

var _default = TagCircle;
exports["default"] = _default;