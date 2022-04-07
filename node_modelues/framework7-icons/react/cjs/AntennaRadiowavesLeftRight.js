"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function AntennaRadiowavesLeftRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 43.8321 39.0391 C 44.5821 39.9062 45.8946 39.9062 46.7852 38.9219 C 50.6756 34.7031 52.8788 29.0781 52.8788 23.0078 C 52.8788 16.9375 50.6756 11.3125 46.7852 7.0938 C 45.8946 6.1094 44.5821 6.1094 43.8321 6.9765 C 43.0821 7.8203 43.2930 8.9219 44.1602 9.8828 C 47.3007 13.3750 49.0585 17.9687 49.0585 23.0078 C 49.0585 28.0469 47.3007 32.6406 44.1602 36.1328 C 43.2930 37.0938 43.0821 38.1953 43.8321 39.0391 Z M 12.1681 39.0391 C 12.9181 38.1953 12.6837 37.0938 11.8399 36.1328 C 8.6993 32.6406 6.9415 28.0469 6.9415 23.0078 C 6.9415 17.9687 8.6993 13.3750 11.8399 9.8828 C 12.6837 8.9219 12.9181 7.8203 12.1681 6.9765 C 11.4181 6.1094 10.1055 6.1094 9.1915 7.0938 C 5.3008 11.3125 3.1212 16.9375 3.1212 23.0078 C 3.1212 29.0781 5.3008 34.7031 9.1915 38.9219 C 10.1055 39.9062 11.4181 39.9062 12.1681 39.0391 Z M 19.1993 32.3594 C 19.9493 31.5156 19.6212 30.4609 18.8946 29.4531 C 17.4884 27.7187 16.7852 25.4453 16.7852 23.0078 C 16.7852 20.5703 17.5352 18.3672 18.8946 16.5625 C 19.6212 15.5313 19.9493 14.5000 19.1993 13.6562 C 18.4259 12.7656 17.0196 12.7422 16.1993 13.8203 C 14.1602 16.3516 12.9649 19.5625 12.9649 23.0078 C 12.9649 26.4531 14.1602 29.6641 16.1993 32.1953 C 17.0196 33.2734 18.4259 33.2500 19.1993 32.3594 Z M 36.7774 32.3594 C 37.5743 33.2500 38.9571 33.2734 39.8008 32.1953 C 41.8399 29.6641 43.0118 26.4531 43.0118 23.0078 C 43.0118 19.5625 41.8399 16.3516 39.8008 13.8203 C 38.9571 12.7422 37.5743 12.7656 36.7774 13.6562 C 36.0274 14.5000 36.3555 15.5313 37.0821 16.5625 C 38.4415 18.3672 39.1915 20.5703 39.1915 23.0078 C 39.1915 25.4453 38.4884 27.7187 37.0821 29.4531 C 36.3555 30.4609 36.0274 31.5156 36.7774 32.3594 Z M 27.9884 49.8906 C 29.1134 49.8906 29.7930 49.0937 29.7930 47.875 L 29.7930 26.8281 C 31.2228 26.1484 32.2071 24.6953 32.2071 23.0078 C 32.2071 20.6641 30.3555 18.7656 27.9884 18.7656 C 25.6446 18.7656 23.7930 20.6641 23.7930 23.0078 C 23.7930 24.6953 24.7540 26.1484 26.2071 26.8281 L 26.2071 47.875 C 26.2071 49.0703 26.9337 49.8906 27.9884 49.8906 Z"
  }));
}

var _default = AntennaRadiowavesLeftRight;
exports["default"] = _default;