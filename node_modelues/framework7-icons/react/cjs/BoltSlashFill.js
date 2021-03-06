"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BoltSlashFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 39.0391 32.6406 L 43.8906 26.5938 C 44.2891 26.1016 44.5235 25.6328 44.5235 25.0938 C 44.5235 24.2031 43.8203 23.5234 42.8359 23.5000 L 29.9453 23.3125 L 36.5781 4.5156 C 37.4219 2.0782 34.9844 .8125 33.3906 2.8047 L 22.6328 16.2578 Z M 44.4062 46.9609 C 45.1094 47.6641 46.2813 47.6641 46.9610 46.9609 C 47.6641 46.2813 47.6641 45.1328 46.9610 44.4063 L 11.5937 9.0391 C 10.8906 8.3360 9.7188 8.3360 9.0157 9.0391 C 8.3359 9.7422 8.3359 10.9141 9.0157 11.5938 Z M 22.6094 53.2187 L 33.3203 39.7891 L 16.9141 23.3828 L 12.1094 29.4063 C 11.7110 29.9219 11.4766 30.3906 11.4766 30.9063 C 11.4766 31.8203 12.1797 32.5000 13.1641 32.5000 L 26.0313 32.6875 L 19.4219 51.4844 C 18.6016 53.8984 21.0157 55.1875 22.6094 53.2187 Z"
  }));
}

var _default = BoltSlashFill;
exports["default"] = _default;