"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PencilEllipsisRectangle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 53.9224 16.2019 L 55.3261 14.7794 C 56.0000 14.0869 56.0000 13.1698 55.3449 12.5334 L 54.8957 12.0842 C 54.2969 11.4853 53.3609 11.5414 52.7246 12.1778 L 51.3209 13.5628 Z M 32.4171 35.5922 L 36.2351 33.8890 L 52.5375 17.6056 L 49.9172 15.0040 L 33.6335 31.2874 L 31.8369 34.9746 C 31.6871 35.2928 32.0615 35.7420 32.4171 35.5922 Z M 5.4839 47.9077 L 42.3183 47.9077 C 45.8556 47.9077 47.7833 46.0548 47.7833 42.5174 L 47.7833 27.0201 L 44.7700 30.0334 L 44.7700 42.6671 C 44.7700 44.2206 43.8903 45.1002 42.3367 45.1002 L 5.4465 45.1002 C 3.8930 45.1002 3.0134 44.2206 3.0134 42.6671 L 3.0134 26.9264 C 3.0134 25.3730 3.8930 24.4933 5.4465 24.4933 L 35.7487 24.4933 L 38.5749 21.6858 L 5.4839 21.6858 C 1.9465 21.6858 0 23.5387 0 27.0762 L 0 42.5174 C 0 46.0548 1.9465 47.9077 5.4839 47.9077 Z M 10.2192 37.2019 C 11.5481 37.2019 12.6337 36.1163 12.6337 34.8061 C 12.6337 33.4773 11.5481 32.4104 10.2192 32.4104 C 8.8903 32.4104 7.8235 33.4773 7.8235 34.8061 C 7.8235 36.1163 8.8903 37.2019 10.2192 37.2019 Z M 17.7433 37.2019 C 19.0722 37.2019 20.1578 36.1163 20.1578 34.8061 C 20.1578 33.4773 19.0722 32.4104 17.7433 32.4104 C 16.3957 32.4104 15.3289 33.4773 15.3289 34.8061 C 15.3289 36.1163 16.3957 37.2019 17.7433 37.2019 Z M 25.2486 37.2019 C 26.5588 37.2019 27.6444 36.1163 27.6444 34.8061 C 27.6444 33.4773 26.5588 32.4104 25.2486 32.4104 C 23.9198 32.4104 22.8342 33.4773 22.8342 34.8061 C 22.8342 36.1163 23.9198 37.2019 25.2486 37.2019 Z"
  }));
}

var _default = PencilEllipsisRectangle;
exports["default"] = _default;