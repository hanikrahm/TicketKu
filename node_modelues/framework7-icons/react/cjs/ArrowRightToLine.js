"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowRightToLine(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.3516 28.0117 C 7.3516 29.2304 8.1953 30.0977 9.4375 30.0977 L 33.1094 30.0977 L 38.125 29.9336 L 30.4140 36.9648 L 25.2344 42.2148 C 24.8594 42.6133 24.6484 43.1758 24.6484 43.7383 C 24.6484 44.9101 25.5391 45.7539 26.6875 45.7539 C 27.2734 45.7539 27.7891 45.5430 28.2813 45.0742 L 43.7969 29.5820 C 44.1484 29.2539 44.3594 28.8789 44.4531 28.4805 L 44.4531 43.8320 C 44.4531 45.0273 45.3438 45.8476 46.5625 45.8476 C 47.7813 45.8476 48.6484 45.0273 48.6484 43.8320 L 48.6484 12.2148 C 48.6484 10.9961 47.7813 10.1524 46.5625 10.1524 C 45.3438 10.1524 44.4531 10.9961 44.4531 12.2148 L 44.4531 27.5195 C 44.3594 27.1211 44.1484 26.7461 43.7969 26.4180 L 28.2813 10.9258 C 27.7891 10.4570 27.2734 10.2226 26.6875 10.2226 C 25.5391 10.2226 24.6484 11.0898 24.6484 12.2617 C 24.6484 12.8242 24.8594 13.3867 25.2344 13.7617 L 30.4140 19.0351 L 38.1016 26.0898 L 33.1094 25.9024 L 9.4375 25.9024 C 8.1953 25.9024 7.3516 26.7695 7.3516 28.0117 Z"
  }));
}

var _default = ArrowRightToLine;
exports["default"] = _default;