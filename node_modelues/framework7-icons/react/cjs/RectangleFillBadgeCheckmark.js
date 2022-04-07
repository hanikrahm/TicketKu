"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function RectangleFillBadgeCheckmark(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 49.8668 10.1221 L 16.0558 10.1221 C 11.9930 10.1221 9.9421 12.1340 9.9421 16.1772 L 9.9421 27.2327 C 16.8566 27.2327 22.5406 32.9167 22.5406 39.8312 C 22.5406 42.0970 21.9156 44.2260 20.8413 46.0816 L 49.8668 46.0816 C 53.9491 46.0816 56 44.0503 56 40.0265 L 56 16.1772 C 56 12.1535 53.9491 10.1221 49.8668 10.1221 Z M 9.9226 49.7538 C 15.3721 49.7538 19.8451 45.3003 19.8451 39.8312 C 19.8451 34.4011 15.3721 29.9086 9.9226 29.9086 C 4.4925 29.9086 0 34.4011 0 39.8312 C 0 45.3003 4.4925 49.7538 9.9226 49.7538 Z M 8.7506 45.6519 C 8.4381 45.6519 8.0474 45.5152 7.7935 45.2417 L 4.0432 41.1399 C 3.9065 40.9836 3.8089 40.6321 3.8089 40.3586 C 3.8089 39.6945 4.3362 39.1671 5.0003 39.1671 C 5.3910 39.1671 5.7035 39.3624 5.9184 39.5773 L 8.6920 42.5853 L 13.8682 35.4169 C 14.0830 35.1043 14.4346 34.8895 14.8643 34.8895 C 15.5089 34.8895 16.0753 35.3973 16.0753 36.0809 C 16.0753 36.2763 15.9777 36.5497 15.8019 36.7841 L 9.7468 45.2027 C 9.5515 45.4761 9.1608 45.6519 8.7506 45.6519 Z"
  }));
}

var _default = RectangleFillBadgeCheckmark;
exports["default"] = _default;