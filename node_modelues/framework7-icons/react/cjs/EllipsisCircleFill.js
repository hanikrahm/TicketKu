"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function EllipsisCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 19.7265 28.0234 C 19.7265 29.8750 18.1093 31.5156 16.2343 31.5156 C 14.3358 31.5156 12.7655 29.8750 12.7655 28.0234 C 12.7655 26.1484 14.3124 24.5078 16.2343 24.5078 C 18.1093 24.5078 19.7265 26.1719 19.7265 28.0234 Z M 31.4452 28.0234 C 31.4452 29.8750 29.8514 31.5156 27.9765 31.5156 C 26.1014 31.5156 24.5077 29.8750 24.5077 28.0234 C 24.5077 26.1484 26.0780 24.5078 27.9765 24.5078 C 29.8514 24.5078 31.4452 26.1719 31.4452 28.0234 Z M 43.1874 28.0234 C 43.1874 29.8750 41.5936 31.5156 39.6952 31.5156 C 37.8436 31.5156 36.2030 29.8750 36.2030 28.0234 C 36.2030 26.1484 37.8202 24.5078 39.6952 24.5078 C 41.5936 24.5078 43.1874 26.1719 43.1874 28.0234 Z"
  }));
}

var _default = EllipsisCircleFill;
exports["default"] = _default;