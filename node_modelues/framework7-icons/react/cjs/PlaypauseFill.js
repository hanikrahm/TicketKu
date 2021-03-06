"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PlaypauseFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 34.5434 44.7332 L 39.0240 44.7332 C 40.7611 44.7332 41.6691 43.8252 41.6691 42.0881 L 41.6691 15.2034 C 41.6691 13.4072 40.7611 12.5782 39.0240 12.5782 L 34.5434 12.5782 C 32.8064 12.5782 31.9181 13.4862 31.9181 15.2034 L 31.9181 42.0881 C 31.9181 43.8252 32.8064 44.7332 34.5434 44.7332 Z M 48.8936 44.7332 L 53.3744 44.7332 C 55.1114 44.7332 56 43.8252 56 42.0881 L 56 15.2034 C 56 13.4072 55.1114 12.5782 53.3744 12.5782 L 48.8936 12.5782 C 47.1569 12.5782 46.2485 13.4862 46.2485 15.2034 L 46.2485 42.0881 C 46.2485 43.8252 47.1569 44.7332 48.8936 44.7332 Z M 2.8424 44.1410 C 3.6517 44.1410 4.3228 43.8844 5.1124 43.4106 L 25.2266 31.5869 C 26.6280 30.7579 27.2400 29.7709 27.2400 28.6458 C 27.2400 27.5009 26.6280 26.5337 25.2266 25.7047 L 5.1124 13.8612 C 4.3031 13.3875 3.6517 13.1309 2.8424 13.1309 C 1.3028 13.1309 0 14.3152 0 16.5260 L 0 40.7656 C 0 42.9764 1.3028 44.1410 2.8424 44.1410 Z"
  }));
}

var _default = PlaypauseFill;
exports["default"] = _default;