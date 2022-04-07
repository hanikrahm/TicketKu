"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowDownToLine(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 12.1797 44.4648 C 10.9610 44.4648 10.1406 45.3320 10.1406 46.5508 C 10.1406 47.7695 10.9610 48.6602 12.1797 48.6602 L 43.7734 48.6602 C 45.0156 48.6602 45.8594 47.7695 45.8594 46.5508 C 45.8594 45.3320 45.0156 44.4648 43.7734 44.4648 L 28.4922 44.4648 C 28.8906 44.3477 29.2422 44.1367 29.5703 43.7852 L 45.0859 28.2695 C 45.5547 27.7773 45.7656 27.2617 45.7656 26.6992 C 45.7656 25.5273 44.9219 24.6367 43.7266 24.6367 C 43.1641 24.6367 42.6250 24.8476 42.2266 25.2227 L 36.9766 30.4024 L 29.9219 38.1133 L 30.1094 33.0976 L 30.1094 9.4258 C 30.1094 8.2071 29.2188 7.3398 28 7.3398 C 26.7812 7.3398 25.9141 8.2071 25.9141 9.4258 L 25.9141 33.0976 L 26.0781 38.1367 L 19.0234 30.4024 L 13.7734 25.2227 C 13.3984 24.8476 12.8359 24.6367 12.2734 24.6367 C 11.1016 24.6367 10.2344 25.5273 10.2344 26.6992 C 10.2344 27.2617 10.4688 27.7773 10.9375 28.2695 L 26.4297 43.7852 C 26.7578 44.1367 27.1328 44.3477 27.5312 44.4648 Z"
  }));
}

var _default = ArrowDownToLine;
exports["default"] = _default;