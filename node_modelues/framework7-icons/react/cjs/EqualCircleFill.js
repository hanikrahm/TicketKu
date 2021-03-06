"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function EqualCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 18.6952 25.3516 C 17.4296 25.3516 16.5624 24.7422 16.5624 23.5 C 16.5624 22.2344 17.3827 21.6016 18.6952 21.6016 L 37.2109 21.6016 C 38.5468 21.6016 39.3436 22.2344 39.3436 23.5 C 39.3436 24.7422 38.4999 25.3516 37.2109 25.3516 Z M 18.6952 34.4688 C 17.4296 34.4688 16.5624 33.8359 16.5624 32.5937 C 16.5624 31.3281 17.3827 30.6953 18.6952 30.6953 L 37.2109 30.6953 C 38.5468 30.6953 39.3436 31.3281 39.3436 32.5937 C 39.3436 33.8359 38.4999 34.4688 37.2109 34.4688 Z"
  }));
}

var _default = EqualCircleFill;
exports["default"] = _default;