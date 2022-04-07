"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LinkCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 38.4062 17.1016 C 41.3124 19.9844 41.0546 23.5469 37.7030 26.875 L 33.6718 30.9297 C 33.9999 29.8047 33.9765 28.4922 33.6014 27.6016 L 35.9687 25.2344 C 38.2655 22.9844 38.5234 20.6172 36.6952 18.8125 C 34.8905 17.0313 32.5234 17.3125 30.2733 19.5625 L 26.9218 22.8672 C 24.6014 25.2109 24.2968 27.6016 26.1249 29.3828 C 26.6640 29.9453 27.4609 30.2969 28.4921 30.4844 C 28.1405 31.2344 27.4140 32.1016 26.7343 32.5703 C 26.0312 32.4531 25.1405 31.8906 24.3905 31.1172 C 21.4843 28.2344 21.7890 24.625 25.1874 21.2031 L 28.6093 17.8047 C 31.9609 14.4531 35.5234 14.2187 38.4062 17.1016 Z M 16.7499 38.7578 C 13.8436 35.875 14.1014 32.3125 17.4765 28.9844 L 21.5077 24.9297 C 21.1562 26.0547 21.1796 27.3672 21.5546 28.2578 L 19.1874 30.625 C 16.8905 32.8516 16.6327 35.2422 18.4609 37.0469 C 20.2655 38.8281 22.6562 38.5469 24.8827 36.2969 L 28.2343 32.9922 C 30.5546 30.6484 30.8593 28.2578 29.0312 26.4766 C 28.4921 25.9140 27.6952 25.5625 26.6640 25.375 C 27.0155 24.625 27.7421 23.7578 28.4218 23.2891 C 29.1249 23.4062 30.0155 23.9687 30.7890 24.7422 C 33.6718 27.625 33.3671 31.2109 29.9687 34.6328 L 26.5468 38.0547 C 23.1952 41.4063 19.6327 41.6406 16.7499 38.7578 Z"
  }));
}

var _default = LinkCircleFill;
exports["default"] = _default;