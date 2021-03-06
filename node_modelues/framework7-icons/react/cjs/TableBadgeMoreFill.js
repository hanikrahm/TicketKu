"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TableBadgeMoreFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 9.9421 20.2791 L 31.4475 20.2791 L 31.4475 10.1221 L 16.0753 10.1221 C 11.9930 10.1221 9.9421 12.1340 9.9421 16.1772 Z M 34.4946 20.2791 L 56 20.2791 L 56 16.1772 C 56 12.1535 53.9687 10.1221 49.8864 10.1221 L 34.4946 10.1221 Z M 34.4946 32.8581 L 56 32.8581 L 56 23.3262 L 34.4946 23.3262 Z M 31.4475 23.3262 L 9.9421 23.3262 L 9.9421 27.2327 C 14.2979 27.2327 18.1458 29.4789 20.4116 32.8581 L 31.4475 32.8581 Z M 9.9226 49.7538 C 15.3721 49.7538 19.8451 45.3003 19.8451 39.8312 C 19.8451 34.4011 15.3721 29.9086 9.9226 29.9086 C 4.4925 29.9086 0 34.4011 0 39.8312 C 0 45.3003 4.4925 49.7538 9.9226 49.7538 Z M 34.4946 46.0816 L 49.8864 46.0816 C 53.9687 46.0816 56 44.0503 56 40.0265 L 56 35.9247 L 34.4946 35.9247 Z M 31.4475 35.9247 L 21.8570 35.9247 C 22.3062 37.1553 22.5406 38.4639 22.5406 39.8312 C 22.5406 42.1165 21.9351 44.2260 20.8804 46.0816 L 31.4475 46.0816 Z M 4.4925 41.3352 C 3.6721 41.3352 3.0080 40.6321 3.0080 39.8312 C 3.0080 39.0304 3.6721 38.3272 4.4925 38.3272 C 5.3129 38.3272 5.9965 39.0304 5.9965 39.8312 C 5.9965 40.6321 5.3129 41.3352 4.4925 41.3352 Z M 9.9421 41.3352 C 9.1217 41.3352 8.4381 40.6321 8.4381 39.8312 C 8.4381 39.0304 9.1217 38.3272 9.9421 38.3272 C 10.7429 38.3272 11.4461 39.0304 11.4461 39.8312 C 11.4461 40.6321 10.7429 41.3352 9.9421 41.3352 Z M 15.3526 41.3352 C 14.5322 41.3352 13.8682 40.6321 13.8682 39.8312 C 13.8682 39.0304 14.5322 38.3272 15.3526 38.3272 C 16.1730 38.3272 16.8566 39.0304 16.8566 39.8312 C 16.8371 40.6321 16.1730 41.3352 15.3526 41.3352 Z"
  }));
}

var _default = TableBadgeMoreFill;
exports["default"] = _default;