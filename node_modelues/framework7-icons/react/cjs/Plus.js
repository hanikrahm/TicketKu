"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Plus(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9883 47.7344 C 29.1367 47.7344 30.0976 46.8203 30.0976 45.6953 L 30.0976 30.1094 L 45.2383 30.1094 C 46.3633 30.1094 47.3476 29.1484 47.3476 28 C 47.3476 26.8516 46.3633 25.9141 45.2383 25.9141 L 30.0976 25.9141 L 30.0976 10.3047 C 30.0976 9.1797 29.1367 8.2656 27.9883 8.2656 C 26.8398 8.2656 25.9024 9.1797 25.9024 10.3047 L 25.9024 25.9141 L 10.7617 25.9141 C 9.6367 25.9141 8.6524 26.8516 8.6524 28 C 8.6524 29.1484 9.6367 30.1094 10.7617 30.1094 L 25.9024 30.1094 L 25.9024 45.6953 C 25.9024 46.8203 26.8398 47.7344 27.9883 47.7344 Z"
  }));
}

var _default = Plus;
exports["default"] = _default;