"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ChartBarFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 44.7242 49.2514 L 51.3650 49.2514 C 54.4401 49.2514 56 47.7807 56 44.8615 L 56 12.4603 C 56 9.5411 54.4401 8.0480 51.3650 8.0480 L 44.7242 8.0480 C 41.6715 8.0480 40.0892 9.5411 40.0892 12.4603 L 40.0892 44.8615 C 40.0892 47.7807 41.6715 49.2514 44.7242 49.2514 Z M 24.6686 49.2514 L 31.3093 49.2514 C 34.3845 49.2514 35.9667 47.7807 35.9667 44.8615 L 35.9667 18.9673 C 35.9667 16.0480 34.3845 14.5550 31.3093 14.5550 L 24.6686 14.5550 C 21.6157 14.5550 20.0558 16.0480 20.0558 18.9673 L 20.0558 44.8615 C 20.0558 47.7807 21.6157 49.2514 24.6686 49.2514 Z M 4.6351 49.2514 L 11.2758 49.2514 C 14.3510 49.2514 15.9109 47.7807 15.9109 44.8615 L 15.9109 25.4520 C 15.9109 22.5327 14.3510 21.0397 11.2758 21.0397 L 4.6351 21.0397 C 1.5822 21.0397 0 22.5327 0 25.4520 L 0 44.8615 C 0 47.7807 1.5822 49.2514 4.6351 49.2514 Z"
  }));
}

var _default = ChartBarFill;
exports["default"] = _default;