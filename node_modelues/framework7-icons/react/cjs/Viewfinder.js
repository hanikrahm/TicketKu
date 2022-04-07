"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Viewfinder(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 47.6171 21.4023 C 48.8591 21.4023 49.5157 20.7227 49.5157 19.4805 L 49.5157 13.7383 C 49.5157 8.9102 47.0780 6.4961 42.1562 6.4961 L 36.4374 6.4961 C 35.1952 6.4961 34.5155 7.1758 34.5155 8.3711 C 34.5155 9.5898 35.1952 10.2696 36.4374 10.2696 L 42.1093 10.2696 C 44.4062 10.2696 45.7421 11.5118 45.7421 13.9492 L 45.7421 19.4805 C 45.7421 20.7227 46.4218 21.4023 47.6171 21.4023 Z M 8.3827 21.4023 C 9.6015 21.4023 10.2577 20.7227 10.2577 19.4805 L 10.2577 13.9492 C 10.2577 11.5118 11.5702 10.2696 13.9140 10.2696 L 19.5858 10.2696 C 20.8046 10.2696 21.4843 9.5898 21.4843 8.3711 C 21.4843 7.1758 20.8046 6.4961 19.5858 6.4961 L 13.8436 6.4961 C 8.9687 6.4961 6.4843 8.9102 6.4843 13.7383 L 6.4843 19.4805 C 6.4843 20.7227 7.1640 21.4023 8.3827 21.4023 Z M 13.8436 49.5039 L 19.5858 49.5039 C 20.8046 49.5039 21.4843 48.8242 21.4843 47.6289 C 21.4843 46.4102 20.8046 45.7305 19.5858 45.7305 L 13.9140 45.7305 C 11.5702 45.7305 10.2577 44.4883 10.2577 42.0508 L 10.2577 36.5196 C 10.2577 35.2774 9.5780 34.5977 8.3827 34.5977 C 7.1405 34.5977 6.4843 35.2774 6.4843 36.5196 L 6.4843 42.2383 C 6.4843 47.0898 8.9687 49.5039 13.8436 49.5039 Z M 36.4374 49.5039 L 42.1562 49.5039 C 47.0780 49.5039 49.5157 47.0664 49.5157 42.2383 L 49.5157 36.5196 C 49.5157 35.2774 48.8360 34.5977 47.6171 34.5977 C 46.3984 34.5977 45.7421 35.2774 45.7421 36.5196 L 45.7421 42.0508 C 45.7421 44.4883 44.4062 45.7305 42.1093 45.7305 L 36.4374 45.7305 C 35.1952 45.7305 34.5155 46.4102 34.5155 47.6289 C 34.5155 48.8242 35.1952 49.5039 36.4374 49.5039 Z"
  }));
}

var _default = Viewfinder;
exports["default"] = _default;