"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SuitSpade(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 6.0038 32.9805 C 6.0038 38.9336 9.9882 42.9180 15.9413 42.9180 C 18.5429 42.9180 20.9570 42.0273 22.6444 40.6680 C 21.7070 43.1992 19.9726 45.1211 18.9648 46.2930 C 17.5116 48.0976 18.1913 50.4883 20.7460 50.4883 L 35.2304 50.4883 C 37.7851 50.4883 38.4648 48.0976 37.0116 46.2930 C 36.0038 45.1211 34.2695 43.1992 33.3319 40.6680 C 35.0195 42.0273 37.4570 42.9180 40.0351 42.9180 C 46.0116 42.9180 49.9962 38.9336 49.9962 32.9805 C 49.9962 23.0898 35.9804 18.2383 30.2851 7.2226 C 29.7929 6.2617 29.2538 5.5117 27.9882 5.5117 C 26.7226 5.5117 26.2070 6.2617 25.6913 7.2226 C 19.9960 18.2383 6.0038 23.0898 6.0038 32.9805 Z M 9.4491 32.9336 C 9.4491 25.0351 22.4804 21.1680 27.9882 9.3320 C 33.4960 21.1680 46.5507 25.0351 46.5507 32.9336 C 46.5507 36.9883 43.8554 39.6602 39.8007 39.6602 C 36.9648 39.6602 34.6679 38.4414 33.1210 37.0351 C 31.7148 35.7929 29.6757 36.3789 29.7695 38.5117 C 30.0273 40.9258 31.6444 44.5351 33.3085 46.5273 C 33.6366 46.9258 33.4491 47.2539 33.0975 47.2539 L 22.9022 47.2539 C 22.5273 47.2539 22.3397 46.9258 22.6679 46.5273 C 24.3319 44.5351 25.9491 40.9258 26.2070 38.5117 C 26.3007 36.3789 24.2616 35.7929 22.8554 37.0351 C 21.3085 38.4414 19.0116 39.6602 16.1757 39.6602 C 12.1210 39.6602 9.4491 36.9883 9.4491 32.9336 Z"
  }));
}

var _default = SuitSpade;
exports["default"] = _default;