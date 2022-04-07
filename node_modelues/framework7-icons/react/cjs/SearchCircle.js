"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SearchCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 25.5624 34.4219 C 27.3905 34.4219 29.0780 33.8594 30.5077 32.9219 L 36.2733 38.7109 C 36.7187 39.1563 37.1640 39.3203 37.7030 39.3203 C 38.6171 39.3203 39.2968 38.6406 39.2968 37.6563 C 39.2968 37.2109 39.0858 36.7656 38.7577 36.4375 L 32.9218 30.6016 C 33.9530 29.1250 34.5624 27.3437 34.5624 25.3984 C 34.5624 20.4531 30.5077 16.3984 25.5624 16.3984 C 20.5936 16.3984 16.5390 20.4531 16.5390 25.3984 C 16.5390 30.3672 20.5936 34.4219 25.5624 34.4219 Z M 25.5624 31.8203 C 22.0468 31.8203 19.1405 28.9141 19.1405 25.3984 C 19.1405 21.9297 22.0468 19.0234 25.5624 19.0234 C 29.0312 19.0234 31.9374 21.9297 31.9374 25.3984 C 31.9374 28.9141 29.0312 31.8203 25.5624 31.8203 Z"
  }));
}

var _default = SearchCircle;
exports["default"] = _default;