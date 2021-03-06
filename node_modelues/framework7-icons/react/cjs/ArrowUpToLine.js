"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUpToLine(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 28 48.6602 C 29.2188 48.6602 30.1094 47.7930 30.1094 46.5742 L 30.1094 22.9024 L 29.9219 17.8867 L 36.9766 25.5976 L 42.2266 30.7773 C 42.6250 31.1524 43.1641 31.3633 43.7266 31.3633 C 44.9219 31.3633 45.7656 30.4727 45.7656 29.3008 C 45.7656 28.7383 45.5547 28.2227 45.0859 27.7305 L 29.5703 12.2149 C 29.2422 11.8633 28.8672 11.6524 28.4688 11.5352 L 43.7734 11.5352 C 45.0156 11.5352 45.8594 10.6680 45.8594 9.4492 C 45.8594 8.2305 45.0156 7.3398 43.7734 7.3398 L 12.1797 7.3398 C 10.9610 7.3398 10.1406 8.2305 10.1406 9.4492 C 10.1406 10.6680 10.9610 11.5352 12.1797 11.5352 L 27.5312 11.5352 C 27.1328 11.6524 26.7578 11.8633 26.4297 12.2149 L 10.9375 27.7305 C 10.4688 28.2227 10.2344 28.7383 10.2344 29.3008 C 10.2344 30.4727 11.1016 31.3633 12.2734 31.3633 C 12.8359 31.3633 13.3984 31.1524 13.7734 30.7773 L 19.0234 25.5976 L 26.0781 17.8633 L 25.9141 22.9024 L 25.9141 46.5742 C 25.9141 47.7930 26.7812 48.6602 28 48.6602 Z"
  }));
}

var _default = ArrowUpToLine;
exports["default"] = _default;