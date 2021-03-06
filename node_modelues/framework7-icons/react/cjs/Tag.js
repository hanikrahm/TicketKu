"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Tag(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 26.1133 51.2148 C 29.4649 54.5664 32.9102 54.6133 36.3555 51.1914 L 51.1913 36.3789 C 54.6132 32.9570 54.5662 29.4883 51.2148 26.1367 L 28.2930 3.2617 C 26.5352 1.5039 25.5508 1.3867 23.0664 1.3867 L 14.1602 1.3867 C 11.6758 1.3867 10.9024 1.9961 9.1446 3.7539 L 3.7539 9.1445 C 1.9727 10.9258 1.3868 11.6992 1.3868 14.1836 L 1.3868 23.0899 C 1.3868 25.5508 1.4805 26.5586 3.2617 28.3164 Z M 28.6446 48.3789 L 5.9102 25.6445 C 5.4414 25.1758 5.1602 24.6836 5.1602 23.9101 L 5.1602 14.0195 C 5.1602 13.2930 5.4180 12.8008 5.9102 12.3086 L 12.2852 5.9336 C 12.8008 5.4414 13.2695 5.1601 14.0195 5.1601 L 23.8868 5.1601 C 24.6836 5.1601 25.1524 5.4648 25.6446 5.9336 L 48.379 28.6445 C 50.0432 30.3086 50.0897 32.1133 48.3555 33.8242 L 33.8242 48.3555 C 32.1133 50.0899 30.3086 50.0664 28.6446 48.3789 Z M 16.9024 20.1367 C 18.7305 20.1367 20.1133 18.7070 20.1133 16.9258 C 20.1133 15.1211 18.7305 13.7148 16.9024 13.7148 C 15.0742 13.7148 13.6914 15.1211 13.6914 16.9258 C 13.6914 18.7070 15.0742 20.1367 16.9024 20.1367 Z"
  }));
}

var _default = Tag;
exports["default"] = _default;