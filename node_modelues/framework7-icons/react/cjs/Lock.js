"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Lock(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 28 4.0937 C 21.4609 4.0937 15.4844 8.7578 15.4844 18.3437 L 15.4844 23.6641 C 12.7656 24.0391 11.4063 25.7969 11.4063 29.1250 L 11.4063 46.3516 C 11.4063 50.1719 13.1641 51.9063 16.6797 51.9063 L 39.3203 51.9063 C 42.8359 51.9063 44.5937 50.1719 44.5937 46.3516 L 44.5937 29.1250 C 44.5937 25.7969 43.2344 24.0391 40.5156 23.6641 L 40.5156 18.3437 C 40.5156 8.7578 34.5390 4.0937 28 4.0937 Z M 19.2578 17.8281 C 19.2578 11.2891 23.1484 7.7032 28 7.7032 C 32.8281 7.7032 36.7422 11.2891 36.7422 17.8281 L 36.7422 23.5703 L 19.2578 23.5703 Z M 39.2031 27.1094 C 40.3047 27.1094 40.8203 27.5781 40.8203 28.8672 L 40.8203 46.5859 C 40.8203 47.8984 40.3047 48.3906 39.2031 48.3906 L 16.7968 48.3906 C 15.7187 48.3906 15.1797 47.8984 15.1797 46.5859 L 15.1797 28.8672 C 15.1797 27.5781 15.7187 27.1094 16.7968 27.1094 Z"
  }));
}

var _default = Lock;
exports["default"] = _default;