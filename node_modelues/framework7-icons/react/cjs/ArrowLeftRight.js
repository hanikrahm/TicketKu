"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowLeftRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 4.9140 28.0000 C 4.9140 28.5860 5.1484 29.1250 5.6171 29.5703 L 19.2811 42.9766 C 19.6796 43.3750 20.2889 43.6094 20.7811 43.6094 C 22.0233 43.6094 22.8671 42.7656 22.8671 41.5469 C 22.8671 40.9375 22.6562 40.4922 22.2811 40.1172 L 15.6718 33.6484 L 11.2889 29.8750 L 16.7264 30.1094 L 39.2968 30.1094 L 44.7343 29.8750 L 40.3515 33.6484 L 33.7186 40.1172 C 33.3436 40.4922 33.1562 40.9375 33.1562 41.5469 C 33.1562 42.7656 33.9764 43.6094 35.2186 43.6094 C 35.7343 43.6094 36.3436 43.3750 36.7421 42.9766 L 50.4064 29.5703 C 50.8748 29.1250 51.0860 28.5860 51.0860 28.0000 C 51.0860 27.4375 50.8748 26.8984 50.4064 26.4297 L 36.7421 13.0469 C 36.3436 12.6484 35.7343 12.3906 35.2186 12.3906 C 33.9764 12.3906 33.1562 13.2578 33.1562 14.4766 C 33.1562 15.0625 33.3436 15.5313 33.7186 15.9062 L 40.3515 22.3516 L 44.7343 26.1484 L 39.2968 25.9141 L 16.7264 25.9141 L 11.2889 26.1484 L 15.6718 22.3516 L 22.3046 15.9062 C 22.6562 15.5313 22.8671 15.0625 22.8671 14.4766 C 22.8671 13.2578 22.0233 12.3906 20.7811 12.3906 C 20.2889 12.3906 19.6796 12.6484 19.2811 13.0469 L 5.6171 26.4297 C 5.1484 26.8984 4.9140 27.4375 4.9140 28.0000 Z"
  }));
}

var _default = ArrowLeftRight;
exports["default"] = _default;