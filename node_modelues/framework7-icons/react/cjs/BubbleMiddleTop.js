"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BubbleMiddleTop(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9532 3.6367 C 26.8985 3.6367 25.9142 4.0820 24.9766 5.6992 L 20.6407 12.9414 L 12.9064 12.9414 C 5.9454 12.9414 2.1720 16.7852 2.1720 23.6758 L 2.1720 41.6289 C 2.1720 48.5195 5.9454 52.3633 12.9064 52.3633 L 43.0938 52.3633 C 50.0783 52.3633 53.8280 48.4961 53.8280 41.6289 L 53.8280 23.6758 C 53.8280 16.8086 50.0783 12.9414 43.0938 12.9414 L 35.2657 12.9414 L 30.9298 5.6992 C 29.9923 4.0820 29.0079 3.6367 27.9532 3.6367 Z M 27.9532 7.4805 L 31.8907 14.8164 C 32.6407 16.3399 33.2032 16.7148 34.8673 16.7148 L 43.0938 16.7148 C 47.8280 16.7148 50.0548 19.1055 50.0548 23.6758 L 50.0548 41.6055 C 50.0548 46.1758 47.8280 48.5898 43.0938 48.5898 L 12.9298 48.5898 C 8.1720 48.5898 5.9454 46.1758 5.9454 41.6055 L 5.9454 23.6758 C 5.9454 19.1055 8.1720 16.7148 12.9298 16.7148 L 21.0391 16.7148 C 22.7032 16.7148 23.2657 16.3399 24.0391 14.8164 Z"
  }));
}

var _default = BubbleMiddleTop;
exports["default"] = _default;