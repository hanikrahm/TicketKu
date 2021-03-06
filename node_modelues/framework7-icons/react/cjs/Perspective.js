"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Perspective(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 1.8729 29.7559 L 8.1003 29.7559 L 8.1003 36.9432 C 8.1003 40.8529 10.5819 43.1706 15.2174 43.9900 L 26.2207 45.9097 L 26.2207 54.1271 C 26.2207 55.2742 26.8996 56 28.0000 56 C 29.0769 56 29.7558 55.2742 29.7558 54.1271 L 29.7558 46.5418 L 40.7825 48.4615 C 45.2308 49.2575 47.8995 46.4716 47.8995 41.4381 L 47.8995 29.7559 L 54.1272 29.7559 C 55.2741 29.7559 56 29.0769 56 28.0001 C 56 26.8997 55.2741 26.2208 54.1272 26.2208 L 47.8995 26.2208 L 47.8995 14.5619 C 47.8995 9.2944 45.4182 6.7191 40.7825 7.5151 L 29.7558 9.4583 L 29.7558 1.8730 C 29.7558 .7024 29.0769 .1 28.0000 .1 C 26.8996 .1 26.2207 .7024 26.2207 1.8730 L 26.2207 10.0670 L 15.2174 12.0101 C 10.5819 12.8295 8.1003 15.1238 8.1003 19.0335 L 8.1003 26.2208 L 1.8729 26.2208 C .7023 26.2208 0 26.8997 0 28.0001 C 0 29.0769 .7023 29.7559 1.8729 29.7559 Z M 40.9464 11.0502 C 43.1940 10.6756 44.3644 11.9399 44.3644 14.5151 L 44.3644 26.2208 L 29.7558 26.2208 L 29.7558 12.9934 Z M 11.6354 18.9867 C 11.6354 17.0201 12.8060 15.8964 15.0535 15.5218 L 26.2207 13.6021 L 26.2207 26.2208 L 11.6354 26.2208 Z M 15.0535 40.4549 C 12.8060 40.1037 11.6354 38.9799 11.6354 36.9900 L 11.6354 29.7559 L 26.2207 29.7559 L 26.2207 42.3980 Z M 40.9464 44.9498 L 29.7558 43.0067 L 29.7558 29.7559 L 44.3644 29.7559 L 44.3644 41.4850 C 44.3644 43.9666 43.1237 45.3244 40.9464 44.9498 Z"
  }));
}

var _default = Perspective;
exports["default"] = _default;