"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowClockwiseCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 17.3593 28.9609 C 17.3593 23.125 22.1640 18.5313 27.5312 18.5313 C 27.7421 18.5313 27.9999 18.5547 28.1640 18.5781 L 26.4765 16.8906 C 26.2187 16.6094 26.0780 16.2109 26.0780 15.7891 C 26.0780 14.9453 26.7109 14.2656 27.5780 14.2656 C 27.9999 14.2656 28.3983 14.4297 28.6796 14.7344 L 33.2499 19.3984 C 33.7890 19.9609 33.8124 21.0391 33.2499 21.6016 L 28.6327 26.1953 C 28.3514 26.4766 27.9530 26.6640 27.5780 26.6640 C 26.7109 26.6640 26.0780 25.9844 26.0780 25.1640 C 26.0780 24.7187 26.2187 24.3438 26.5234 24.0625 L 28.8202 21.7891 C 28.5858 21.7422 28.2812 21.7422 27.9765 21.7422 C 23.8749 21.7422 20.6171 24.9766 20.6171 29.0313 C 20.6171 33.1328 23.8749 36.4140 27.9765 36.4140 C 32.0546 36.4140 35.3124 33.1328 35.3124 29.0313 C 35.3124 28.1640 36.0390 27.4375 36.9530 27.4375 C 37.8436 27.4375 38.5702 28.1640 38.5702 29.0313 C 38.5702 34.9140 33.8593 39.6953 27.9765 39.6953 C 22.0936 39.6953 17.3593 34.9140 17.3593 28.9609 Z"
  }));
}

var _default = ArrowClockwiseCircleFill;
exports["default"] = _default;