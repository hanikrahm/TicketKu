"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function XmarkShield(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9883 51.6719 C 28.3633 51.6719 28.9726 51.5313 29.5821 51.2031 C 42.8945 43.7266 47.4883 40.5625 47.4883 32.0078 L 47.4883 14.0781 C 47.4883 11.6172 46.4101 10.8438 44.4414 10.0000 C 41.6758 8.8516 32.7226 5.6406 29.9570 4.6797 C 29.3242 4.4687 28.6680 4.3281 27.9883 4.3281 C 27.3321 4.3281 26.6758 4.5156 26.0430 4.6797 C 23.2774 5.5234 14.3242 8.8750 11.5586 10.0000 C 9.5899 10.8203 8.5117 11.6172 8.5117 14.0781 L 8.5117 32.0078 C 8.5117 40.5625 13.1289 43.7031 26.4180 51.2031 C 27.0274 51.5313 27.6133 51.6719 27.9883 51.6719 Z M 27.9883 47.4063 C 27.6367 47.4063 27.2383 47.2656 26.5352 46.8438 C 15.7070 40.2813 12.2383 38.3594 12.2383 31.1406 L 12.2383 14.7813 C 12.2383 13.9844 12.4023 13.6797 13.0352 13.4219 C 16.5977 12.0156 23.4648 9.5781 27.0742 8.2891 C 27.4258 8.1484 27.7305 8.0781 27.9883 8.0781 C 28.2695 8.0781 28.5508 8.1484 28.9258 8.2891 C 32.5352 9.5781 39.3321 12.1797 42.9648 13.4219 C 43.5977 13.6562 43.7617 13.9844 43.7617 14.7813 L 43.7617 31.1406 C 43.7617 38.3594 40.2695 40.2578 29.4648 46.8438 C 28.7617 47.2656 28.3633 47.4063 27.9883 47.4063 Z M 19.9961 37.2813 C 20.5117 37.2813 20.9805 37.0703 21.3321 36.6953 L 27.9648 30.0391 L 34.6445 36.6953 C 34.9961 37.0469 35.4414 37.2813 35.9805 37.2813 C 37.0352 37.2813 37.8789 36.4375 37.8789 35.3828 C 37.8789 34.8438 37.6680 34.4219 37.2930 34.0469 L 30.6367 27.3906 L 37.3164 20.6875 C 37.7148 20.2891 37.9023 19.8906 37.9023 19.375 C 37.9023 18.3438 37.0586 17.5000 36.0039 17.5000 C 35.5117 17.5000 35.1133 17.6875 34.7148 18.0860 L 27.9648 24.7656 L 21.2852 18.1094 C 20.9336 17.7344 20.5117 17.5469 19.9961 17.5469 C 18.9414 17.5469 18.0977 18.3672 18.0977 19.3984 C 18.0977 19.9141 18.3086 20.3594 18.6836 20.7109 L 25.3399 27.3906 L 18.6836 34.0703 C 18.3086 34.4219 18.0977 34.8672 18.0977 35.3828 C 18.0977 36.4375 18.9414 37.2813 19.9961 37.2813 Z"
  }));
}

var _default = XmarkShield;
exports["default"] = _default;