"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BookCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 21.9296 37.0938 C 19.5390 37.0938 17.7812 37.9375 17.0077 38.6406 C 16.7030 38.875 16.3983 39.0391 15.9062 39.0391 C 15.2968 39.0391 14.8046 38.7344 14.8046 37.8906 L 14.8046 19.7734 C 15.6483 18.0625 18.3436 16.6797 21.3202 16.6797 C 23.9687 16.6797 26.1952 17.875 27.0390 19.4922 L 27.0390 38.875 C 26.9218 38.8516 26.2890 38.4766 26.0780 38.3594 C 25.3983 37.9375 24.0858 37.0938 21.9296 37.0938 Z M 34.0468 37.0938 C 31.8905 37.0938 30.5546 37.9140 29.8983 38.3594 C 29.6640 38.5000 29.1014 38.8984 28.9374 38.9219 L 28.9374 19.4922 C 29.8046 17.875 32.0312 16.6797 34.6327 16.6797 C 37.6093 16.6797 40.3046 18.0625 41.1483 19.7734 L 41.1483 37.8906 C 41.1483 38.7344 40.6796 39.0391 40.0702 39.0391 C 39.5780 39.0391 39.2499 38.875 38.9687 38.6406 C 38.1952 37.9375 36.4140 37.0938 34.0468 37.0938 Z"
  }));
}

var _default = BookCircleFill;
exports["default"] = _default;