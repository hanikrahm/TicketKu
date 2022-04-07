"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LineHorizontal3DecreaseCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 15.2265 23.5 L 40.7968 23.5 C 41.8280 23.5 42.5546 22.8437 42.5546 21.8594 C 42.5546 20.8516 41.8280 20.1953 40.7968 20.1953 L 15.2265 20.1953 C 14.1952 20.1953 13.4452 20.8516 13.4452 21.8594 C 13.4452 22.8437 14.1952 23.5 15.2265 23.5 Z M 18.6952 31.2578 L 37.3280 31.2578 C 38.3593 31.2578 39.0858 30.6016 39.0858 29.6172 C 39.0858 28.6094 38.3593 27.9531 37.3280 27.9531 L 18.6952 27.9531 C 17.6640 27.9531 16.9374 28.6094 16.9374 29.6172 C 16.9374 30.6016 17.6640 31.2578 18.6952 31.2578 Z M 22.3280 39.0390 L 33.6952 39.0390 C 34.7265 39.0390 35.4765 38.3828 35.4765 37.3984 C 35.4765 36.3906 34.7265 35.7344 33.6952 35.7344 L 22.3280 35.7344 C 21.2968 35.7344 20.5468 36.3906 20.5468 37.3984 C 20.5468 38.3828 21.2968 39.0390 22.3280 39.0390 Z"
  }));
}

var _default = LineHorizontal3DecreaseCircle;
exports["default"] = _default;