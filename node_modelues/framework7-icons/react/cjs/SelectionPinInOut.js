"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SelectionPinInOut(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 17.8610 43.2160 L 39.2323 43.2160 L 39.2323 48.8978 C 38.0271 49.5219 37.1877 50.7917 37.1877 52.2337 C 37.1877 54.3213 38.9095 56 40.9541 56 C 43.0632 56 44.7204 54.3213 44.7204 52.2337 C 44.7204 50.7917 43.9026 49.5219 42.6974 48.8978 L 42.6974 18.6810 C 42.6974 14.7425 40.6743 12.7840 36.7142 12.7840 L 15.1062 12.7840 L 15.1062 7.0807 C 16.3115 6.4566 17.1078 5.2083 17.1078 3.7663 C 17.1078 1.7002 15.4291 0 13.3414 0 C 11.2753 0 9.5751 1.7002 9.5751 3.7663 C 9.5751 5.2298 10.4145 6.4996 11.6412 7.1238 L 11.6412 37.1038 C 11.6412 41.1714 13.7288 43.2160 17.8610 43.2160 Z M 17.7965 39.9662 C 16.0102 39.9662 15.1062 38.9762 15.1062 37.2544 L 15.1062 16.0338 L 36.5421 16.0338 C 38.3284 16.0338 39.2323 17.0238 39.2323 18.7456 L 39.2323 39.9662 Z"
  }));
}

var _default = SelectionPinInOut;
exports["default"] = _default;