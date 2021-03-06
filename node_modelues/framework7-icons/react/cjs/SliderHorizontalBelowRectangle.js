"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SliderHorizontalBelowRectangle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 12.6251 35.5000 L 43.3985 35.5000 C 47.9454 35.5000 50.3593 33.1797 50.3593 28.6328 L 50.3593 12.8125 C 50.3593 8.2656 47.9454 5.9453 43.3985 5.9453 L 12.6251 5.9453 C 8.2891 5.9453 5.6407 8.2656 5.6407 12.8125 L 5.6407 28.6328 C 5.6407 33.1797 8.0548 35.5000 12.6251 35.5000 Z M 12.5782 31.9844 C 10.4922 31.9844 9.4141 30.8828 9.4141 28.8203 L 9.4141 12.6250 C 9.4141 10.5625 10.4922 9.4844 12.5782 9.4844 L 43.4453 9.4844 C 45.5079 9.4844 46.5860 10.5625 46.5860 12.6250 L 46.5860 28.8203 C 46.5860 30.8828 45.5079 31.9844 43.4453 31.9844 Z M 36.1563 50.0547 C 38.5938 50.0547 40.6797 48.4844 41.4532 46.3047 L 48.5780 46.3047 C 49.5390 46.3047 50.3593 45.4844 50.3593 44.4297 C 50.3593 43.3516 49.5390 42.5313 48.5780 42.5313 L 41.4532 42.5313 C 40.6797 40.3516 38.5938 38.8047 36.1563 38.8047 C 33.7188 38.8047 31.6329 40.3516 30.8360 42.5313 L 7.5391 42.5313 C 6.4844 42.5313 5.6407 43.3516 5.6407 44.4297 C 5.6407 45.4844 6.4844 46.3047 7.5391 46.3047 L 30.8360 46.3047 C 31.6094 48.4844 33.7188 50.0547 36.1563 50.0547 Z M 36.1563 47.1719 C 34.6094 47.1719 33.4141 45.9531 33.4141 44.4297 C 33.4141 42.8594 34.6094 41.6641 36.1563 41.6641 C 37.7032 41.6641 38.8985 42.8594 38.8985 44.4297 C 38.8985 45.9531 37.7032 47.1719 36.1563 47.1719 Z"
  }));
}

var _default = SliderHorizontalBelowRectangle;
exports["default"] = _default;