"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SpeakerSlashRtl(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 39.5312 33.1914 L 42.8593 36.5195 C 45.0624 36.0273 46.2812 34.2461 46.2812 31.4102 L 46.2812 22.3164 C 46.2812 18.8008 44.4999 16.9961 41.1952 16.9961 L 34.3749 16.9961 C 34.1406 16.9961 33.9296 16.9258 33.7890 16.7851 L 22.7733 7.0117 C 21.5077 5.8867 20.7577 5.3242 19.6093 5.3242 C 17.9687 5.3242 16.7968 6.6367 16.7968 8.2070 L 16.7968 10.4805 L 20.5702 14.2305 L 20.5702 10.6211 C 20.5702 10.4336 20.7109 10.2929 20.9218 10.2929 C 21.0624 10.2929 21.2030 10.3867 21.3202 10.4805 L 31.8437 20.0195 C 32.3124 20.4883 32.6406 20.5351 33.2733 20.5351 L 41.0312 20.5351 C 41.9452 20.5351 42.5077 21.0976 42.5077 22.0117 L 42.5077 31.7148 C 42.5077 32.6289 41.9452 33.1914 41.0312 33.1914 Z M 46.7733 49.9727 C 47.4999 50.6758 48.6484 50.6758 49.3280 49.9727 C 50.0312 49.2461 50.0548 48.1211 49.3280 47.4180 L 9.2030 7.2929 C 8.4999 6.5898 7.3280 6.5898 6.6249 7.2929 C 5.9452 7.9727 5.9452 9.1680 6.6249 9.8476 Z M 31.4218 39.0742 L 28.7968 36.4492 L 21.2968 43.1758 C 21.1796 43.3164 21.0390 43.3867 20.8984 43.3867 C 20.7109 43.3867 20.5702 43.2461 20.5702 43.0352 L 20.5702 28.2461 L 16.7968 24.4727 L 16.7968 45.5898 C 16.7968 47.1602 17.9687 48.3320 19.5624 48.3320 C 20.7109 48.3320 21.6249 47.8398 22.7733 46.8086 Z"
  }));
}

var _default = SpeakerSlashRtl;
exports["default"] = _default;