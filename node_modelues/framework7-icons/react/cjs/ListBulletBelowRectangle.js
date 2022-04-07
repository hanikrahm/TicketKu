"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ListBulletBelowRectangle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 12.0626 6.3789 C 7.2813 6.3789 5.5704 8.4648 5.5704 13.0117 L 5.5704 23.9101 C 5.5704 28.4570 7.2813 30.5430 12.0626 30.5430 L 43.9375 30.5430 C 48.7189 30.5430 50.4296 28.4570 50.4296 23.9101 L 50.4296 13.0117 C 50.4296 8.4648 48.7189 6.3789 43.9375 6.3789 Z M 9.3438 24.0274 L 9.3438 12.8945 C 9.3438 10.8086 10.0235 9.8945 12.0860 9.8945 L 43.9141 9.8945 C 46.0000 9.8945 46.6563 10.8086 46.6563 12.8945 L 46.6563 24.0274 C 46.6563 26.1133 46.0000 27.0274 43.9141 27.0274 L 12.0860 27.0274 C 10.0235 27.0274 9.3438 26.1133 9.3438 24.0274 Z M 11.1016 37.9023 C 11.1016 36.5195 9.9766 35.3711 8.5704 35.3711 C 7.1641 35.3711 6.0391 36.5195 6.0391 37.9023 C 6.0391 39.3086 7.1641 40.4102 8.5704 40.4102 C 9.9766 40.4102 11.1016 39.3086 11.1016 37.9023 Z M 49.6093 37.9023 C 49.6093 36.8711 48.7424 36.0977 47.5938 36.0977 L 16.0704 36.0977 C 14.8985 36.0977 14.0548 36.8711 14.0548 37.9023 C 14.0548 38.9336 14.8985 39.7305 16.0704 39.7305 L 47.5938 39.7305 C 48.7424 39.7305 49.6093 38.9336 49.6093 37.9023 Z M 11.1016 47.0898 C 11.1016 45.7070 9.9766 44.5352 8.5704 44.5352 C 7.1641 44.5352 6.0391 45.7070 6.0391 47.0898 C 6.0391 48.4961 7.1641 49.6211 8.5704 49.6211 C 9.9766 49.6211 11.1016 48.4961 11.1016 47.0898 Z M 49.6093 47.0898 C 49.6093 46.0586 48.7424 45.2852 47.5938 45.2852 L 16.0704 45.2852 C 14.8985 45.2852 14.0548 46.0586 14.0548 47.0898 C 14.0548 48.1211 14.8985 48.9180 16.0704 48.9180 L 47.5938 48.9180 C 48.7424 48.9180 49.6093 48.1211 49.6093 47.0898 Z"
  }));
}

var _default = ListBulletBelowRectangle;
exports["default"] = _default;