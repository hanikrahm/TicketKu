"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function GridCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 13.8202 32.6875 C 13.8202 33.6953 14.4765 34.3281 15.5546 34.3281 L 21.3671 34.3281 L 21.3671 40.1875 C 21.3671 41.2656 21.9999 41.9219 23.0312 41.9219 C 24.0155 41.9219 24.6483 41.2656 24.6483 40.1875 L 24.6483 34.3281 L 31.2577 34.3281 L 31.2577 40.1875 C 31.2577 41.2656 31.8671 41.9219 32.8983 41.9219 C 33.9062 41.9219 34.5390 41.2656 34.5390 40.1875 L 34.5390 34.3281 L 40.4452 34.3281 C 41.4999 34.3281 42.1796 33.6953 42.1796 32.6875 C 42.1796 31.6797 41.4999 31.0469 40.4452 31.0469 L 34.5390 31.0469 L 34.5390 25.0703 L 40.4452 25.0703 C 41.4999 25.0703 42.1796 24.4375 42.1796 23.4297 C 42.1796 22.3984 41.4999 21.7890 40.4452 21.7890 L 34.5390 21.7890 L 34.5390 15.7656 C 34.5390 14.6641 33.9062 14.0312 32.8983 14.0312 C 31.8671 14.0312 31.2577 14.6641 31.2577 15.7656 L 31.2577 21.7890 L 24.6483 21.7890 L 24.6483 15.7656 C 24.6483 14.6641 24.0155 14.0312 23.0312 14.0312 C 21.9999 14.0312 21.3671 14.6641 21.3671 15.7656 L 21.3671 21.7890 L 15.5546 21.7890 C 14.4765 21.7890 13.8202 22.3984 13.8202 23.4297 C 13.8202 24.4375 14.4765 25.0703 15.5546 25.0703 L 21.3671 25.0703 L 21.3671 31.0469 L 15.5546 31.0469 C 14.4765 31.0469 13.8202 31.6797 13.8202 32.6875 Z M 24.6952 31.0469 L 24.6952 25.0703 L 31.2812 25.0703 L 31.2812 31.0469 Z"
  }));
}

var _default = GridCircle;
exports["default"] = _default;