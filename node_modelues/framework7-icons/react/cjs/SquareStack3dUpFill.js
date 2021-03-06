"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SquareStack3dUpFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 28.0116 31.6797 C 28.9492 31.6797 29.8632 31.3750 30.9882 30.7187 L 49.3398 20.0781 C 51.2147 18.9766 51.9649 18.1094 51.9649 16.8203 C 51.9649 15.5547 51.2147 14.6875 49.3398 13.5859 L 30.9882 2.9453 C 29.8632 2.2891 28.9492 1.9844 28.0116 1.9844 C 27.0507 1.9844 26.1601 2.2891 25.0351 2.9453 L 6.6835 13.5859 C 4.8085 14.6875 4.0585 15.5547 4.0585 16.8203 C 4.0585 18.1094 4.8085 18.9766 6.6835 20.0781 L 25.0351 30.7187 C 26.1601 31.3750 27.0507 31.6797 28.0116 31.6797 Z M 28.0116 43.2344 C 28.8554 43.2344 29.5819 42.8359 30.5663 42.2500 L 50.6992 30.3672 C 51.5896 29.8281 51.9649 29.0547 51.9649 28.3281 C 51.9649 27.3672 51.2617 26.5703 50.6286 26.2656 L 28.9023 38.8047 C 28.5741 38.9922 28.2695 39.1328 28.0116 39.1328 C 27.7538 39.1328 27.4492 38.9922 27.1210 38.8047 L 5.3944 26.2656 C 4.7382 26.5703 4.0351 27.3672 4.0351 28.3281 C 4.0351 29.0547 4.4570 29.8516 5.3241 30.3672 L 25.4570 42.2500 C 26.4413 42.8359 27.1444 43.2344 28.0116 43.2344 Z M 28.0116 54.0156 C 28.8554 54.0156 29.5819 53.6172 30.5663 53.0313 L 50.6992 41.1484 C 51.5665 40.6562 51.9649 39.8359 51.9649 39.1094 C 51.9649 38.1484 51.2617 37.375 50.6286 37.0469 L 28.9023 49.6094 C 28.5741 49.7969 28.2695 49.9375 28.0116 49.9375 C 27.7538 49.9375 27.4492 49.7969 27.1210 49.6094 L 5.3944 37.0469 C 4.7382 37.375 4.0351 38.1484 4.0351 39.1094 C 4.0351 39.8359 4.4570 40.6562 5.3241 41.1484 L 25.4570 53.0313 C 26.4413 53.6172 27.1444 54.0156 28.0116 54.0156 Z"
  }));
}

var _default = SquareStack3dUpFill;
exports["default"] = _default;