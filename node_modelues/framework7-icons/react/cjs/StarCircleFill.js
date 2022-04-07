"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function StarCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 18.6483 41.0547 C 18.0858 40.6328 17.9921 39.9531 18.3202 38.9922 L 21.1796 30.4375 L 13.8671 25.2109 C 13.0234 24.6250 12.7187 23.9688 12.9062 23.3125 C 13.1171 22.6797 13.7733 22.3516 14.7812 22.3516 L 23.7812 22.4219 L 26.5234 13.8203 C 26.8046 12.8594 27.2968 12.3437 27.9999 12.3437 C 28.7030 12.3437 29.1718 12.8594 29.4765 13.8203 L 32.2187 22.4219 L 41.1952 22.3516 C 42.2265 22.3516 42.8358 22.6797 43.0702 23.3125 C 43.3046 23.9688 42.9530 24.6250 42.1327 25.2109 L 34.7968 30.4375 L 37.6562 38.9922 C 37.9843 39.9531 37.8905 40.6328 37.3514 41.0547 C 36.7655 41.5000 36.0858 41.3359 35.2655 40.7266 L 27.9999 35.4063 L 20.7343 40.7266 C 19.8905 41.3359 19.2109 41.5000 18.6483 41.0547 Z"
  }));
}

var _default = StarCircleFill;
exports["default"] = _default;