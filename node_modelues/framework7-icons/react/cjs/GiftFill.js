"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function GiftFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 25.9257 28.5390 L 25.9257 16.1172 L 22.4335 16.1172 C 18.5663 16.1172 16.5272 13.6094 16.5272 11.1719 C 16.5272 8.6406 18.4023 7.1406 20.9101 7.1406 C 23.7929 7.1406 26.0429 9.3672 26.0429 13.0937 L 26.0429 16.1172 L 29.9570 16.1172 L 29.9570 13.0937 C 29.9570 9.3672 32.2070 7.1406 35.0897 7.1406 C 37.5976 7.1406 39.4960 8.6406 39.4960 11.1719 C 39.4960 13.6094 37.3866 16.1172 33.5663 16.1172 L 30.0741 16.1172 L 30.0741 28.5390 L 46.5976 28.5390 C 49.1524 28.5390 50.5352 27.5547 50.5352 25.0468 L 50.5352 19.6094 C 50.5352 17.1250 49.1524 16.1172 46.5976 16.1172 L 41.1366 16.1172 C 42.5897 14.8047 43.4570 13.0234 43.4570 11.0078 C 43.4570 6.4844 39.8710 3.2266 35.3241 3.2266 C 31.9492 3.2266 29.2070 5.1015 28.0116 8.4297 C 26.8163 5.1015 24.0507 3.2266 20.6757 3.2266 C 16.1523 3.2266 12.5429 6.4844 12.5429 11.0078 C 12.5429 13.0234 13.3866 14.8047 14.8632 16.1172 L 9.4023 16.1172 C 6.9882 16.1172 5.4648 17.1250 5.4648 19.6094 L 5.4648 25.0468 C 5.4648 27.5547 6.8710 28.5390 9.4023 28.5390 Z M 25.9257 52.7734 L 25.9257 31.0468 L 8.8163 31.0468 L 8.8163 46.8203 C 8.8163 50.7344 11.1132 52.7734 15.0272 52.7734 Z M 30.0741 31.0468 L 30.0741 52.7734 L 40.9726 52.7734 C 44.8866 52.7734 47.1835 50.7344 47.1835 46.8203 L 47.1835 31.0468 Z"
  }));
}

var _default = GiftFill;
exports["default"] = _default;