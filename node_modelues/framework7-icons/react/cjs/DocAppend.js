"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DocAppend(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 15.3203 53.0078 L 40.7031 53.0078 C 45.3438 53.0078 47.7344 50.6172 47.7344 45.8828 L 47.7344 10.1406 C 47.7344 5.4297 45.3438 2.9922 40.7031 2.9922 L 15.3203 2.9922 C 10.6562 2.9922 8.2656 5.4297 8.2656 10.1406 L 8.2656 45.8828 C 8.2656 50.6172 10.6562 53.0078 15.3203 53.0078 Z M 15.4844 49.2578 C 13.2344 49.2578 12.0391 48.0156 12.0391 45.8359 L 12.0391 10.1875 C 12.0391 7.9843 13.2344 6.7656 15.5078 6.7656 L 40.4922 6.7656 C 42.7656 6.7656 43.9609 7.9843 43.9609 10.1875 L 43.9609 45.8359 C 43.9609 48.0156 42.7656 49.2578 40.5156 49.2578 Z M 33.8125 26.8047 C 36.6719 26.8047 38.6406 24.8594 38.6406 22.0234 C 38.6406 19.2812 36.9531 17.4765 34.4687 17.4765 C 33.2266 17.4765 32.1953 17.8750 31.4687 18.7656 L 31.0000 18.7656 C 31.1875 17.9453 31.7031 17.1250 32.4766 16.4687 C 33.2031 15.7890 34.1406 15.3672 35.1953 15.1328 C 36.0625 14.9453 36.3203 14.6641 36.3203 14.1484 C 36.3203 13.6797 35.9687 13.3047 35.3125 13.3047 C 33.7891 13.3047 31.8438 14.2656 30.5781 15.6250 C 29.2656 17.0547 28.6094 18.9063 28.6094 20.8750 C 28.6094 24.6250 30.9297 26.8047 33.8125 26.8047 Z M 21.9297 26.8281 C 24.7891 26.8281 26.7578 24.8828 26.7578 22.0468 C 26.7578 19.3047 25.0703 17.5 22.5860 17.5 C 21.3438 17.5 20.3125 17.8984 19.6094 18.7890 L 19.1172 18.7890 C 19.3047 17.9453 19.8438 17.1016 20.6640 16.4453 C 21.4141 15.8125 22.2813 15.3672 23.3125 15.1563 C 24.1797 14.9687 24.4609 14.6875 24.4609 14.1719 C 24.4609 13.7031 24.1094 13.3281 23.4297 13.3281 C 21.9062 13.3281 20.0078 14.2422 18.6953 15.6484 C 17.3828 17.0781 16.7266 18.9297 16.7266 20.8984 C 16.7266 24.6484 19.0469 26.8281 21.9297 26.8281 Z M 18.8125 34.7265 L 36.6016 34.7265 C 37.4219 34.7265 38.0547 34.0937 38.0547 33.2734 C 38.0547 32.4765 37.4219 31.8437 36.6016 31.8437 L 18.8125 31.8437 C 17.9687 31.8437 17.3594 32.4765 17.3594 33.2734 C 17.3594 34.0937 17.9687 34.7265 18.8125 34.7265 Z M 18.8125 42.9062 L 27.2500 42.9062 C 28.0703 42.9062 28.6797 42.2969 28.6797 41.4765 C 28.6797 40.6562 28.0703 40.0234 27.2500 40.0234 L 18.8125 40.0234 C 17.9687 40.0234 17.3594 40.6562 17.3594 41.4765 C 17.3594 42.2969 17.9687 42.9062 18.8125 42.9062 Z"
  }));
}

var _default = DocAppend;
exports["default"] = _default;