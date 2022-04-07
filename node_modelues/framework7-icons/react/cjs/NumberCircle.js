"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function NumberCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 21.9530 39.4375 C 22.8671 39.4375 23.4296 38.9922 23.6171 38.1016 L 24.6718 33.0859 L 29.0312 33.0859 L 28.0702 37.6797 C 27.8593 38.6406 28.5390 39.4375 29.4999 39.4375 C 30.4374 39.4375 31.0468 38.9922 31.2343 38.1016 L 32.2890 33.0625 L 34.7265 33.0625 C 35.6405 33.0625 36.2968 32.3828 36.2968 31.4688 C 36.2968 30.6719 35.7343 30.0859 34.9609 30.0859 L 32.9218 30.0859 L 33.9296 25.3516 L 36.3905 25.3516 C 37.3046 25.3516 37.9609 24.6719 37.9609 23.7578 C 37.9609 22.9609 37.3983 22.3750 36.6249 22.3750 L 34.5390 22.3750 L 35.4530 18.0156 C 35.6405 17.0547 34.9374 16.2344 33.9765 16.2344 C 33.0624 16.2344 32.4765 16.7031 32.2890 17.5703 L 31.2812 22.3750 L 26.9218 22.3750 L 27.8124 18.0156 C 28.0234 17.0781 27.3671 16.2344 26.3827 16.2344 C 25.4452 16.2344 24.8593 16.7031 24.6718 17.5703 L 23.6874 22.3750 L 21.2030 22.3750 C 20.3124 22.3750 19.6327 23.0781 19.6327 23.9688 C 19.6327 24.7656 20.1952 25.3516 20.9921 25.3516 L 23.0312 25.3516 L 22.0468 30.0859 L 19.5390 30.0859 C 18.6249 30.0859 17.9687 30.7890 17.9687 31.6797 C 17.9687 32.4766 18.5312 33.0625 19.3280 33.0625 L 21.4374 33.0625 L 20.4765 37.6797 C 20.2890 38.6406 20.9921 39.4375 21.9530 39.4375 Z M 25.0936 30.3672 L 26.1718 25.1172 L 30.9062 25.1172 L 29.8046 30.3672 Z"
  }));
}

var _default = NumberCircle;
exports["default"] = _default;