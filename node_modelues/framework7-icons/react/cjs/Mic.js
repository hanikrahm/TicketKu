"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Mic(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 36.5429 26.8516 L 36.5429 12.1094 C 36.5429 6.6953 33.0508 2.9219 28.0117 2.9219 C 22.9727 2.9219 19.4805 6.6953 19.4805 12.1094 L 19.4805 26.8516 C 19.4805 32.2422 22.9727 36.0390 28.0117 36.0390 C 33.0508 36.0390 36.5429 32.2422 36.5429 26.8516 Z M 33.0039 26.8516 C 33.0039 30.3203 31.0117 32.5469 28.0117 32.5469 C 25.0117 32.5469 23.0195 30.3203 23.0195 26.8516 L 23.0195 12.1094 C 23.0195 8.6406 25.0117 6.4141 28.0117 6.4141 C 31.0117 6.4141 33.0039 8.6406 33.0039 12.1094 Z M 17.5351 49.5391 C 16.5508 49.5391 15.7773 50.3359 15.7773 51.3203 C 15.7773 52.3047 16.5508 53.0781 17.5351 53.0781 L 38.4883 53.0781 C 39.4727 53.0781 40.2461 52.3047 40.2461 51.3203 C 40.2461 50.3359 39.4727 49.5391 38.4883 49.5391 L 29.7695 49.5391 L 29.7695 44.0781 C 38.7227 43.3281 44.7695 36.9063 44.7695 27.6953 L 44.7695 22.9375 C 44.7695 21.9531 43.9961 21.1797 43.0117 21.1797 C 42.0273 21.1797 41.2305 21.9531 41.2305 22.9375 L 41.2305 27.5547 C 41.2305 35.5469 36.0273 40.8437 28.0117 40.8437 C 19.9961 40.8437 14.7695 35.5469 14.7695 27.5547 L 14.7695 22.9375 C 14.7695 21.9531 13.9961 21.1797 13.0117 21.1797 C 12.0273 21.1797 11.2305 21.9531 11.2305 22.9375 L 11.2305 27.6953 C 11.2305 36.9063 17.3008 43.3281 26.2305 44.0781 L 26.2305 49.5391 Z"
  }));
}

var _default = Mic;
exports["default"] = _default;