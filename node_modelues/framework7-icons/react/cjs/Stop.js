"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Stop(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 8.8984 41.9219 C 8.8984 45.1797 10.8672 47.1016 14.1719 47.1016 L 41.8281 47.1016 C 45.1328 47.1016 47.1016 45.1797 47.1016 41.9219 L 47.1016 14.0781 C 47.1016 10.8203 45.1328 8.8984 41.8281 8.8984 L 14.1719 8.8984 C 10.8672 8.8984 8.8984 10.8203 8.8984 14.0781 Z M 12.6719 41.0312 L 12.6719 14.9688 C 12.6719 13.5390 13.5156 12.6719 14.9219 12.6719 L 41.0781 12.6719 C 42.4844 12.6719 43.3281 13.5390 43.3281 14.9688 L 43.3281 41.0312 C 43.3281 42.4609 42.4844 43.3281 41.0781 43.3281 L 14.9219 43.3281 C 13.5156 43.3281 12.6719 42.4609 12.6719 41.0312 Z"
  }));
}

var _default = Stop;
exports["default"] = _default;