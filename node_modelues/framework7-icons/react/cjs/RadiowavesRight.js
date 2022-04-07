"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function RadiowavesRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 33.2500 51.0273 C 34.0938 51.6133 35.2656 51.3789 35.9219 50.4180 C 40.2344 44.2773 42.7187 36.3789 42.7187 28.0117 C 42.7187 19.6445 40.2109 11.7227 35.9219 5.5820 C 35.2656 4.6211 34.1172 4.3867 33.2500 4.9961 C 32.3360 5.6055 32.2187 6.7773 32.8984 7.7617 C 36.6484 13.3164 38.9922 20.4414 38.9922 28.0117 C 38.9922 35.5820 36.7422 42.8008 32.875 48.2617 C 32.1953 49.2227 32.3360 50.3945 33.2500 51.0273 Z M 23.7813 44.6289 C 24.6953 45.2383 25.8203 45.0039 26.4766 44.0664 C 29.5938 39.7539 31.3750 34.0117 31.3750 28.0117 C 31.3750 21.9883 29.6172 16.2461 26.4766 11.9336 C 25.7969 11.0195 24.6953 10.7851 23.7813 11.3945 C 22.8906 12.0039 22.7500 13.1524 23.4531 14.1602 C 26.0078 17.9102 27.6016 22.8320 27.6016 28.0117 C 27.6016 33.1914 26.0547 38.1602 23.4531 41.8633 C 22.7734 42.8711 22.8906 44.0195 23.7813 44.6289 Z M 14.4297 38.3008 C 15.2500 38.8633 16.375 38.6758 17.0547 37.7617 C 18.8828 35.3008 19.9844 31.6914 19.9844 28.0117 C 19.9844 24.3320 18.8594 20.7461 17.0547 18.2383 C 16.375 17.3242 15.2500 17.1367 14.4297 17.6992 C 13.4219 18.3789 13.2813 19.5742 14.0313 20.6055 C 15.3906 22.4336 16.2109 25.2227 16.2109 28.0117 C 16.2109 30.8008 15.3672 33.5898 14.0313 35.4414 C 13.3047 36.4492 13.4453 37.5976 14.4297 38.3008 Z"
  }));
}

var _default = RadiowavesRight;
exports["default"] = _default;