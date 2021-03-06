"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DecreaseIndent(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 32.1836 11.3594 C 33.1680 11.3594 33.9414 10.5859 33.9414 9.5781 C 33.9414 8.5937 33.1680 7.8203 32.1836 7.8203 L 2.6055 7.8203 C 1.5977 7.8203 .8008 8.5937 .8008 9.5781 C .8008 10.5859 1.5977 11.3594 2.6055 11.3594 Z M 32.1836 23.6406 C 33.1680 23.6406 33.9414 22.8672 33.9414 21.8594 C 33.9414 20.8750 33.1680 20.1015 32.1836 20.1015 L 2.6055 20.1015 C 1.5977 20.1015 .8008 20.8750 .8008 21.8594 C .8008 22.8672 1.5977 23.6406 2.6055 23.6406 Z M 51.4960 35.1953 C 53.2072 36.3203 55.1992 35.6875 55.1756 33.6015 L 55.1756 22.4922 C 55.1992 20.3359 53.3008 19.6563 51.4960 20.8750 L 43.7382 26.1484 C 42.4024 27.0859 42.3555 29.0781 43.7382 30.0156 Z M 32.1836 35.9219 C 33.1680 35.9219 33.9414 35.1250 33.9414 34.1406 C 33.9414 33.1563 33.1680 32.3828 32.1836 32.3828 L 2.6055 32.3828 C 1.5977 32.3828 .8008 33.1563 .8008 34.1406 C .8008 35.1250 1.5977 35.9219 2.6055 35.9219 Z M 32.1836 48.1797 C 33.1680 48.1797 33.9414 47.4063 33.9414 46.4219 C 33.9414 45.4375 33.1680 44.6406 32.1836 44.6406 L 14.5587 44.6406 C 13.5743 44.6406 12.7774 45.4375 12.7774 46.4219 C 12.7774 47.4063 13.5743 48.1797 14.5587 48.1797 Z"
  }));
}

var _default = DecreaseIndent;
exports["default"] = _default;