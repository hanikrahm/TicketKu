"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function FlagSlash(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 47.0665 46.5976 C 47.7931 47.3008 48.9415 47.3008 49.6213 46.5976 C 50.3476 45.9180 50.3476 44.7461 49.6213 44.0430 L 8.9102 3.3555 C 8.2071 2.6524 7.0352 2.6524 6.3321 3.3555 C 5.6524 4.0351 5.6524 5.2305 6.3321 5.9102 Z M 48.1915 38.3945 C 48.4727 37.9024 48.6368 37.2695 48.6368 36.4024 L 48.6368 12.5898 C 48.6368 11.3476 47.5587 10.5976 46.1993 10.5976 C 45.0509 10.5976 42.8946 11.6055 38.8634 11.6055 C 30.7774 11.6055 25.3868 7.4805 16.8790 7.3633 L 20.8634 11.3476 C 26.9805 12.3086 31.8790 15.1445 38.8634 15.1445 C 41.4181 15.1445 43.5274 14.8398 45.0978 14.3711 L 45.0978 35.3008 Z M 8.7931 53.3476 C 9.7774 53.3476 10.5743 52.5742 10.5743 51.5664 L 10.5743 38.5586 C 11.1603 38.3008 13.3634 37.4570 16.8087 37.4570 C 25.1056 37.4570 30.3087 41.3008 38.1603 41.6524 L 33.9181 37.4336 C 28.3868 36.4024 23.6290 33.9180 16.8087 33.9180 C 14.2305 33.9180 11.9102 34.2227 10.5743 34.7617 L 10.5743 14.3242 L 7.3165 11.0664 C 7.1290 11.4180 7.0118 11.8867 7.0118 12.5429 L 7.0118 51.5664 C 7.0118 52.5273 7.8321 53.3476 8.7931 53.3476 Z"
  }));
}

var _default = FlagSlash;
exports["default"] = _default;