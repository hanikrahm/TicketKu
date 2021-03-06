"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Bookmark(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 12.0156 53.1602 C 13.2344 53.1602 13.9375 52.5508 16.3047 50.1836 L 27.6719 38.8398 C 27.7890 38.7461 27.9063 38.6524 28 38.6524 C 28.1172 38.6524 28.2109 38.7461 28.3281 38.8398 L 39.7187 50.1836 C 42.0390 52.5039 42.7890 53.1602 43.9844 53.1602 C 45.4609 53.1602 46.5859 52.2696 46.5859 50.1367 L 46.5859 10.1758 C 46.5859 5.3008 44.1719 2.8398 39.3203 2.8398 L 16.6797 2.8398 C 11.8516 2.8398 9.4141 5.3008 9.4141 10.1758 L 9.4141 50.1367 C 9.4141 52.2696 10.5625 53.1602 12.0156 53.1602 Z M 13.7734 47.4649 C 13.4453 47.7930 13.1875 47.6992 13.1875 47.2539 L 13.1875 10.2461 C 13.1875 7.9024 14.4531 6.6133 16.8906 6.6133 L 39.1328 6.6133 C 41.5703 6.6133 42.8125 7.9024 42.8125 10.2461 L 42.8125 47.2539 C 42.8125 47.6992 42.5547 47.7695 42.2265 47.4649 L 29.1719 34.5508 C 28.7734 34.1289 28.3516 34.0118 28 34.0118 C 27.6719 34.0118 27.25 34.1289 26.8281 34.5508 Z"
  }));
}

var _default = Bookmark;
exports["default"] = _default;