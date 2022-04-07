"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DropTriangle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 9.9647 50.2070 L 46.0351 50.2070 C 50.0195 50.2070 52.5040 47.3476 52.5040 43.7383 C 52.5040 42.6601 52.2227 41.5586 51.6367 40.5508 L 33.5663 9.0742 C 32.3476 6.9414 30.2147 5.7930 28.0116 5.7930 C 25.8319 5.7930 23.6757 6.9414 22.4335 9.0742 L 4.3632 40.5742 C 3.7772 41.5820 3.4960 42.6601 3.4960 43.7383 C 3.4960 47.3476 6.0038 50.2070 9.9647 50.2070 Z M 10.0116 46.5273 C 8.3710 46.5273 7.2929 45.1914 7.2929 43.7383 C 7.2929 43.3164 7.3632 42.8242 7.5976 42.3320 L 25.6444 10.8554 C 26.1600 9.9648 27.0976 9.5430 28.0116 9.5430 C 28.9257 9.5430 29.8163 9.9414 30.3319 10.8554 L 48.3789 42.3555 C 48.6131 42.8242 48.7303 43.3164 48.7303 43.7383 C 48.7303 45.1914 47.6051 46.5273 45.9882 46.5273 Z M 28.0116 41.1601 C 31.4804 41.1601 34.3398 38.4414 34.3398 34.9726 C 34.3398 32.9805 33.3554 31.1055 32.4178 29.3476 L 28.5976 22.2930 C 28.4804 22.0586 28.2694 21.9179 28.0116 21.9179 C 27.7304 21.9179 27.5897 22.0586 27.4491 22.3164 L 23.6054 29.3476 C 22.6444 31.1055 21.6835 32.9805 21.6835 34.9726 C 21.6835 38.4414 24.5429 41.1601 28.0116 41.1601 Z"
  }));
}

var _default = DropTriangle;
exports["default"] = _default;