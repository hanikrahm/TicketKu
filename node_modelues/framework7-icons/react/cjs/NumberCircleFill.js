"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function NumberCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 21.6483 40.0234 C 20.6405 40.0234 19.8905 39.1563 20.1014 38.1719 L 21.0858 33.2968 L 18.8827 33.2968 C 18.0624 33.2968 17.4765 32.6875 17.4765 31.8672 C 17.4765 30.9063 18.1796 30.2031 19.1171 30.2031 L 21.7421 30.2031 L 22.7968 25.2109 L 20.6405 25.2109 C 19.8202 25.2109 19.2109 24.6016 19.2109 23.7578 C 19.2109 22.8203 19.9374 22.0937 20.8514 22.0937 L 23.4530 22.0937 L 24.5312 17.0547 C 24.6952 16.1172 25.3046 15.6484 26.2890 15.6484 C 27.3202 15.6484 28.0234 16.5156 27.8124 17.5 L 26.8749 22.0937 L 31.4452 22.0937 L 32.4999 17.0547 C 32.6874 16.1172 33.3202 15.6484 34.2812 15.6484 C 35.2890 15.6484 36.0155 16.4922 35.8280 17.5 L 34.8905 22.0937 L 37.0702 22.0937 C 37.8671 22.0937 38.4530 22.7031 38.4530 23.5469 C 38.4530 24.5078 37.7733 25.2109 36.8124 25.2109 L 34.2343 25.2109 L 33.1562 30.2031 L 35.3124 30.2031 C 36.1327 30.2031 36.7187 30.8125 36.7187 31.6328 C 36.7187 32.5937 36.0155 33.2968 35.0780 33.2968 L 32.5234 33.2968 L 31.3983 38.5937 C 31.2109 39.5312 30.5780 40.0234 29.5702 40.0234 C 28.5858 40.0234 27.8827 39.1563 28.0702 38.1719 L 29.0780 33.3203 L 24.5077 33.3203 L 23.3827 38.5937 C 23.2187 39.5312 22.6093 40.0234 21.6483 40.0234 Z M 24.9530 30.4844 L 29.8983 30.4844 L 31.0468 24.9766 L 26.1014 24.9766 Z"
  }));
}

var _default = NumberCircleFill;
exports["default"] = _default;