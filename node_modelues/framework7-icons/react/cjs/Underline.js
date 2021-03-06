"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Underline(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9883 41.7344 C 36.4492 41.7344 41.6523 36.6719 41.6523 29.3125 L 41.6523 9.2266 C 41.6523 7.9141 40.7852 7.0703 39.4726 7.0703 C 38.1367 7.0703 37.3164 7.9141 37.3164 9.2266 L 37.3164 28.9609 C 37.3164 34.1875 33.8711 37.7266 27.9883 37.7266 C 22.1289 37.7266 18.6836 34.1875 18.6836 28.9609 L 18.6836 9.2266 C 18.6836 7.9141 17.8164 7.0703 16.5039 7.0703 C 15.1680 7.0703 14.3477 7.9141 14.3477 9.2266 L 14.3477 29.3125 C 14.3477 36.6719 19.5742 41.7344 27.9883 41.7344 Z M 15.7305 48.9297 L 40.2461 48.9297 C 41.0195 48.9297 41.6523 48.3438 41.6523 47.5469 C 41.6523 46.7500 41.0195 46.1406 40.2461 46.1406 L 15.7305 46.1406 C 14.9805 46.1406 14.3477 46.7500 14.3477 47.5469 C 14.3477 48.3438 14.9805 48.9297 15.7305 48.9297 Z"
  }));
}

var _default = Underline;
exports["default"] = _default;