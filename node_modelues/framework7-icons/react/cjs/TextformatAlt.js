"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TextformatAlt(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 3.3438 45.2969 C 4.5157 45.2969 5.1016 44.8281 5.5704 43.5391 L 8.5704 35.2422 L 22.3985 35.2422 L 25.4219 43.5391 C 25.8673 44.8281 26.4766 45.2969 27.6485 45.2969 C 28.9141 45.2969 29.7344 44.5703 29.7344 43.3750 C 29.7344 42.9766 29.6641 42.6250 29.4766 42.1094 L 18.4844 12.8594 C 17.9454 11.4062 16.9844 10.7031 15.4844 10.7031 C 14.0313 10.7031 13.0704 11.4062 12.5548 12.8359 L 1.5391 42.1328 C 1.3516 42.6484 1.2813 43.0000 1.2813 43.3984 C 1.2813 44.5937 2.0548 45.2969 3.3438 45.2969 Z M 9.7188 31.6562 L 15.4141 15.8828 L 15.5548 15.8828 L 21.2266 31.6562 Z M 42.2969 45.2734 C 46.3048 45.2734 49.3748 43.3750 50.8048 40.0000 L 50.9454 40.0000 L 50.9454 43.3047 C 50.9454 44.5234 51.7187 45.2969 52.8203 45.2969 C 53.9454 45.2969 54.7187 44.5000 54.7187 43.2812 L 54.7187 21.0859 C 54.7187 19.8672 53.9454 19.0469 52.8203 19.0469 C 51.7187 19.0469 50.9454 19.8672 50.9454 21.0859 L 50.9454 24.3672 L 50.8048 24.3672 C 49.3748 21.0625 46.1876 19.0703 42.2969 19.0703 C 35.9688 19.0703 31.7266 24.3437 31.7266 32.1719 C 31.7266 40.0469 35.9688 45.2734 42.2969 45.2734 Z M 43.2579 41.8516 C 38.6876 41.8516 35.7813 38.1015 35.7813 32.1719 C 35.7813 26.2422 38.6876 22.4922 43.2579 22.4922 C 47.8048 22.4922 50.8283 26.3828 50.8283 32.2187 C 50.8283 38.0781 47.8518 41.8516 43.2579 41.8516 Z"
  }));
}

var _default = TextformatAlt;
exports["default"] = _default;