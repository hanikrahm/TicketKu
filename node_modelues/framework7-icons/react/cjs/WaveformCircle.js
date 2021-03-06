"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function WaveformCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 25.6327 43.5391 C 26.3593 43.5391 26.8983 42.9766 26.8983 42.2500 L 26.8983 13.75 C 26.8983 13.0234 26.3358 12.4375 25.6327 12.4375 C 24.8827 12.4375 24.3202 13.0234 24.3202 13.75 L 24.3202 42.2500 C 24.3202 43.0000 24.8593 43.5391 25.6327 43.5391 Z M 35.1014 40.1406 C 35.8514 40.1406 36.4140 39.5547 36.4140 38.8516 L 36.4140 17.1250 C 36.4140 16.3984 35.8514 15.8359 35.1014 15.8359 C 34.3983 15.8359 33.8358 16.4219 33.8358 17.1250 L 33.8358 38.8516 C 33.8358 39.5547 34.3983 40.1406 35.1014 40.1406 Z M 20.8749 37.1641 C 21.5780 37.1641 22.1405 36.6016 22.1405 35.8750 L 22.1405 20.0781 C 22.1405 19.3750 21.5780 18.8125 20.8749 18.8125 C 20.1483 18.8125 19.5624 19.3750 19.5624 20.0781 L 19.5624 35.8750 C 19.5624 36.6016 20.1483 37.1641 20.8749 37.1641 Z M 30.3671 35.2890 C 31.0936 35.2890 31.6562 34.75 31.6562 34.0234 L 31.6562 21.9531 C 31.6562 21.2266 31.0936 20.6875 30.3671 20.6875 C 29.6405 20.6875 29.0780 21.25 29.0780 21.9531 L 29.0780 34.0234 C 29.0780 34.7266 29.6405 35.2890 30.3671 35.2890 Z M 39.8827 32.5 C 40.6093 32.5 41.1718 31.9609 41.1718 31.2344 L 41.1718 24.7422 C 41.1718 24.0156 40.6093 23.4766 39.8827 23.4766 C 39.1562 23.4766 38.5936 24.0156 38.5936 24.7422 L 38.5936 31.2344 C 38.5936 31.9609 39.1562 32.5 39.8827 32.5 Z M 16.0936 31.3281 C 16.8202 31.3281 17.4062 30.7656 17.4062 30.0625 L 17.4062 25.9141 C 17.4062 25.2109 16.8202 24.6484 16.0936 24.6484 C 15.3905 24.6484 14.8046 25.2109 14.8046 25.9141 L 14.8046 30.0625 C 14.8046 30.7656 15.3905 31.3281 16.0936 31.3281 Z"
  }));
}

var _default = WaveformCircle;
exports["default"] = _default;