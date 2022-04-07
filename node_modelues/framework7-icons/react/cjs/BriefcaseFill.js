"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BriefcaseFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 17.7344 11.9102 C 17.7344 9.9649 18.7423 8.9805 20.6876 8.9805 L 35.3126 8.9805 C 37.2579 8.9805 38.2423 9.9649 38.2423 11.9102 L 38.2423 14.0195 L 17.7344 14.0195 Z M 53.8280 20.8867 C 53.8280 16.3398 51.3906 14.0195 46.8440 14.0195 L 41.8751 14.0195 L 41.8751 12.1680 C 41.8751 7.5976 39.6016 5.5820 35.2657 5.5820 L 20.7344 5.5820 C 16.6329 5.5820 14.1016 7.5976 14.1016 12.1680 L 14.1016 14.0195 L 9.1564 14.0195 C 4.8204 14.0195 2.1720 16.3398 2.1720 20.8867 L 2.1720 26.9336 L 53.8280 26.9336 Z M 9.1564 50.4180 L 46.8440 50.4180 C 51.3906 50.4180 53.8280 48.1211 53.8280 43.5508 L 53.8280 30.1211 L 37.3985 30.1211 L 37.3985 31.5039 C 37.3985 33.4258 36.2735 34.5273 34.3516 34.5273 L 21.5548 34.5273 C 19.6095 34.5273 18.5079 33.4258 18.5079 31.5039 L 18.5079 30.1211 L 2.1720 30.1211 L 2.1720 43.5508 C 2.1720 48.1211 4.5860 50.4180 9.1564 50.4180 Z"
  }));
}

var _default = BriefcaseFill;
exports["default"] = _default;