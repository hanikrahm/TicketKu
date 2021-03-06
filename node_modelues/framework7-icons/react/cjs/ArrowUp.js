"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUp(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9883 50.1367 C 29.2071 50.1367 30.0976 49.2930 30.0976 48.0742 L 30.0976 17.2071 L 29.9102 12.2149 L 36.9180 19.9024 L 42.2617 25.1524 C 42.6367 25.5273 43.1992 25.7149 43.7383 25.7149 C 44.9102 25.7149 45.7773 24.8242 45.7773 23.6758 C 45.7773 23.1133 45.5664 22.6211 45.1211 22.1524 L 29.5586 6.5664 C 29.1133 6.0976 28.5742 5.8633 27.9883 5.8633 C 27.4258 5.8633 26.8867 6.0976 26.4414 6.5664 L 10.8789 22.1524 C 10.4336 22.6211 10.2227 23.1133 10.2227 23.6758 C 10.2227 24.8242 11.0898 25.7149 12.2383 25.7149 C 12.8008 25.7149 13.3633 25.5273 13.7383 25.1524 L 19.0586 19.9024 L 26.0898 12.1914 L 25.9024 17.2071 L 25.9024 48.0742 C 25.9024 49.2930 26.7695 50.1367 27.9883 50.1367 Z"
  }));
}

var _default = ArrowUp;
exports["default"] = _default;