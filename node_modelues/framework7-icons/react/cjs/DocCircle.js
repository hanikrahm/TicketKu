"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DocCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 21.2499 41.0781 L 34.6796 41.0781 C 37.2812 41.0781 38.5702 39.7422 38.5702 37.1172 L 38.5702 25.8437 L 29.2890 25.8437 C 27.6718 25.8437 26.8983 25.0937 26.8983 23.4766 L 26.8983 14.0312 L 21.2499 14.0312 C 18.6718 14.0312 17.3593 15.3672 17.3593 17.9922 L 17.3593 37.1172 C 17.3593 39.7656 18.6718 41.0781 21.2499 41.0781 Z M 29.4765 23.9453 L 38.4296 23.9453 C 38.3593 23.4297 37.9843 22.9141 37.3749 22.3047 L 30.4374 15.2266 C 29.8514 14.6172 29.3124 14.2422 28.7968 14.1719 L 28.7968 23.2656 C 28.7968 23.7109 29.0312 23.9453 29.4765 23.9453 Z"
  }));
}

var _default = DocCircle;
exports["default"] = _default;