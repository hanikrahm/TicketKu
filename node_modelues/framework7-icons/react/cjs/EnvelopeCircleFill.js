"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function EnvelopeCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 27.9765 29.2422 C 27.5780 29.2422 27.1327 29.1016 26.6640 28.6328 L 16.3280 18.2969 C 16.6093 18.0625 17.3124 17.8281 18.2968 17.8281 L 37.6327 17.8281 C 38.6405 17.8281 39.3202 18.0625 39.6014 18.2969 L 29.2655 28.6328 C 28.8202 29.0781 28.3749 29.2422 27.9765 29.2422 Z M 23.3358 28.0000 L 15.2030 36.1328 C 15.0390 35.8516 14.9687 35.2656 14.9687 34.4453 L 14.9687 21.4609 C 14.9687 20.6406 15.0390 20.0781 15.1796 19.8438 Z M 32.5234 28.0000 L 40.7030 19.8438 C 40.8202 20.0781 40.8905 20.6406 40.8905 21.4609 L 40.8905 34.4453 C 40.8905 35.2656 40.8202 35.8516 40.6562 36.1328 Z M 27.9530 31.0938 C 28.7968 31.0938 29.4530 30.7891 30.3671 29.9453 L 31.1171 29.2422 L 39.5312 37.6562 C 39.2499 37.9140 38.5936 38.0781 37.6093 38.0781 L 18.2968 38.0781 C 17.3124 38.0781 16.6562 37.9140 16.3749 37.6562 L 24.7890 29.2422 L 25.5390 29.9453 C 26.4530 30.7891 27.1093 31.0938 27.9530 31.0938 Z"
  }));
}

var _default = EnvelopeCircleFill;
exports["default"] = _default;