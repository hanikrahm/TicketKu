"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUturnRightCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 14.7812 30.8828 C 14.7812 36.5078 18.8827 40.0234 24.3436 40.0234 L 27.5546 40.0234 C 28.6093 40.0234 29.3827 39.4141 29.3827 38.3359 C 29.3827 37.2578 28.6093 36.6719 27.6014 36.6719 L 24.3436 36.6719 C 20.8046 36.6719 18.2265 34.3750 18.2265 30.6953 C 18.2265 27.0859 20.8749 25.0937 24.3202 25.0937 L 31.3280 25.0937 L 34.0936 25 L 32.7343 26.0078 L 29.8046 28.8203 C 29.4530 29.1484 29.2890 29.5937 29.2890 30.0390 C 29.2890 31.0000 30.0155 31.7500 30.9530 31.7500 C 31.4452 31.7500 31.8202 31.5859 32.1483 31.2578 L 38.4062 24.8594 C 38.7812 24.4844 39.0155 23.9922 39.0155 23.4531 C 39.0155 22.8906 38.7812 22.3984 38.4062 22.0234 L 32.1718 15.6953 C 31.8436 15.3437 31.4687 15.1797 30.9765 15.1797 C 30.0155 15.1797 29.2890 15.9297 29.2890 16.8906 C 29.2890 17.3828 29.4999 17.8047 29.8280 18.1094 L 32.2421 20.4531 L 34.0936 21.9063 L 31.3280 21.8125 L 24.3202 21.8125 C 18.8593 21.8125 14.7812 25.2344 14.7812 30.8828 Z"
  }));
}

var _default = ArrowUturnRightCircle;
exports["default"] = _default;