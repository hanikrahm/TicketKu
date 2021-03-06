"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function RectangleBadgeCheckmark(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 49.6885 9.4282 L 14.9146 9.4282 C 10.7136 9.4282 8.6030 11.4986 8.6030 15.6594 L 8.6030 27.1368 C 9.1457 27.0764 9.6884 27.0363 10.2110 27.0363 C 10.7538 27.0363 11.2965 27.0764 11.8392 27.1368 L 11.8392 15.8202 C 11.8392 13.7298 12.9648 12.6644 14.9547 12.6644 L 49.6481 12.6644 C 51.6381 12.6644 52.7640 13.7298 52.7640 15.8202 L 52.7640 40.0413 C 52.7640 42.1317 51.6381 43.1970 49.6481 43.1970 L 22.7336 43.1970 C 22.4723 44.3428 22.0301 45.4282 21.4472 46.4332 L 49.6885 46.4332 C 53.9096 46.4332 56 44.3428 56 40.2021 L 56 15.6594 C 56 11.5187 53.9096 9.4282 49.6885 9.4282 Z M 10.2110 50.2121 C 15.8191 50.2121 20.4221 45.6292 20.4221 40.0011 C 20.4221 34.4131 15.8191 29.7900 10.2110 29.7900 C 4.6231 29.7900 0 34.4131 0 40.0011 C 0 45.6292 4.6231 50.2121 10.2110 50.2121 Z M 9.0050 45.9910 C 8.6834 45.9910 8.2814 45.8503 8.0201 45.5689 L 4.1608 41.3478 C 4.0201 41.1870 3.9196 40.8252 3.9196 40.5438 C 3.9196 39.8604 4.4623 39.3177 5.1457 39.3177 C 5.5477 39.3177 5.8693 39.5187 6.0904 39.7398 L 8.9447 42.8352 L 14.2714 35.4584 C 14.4925 35.1367 14.8543 34.9156 15.2965 34.9156 C 15.9598 34.9156 16.5427 35.4382 16.5427 36.1418 C 16.5427 36.3428 16.4422 36.6242 16.2613 36.8654 L 10.0301 45.5287 C 9.8292 45.8101 9.4271 45.9910 9.0050 45.9910 Z"
  }));
}

var _default = RectangleBadgeCheckmark;
exports["default"] = _default;