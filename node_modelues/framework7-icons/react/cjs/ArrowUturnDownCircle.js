"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUturnDownCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 30.1562 15.9531 C 24.5312 15.9531 21.1093 20.0312 21.1093 25.4922 L 21.1093 32.5 L 21.2030 35.2656 L 19.7499 33.4141 L 17.3827 31.0000 C 17.1014 30.6719 16.6796 30.4609 16.1874 30.4609 C 15.2030 30.4609 14.4765 31.1875 14.4765 32.1484 C 14.4765 32.6406 14.6405 33.0156 14.9921 33.3437 L 21.3202 39.5781 C 21.6952 39.9531 22.1874 40.2109 22.7499 40.2109 C 23.2890 40.2109 23.7812 39.9531 24.1562 39.5781 L 30.5546 33.3203 C 30.8827 32.9922 31.0468 32.6172 31.0468 32.1250 C 31.0468 31.1875 30.2968 30.4609 29.3358 30.4609 C 28.8905 30.4609 28.4452 30.6250 28.1171 30.9766 L 25.3046 33.9063 L 24.2968 35.2656 L 24.3905 32.5 L 24.3905 25.4922 C 24.3905 22.0469 26.3827 19.3984 29.9687 19.3984 C 33.6718 19.3984 35.9687 21.9766 35.9687 25.5156 L 35.9687 28.7734 C 35.9687 29.7812 36.5546 30.5547 37.6327 30.5547 C 38.7109 30.5547 39.3202 29.7812 39.3202 28.7266 L 39.3202 25.5156 C 39.3202 20.0547 35.8046 15.9531 30.1562 15.9531 Z"
  }));
}

var _default = ArrowUturnDownCircle;
exports["default"] = _default;