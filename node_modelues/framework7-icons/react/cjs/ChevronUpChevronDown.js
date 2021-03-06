"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ChevronUpChevronDown(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 28 7.2578 C 27.4844 7.2578 26.9688 7.4687 26.4063 7.9375 L 10.6094 20.7578 C 10.2110 21.1094 9.9766 21.6016 9.9766 22.3047 C 9.9766 23.5234 10.8906 24.4375 12.1328 24.4375 C 12.6250 24.4375 13.1406 24.2500 13.6797 23.8281 L 28 12.1562 L 42.3203 23.8281 C 42.8594 24.2500 43.3750 24.4375 43.8906 24.4375 C 45.1094 24.4375 46.0234 23.5234 46.0234 22.3047 C 46.0234 21.6016 45.7890 21.1094 45.3906 20.7578 L 29.5937 7.9140 C 29.0312 7.4687 28.5390 7.2578 28 7.2578 Z M 28 48.7422 C 28.5390 48.7422 29.0312 48.5312 29.5937 48.0859 L 45.3906 35.2422 C 45.7890 34.8906 46.0234 34.3984 46.0234 33.6953 C 46.0234 32.4765 45.1094 31.5391 43.8906 31.5391 C 43.3750 31.5391 42.8594 31.7500 42.3203 32.1718 L 28 43.8437 L 13.6797 32.1718 C 13.1406 31.7500 12.6250 31.5391 12.1328 31.5391 C 10.8906 31.5391 9.9766 32.4765 9.9766 33.6953 C 9.9766 34.3984 10.2110 34.8906 10.6094 35.2422 L 26.4063 48.0625 C 26.9688 48.5312 27.4844 48.7422 28 48.7422 Z"
  }));
}

var _default = ChevronUpChevronDown;
exports["default"] = _default;