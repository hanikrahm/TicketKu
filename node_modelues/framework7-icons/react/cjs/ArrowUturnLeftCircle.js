"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUturnLeftCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 39.0155 30.8828 C 39.0155 25.2344 34.9609 21.8125 29.4999 21.8125 L 22.4921 21.8125 L 19.7265 21.9063 L 21.5780 20.4531 L 23.9921 18.1094 C 24.3202 17.8047 24.5312 17.3828 24.5312 16.8906 C 24.5312 15.9297 23.8046 15.1797 22.8436 15.1797 C 22.3514 15.1797 21.9765 15.3437 21.6483 15.6953 L 15.4140 22.0234 C 15.0155 22.3984 14.7812 22.8906 14.7812 23.4531 C 14.7812 23.9922 15.0155 24.4844 15.4140 24.8594 L 21.6718 31.2578 C 21.9999 31.5859 22.3749 31.7500 22.8671 31.7500 C 23.8046 31.7500 24.5312 31.0000 24.5312 30.0390 C 24.5312 29.5937 24.3671 29.1484 24.0155 28.8203 L 21.0858 26.0078 L 19.7265 25 L 22.4921 25.0937 L 29.4999 25.0937 C 32.9452 25.0937 35.5702 27.0859 35.5702 30.6953 C 35.5702 34.3750 33.0155 36.6719 29.4765 36.6719 L 26.2187 36.6719 C 25.2109 36.6719 24.4374 37.2578 24.4374 38.3359 C 24.4374 39.4141 25.2109 40.0234 26.2655 40.0234 L 29.4765 40.0234 C 34.9374 40.0234 39.0155 36.5078 39.0155 30.8828 Z"
  }));
}

var _default = ArrowUturnLeftCircle;
exports["default"] = _default;