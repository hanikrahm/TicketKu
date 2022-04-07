"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Rays(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 30.0391 4.6094 C 30.0391 3.5078 29.1016 2.5703 28.0001 2.5703 C 26.8985 2.5703 25.9610 3.5078 25.9610 4.6094 L 25.9610 11.8281 C 25.9610 12.9531 26.8985 13.8906 28.0001 13.8906 C 29.1016 13.8906 30.0391 12.9531 30.0391 11.8281 Z M 14.9454 17.8516 C 15.7188 18.6250 17.0313 18.6250 17.8047 17.8516 C 18.6016 17.0547 18.6016 15.7422 17.8047 14.9687 L 12.7422 9.8594 C 11.9688 9.0859 10.6563 9.0625 9.8594 9.8359 C 9.0860 10.6094 9.0860 11.9219 9.8594 12.7187 Z M 37.9141 15.2031 C 37.1407 15.9766 37.1407 17.2890 37.9141 18.0859 C 38.7110 18.8594 40.0469 18.8594 40.8204 18.0859 L 45.9298 12.9766 C 46.7264 12.1797 46.7264 10.8672 45.9298 10.0703 C 45.1563 9.2968 43.8438 9.2968 43.0469 10.0703 Z M 51.3906 30.0390 C 52.4922 30.0390 53.4296 29.1016 53.4296 28.0000 C 53.4296 26.8984 52.4922 25.9609 51.3906 25.9609 L 44.1720 25.9609 C 43.0469 25.9609 42.1094 26.8984 42.1094 28.0000 C 42.1094 29.1016 43.0469 30.0390 44.1720 30.0390 Z M 4.6094 25.9609 C 3.5079 25.9609 2.5704 26.8984 2.5704 28.0000 C 2.5704 29.1016 3.5079 30.0390 4.6094 30.0390 L 11.8516 30.0390 C 12.9766 30.0390 13.9141 29.1016 13.9141 28.0000 C 13.9141 26.8984 12.9766 25.9609 11.8516 25.9609 Z M 40.8204 37.9141 C 40.0469 37.1406 38.7110 37.1406 37.9141 37.9141 C 37.1407 38.7109 37.1407 40.0234 37.9141 40.7969 L 43.0469 45.9297 C 43.8438 46.6797 45.1563 46.6797 45.9298 45.9297 C 46.7264 45.1562 46.7264 43.8203 45.9298 43.0234 Z M 10.0704 43.0234 C 9.2735 43.7969 9.2735 45.1328 10.0469 45.9062 C 10.8204 46.6797 12.1563 46.6797 12.9532 45.9297 L 18.0391 40.8203 C 18.8360 40.0468 18.8360 38.7344 18.0391 37.9609 C 17.2891 37.1641 15.9532 37.1641 15.1798 37.9609 Z M 30.0391 44.1719 C 30.0391 43.0469 29.1016 42.1094 28.0001 42.1094 C 26.8985 42.1094 25.9610 43.0469 25.9610 44.1719 L 25.9610 51.3906 C 25.9610 52.4922 26.8985 53.4297 28.0001 53.4297 C 29.1016 53.4297 30.0391 52.4922 30.0391 51.3906 Z"
  }));
}

var _default = Rays;
exports["default"] = _default;