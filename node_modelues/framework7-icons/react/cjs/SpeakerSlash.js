"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SpeakerSlash(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 39.7187 33.5664 L 39.7187 8.2070 C 39.7187 6.6367 38.5702 5.3242 36.9296 5.3242 C 35.7812 5.3242 35.0312 5.8867 33.7655 7.0117 L 22.9374 16.6445 L 25.5390 19.2695 L 35.2187 10.4805 C 35.3359 10.3867 35.4531 10.2929 35.6171 10.2929 C 35.8046 10.2929 35.9452 10.4336 35.9452 10.6211 L 35.9452 29.7929 Z M 46.7733 49.9727 C 47.4999 50.6758 48.6484 50.6758 49.3280 49.9727 C 50.0312 49.2461 50.0548 48.1211 49.3280 47.4180 L 9.2030 7.2929 C 8.4999 6.5898 7.3280 6.5898 6.6249 7.2929 C 5.9452 7.9727 5.9452 9.1680 6.6249 9.8476 Z M 36.9765 48.3320 C 38.0077 48.3320 38.8984 47.7930 39.4374 46.7383 L 36.5780 43.9961 L 24.6952 33.7070 C 24.1796 33.2617 23.8984 33.1914 23.2421 33.1914 L 15.4843 33.1914 C 14.5702 33.1914 14.0077 32.6289 14.0077 31.7148 L 14.0077 21.5898 L 11.1952 18.5898 C 10.5390 19.5273 10.2343 20.7227 10.2343 22.2695 L 10.2343 31.4102 C 10.2343 34.9258 12.0155 36.7305 15.3202 36.7305 L 22.1640 36.7305 C 22.3984 36.7305 22.5859 36.8008 22.7499 36.9414 L 33.7655 46.8086 C 34.9140 47.8398 35.8280 48.3320 36.9765 48.3320 Z"
  }));
}

var _default = SpeakerSlash;
exports["default"] = _default;