"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function RectangleExpandVertical(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 28.0001 18.6718 C 29.0079 18.6718 29.8751 17.8515 29.8751 16.8672 L 29.8751 9.1093 L 29.7111 5.1953 L 31.7267 7.2813 L 34.7735 10.3515 C 35.1485 10.7031 35.5938 10.9140 36.0626 10.9140 C 37.0470 10.9140 37.7735 10.2109 37.7735 9.2500 C 37.7735 8.7109 37.5626 8.2891 37.1642 7.9375 L 29.3595 .6718 C 28.8673 .2266 28.4923 .1 28.0001 .1 C 27.5313 .1 27.1329 .2266 26.6407 .6718 L 18.8595 7.9375 C 18.4376 8.2891 18.2267 8.7109 18.2267 9.2500 C 18.2267 10.2109 18.9298 10.9140 19.9376 10.9140 C 20.4064 10.9140 20.8751 10.7031 21.2267 10.3515 L 24.2735 7.2813 L 26.2892 5.1953 L 26.1485 9.1093 L 26.1485 16.8672 C 26.1485 17.8515 26.9923 18.6718 28.0001 18.6718 Z M 8.2657 43.7265 L 15.9298 43.7265 L 15.9298 40.1875 L 8.7579 40.1875 C 6.6485 40.1875 5.3595 38.7813 5.3595 36.8593 L 5.3595 19.1406 C 5.3595 17.2187 6.6485 15.8359 8.7579 15.8359 L 15.9298 15.8359 L 15.9298 12.2969 L 8.2657 12.2969 C 4.3751 12.2969 1.6329 14.9453 1.6329 18.5547 L 1.6329 37.4687 C 1.6329 41.0547 4.3751 43.7265 8.2657 43.7265 Z M 47.7344 43.7265 C 51.6484 43.7265 54.3671 41.0547 54.3671 37.4687 L 54.3671 18.5547 C 54.3671 14.9453 51.6484 12.2969 47.7344 12.2969 L 40.0704 12.2969 L 40.0704 15.8359 L 47.2424 15.8359 C 49.3516 15.8359 50.6408 17.2187 50.6408 19.1406 L 50.6408 36.8593 C 50.6408 38.7813 49.3516 40.1875 47.2424 40.1875 L 40.0704 40.1875 L 40.0704 43.7265 Z M 28.0001 55.9609 C 28.4923 55.9609 28.8673 55.7734 29.3595 55.3281 L 37.1642 48.0625 C 37.5626 47.7109 37.7735 47.2890 37.7735 46.7500 C 37.7735 45.7890 37.0704 45.1094 36.0860 45.1094 C 35.6173 45.1094 35.1485 45.2969 34.7735 45.6484 L 31.7267 48.7187 L 29.7111 50.8047 L 29.8751 46.8906 L 29.8751 39.1562 C 29.8751 38.1484 29.0079 37.3281 28.0001 37.3281 C 26.9923 37.3281 26.1485 38.1484 26.1485 39.1562 L 26.1485 46.8906 L 26.2892 50.8047 L 24.2735 48.7187 L 21.2267 45.6484 C 20.8751 45.2969 20.4298 45.1094 19.9611 45.1094 C 18.9532 45.1094 18.2267 45.7890 18.2267 46.7500 C 18.2267 47.2890 18.4376 47.7109 18.8595 48.0625 L 26.6407 55.3281 C 27.1329 55.7734 27.5313 55.9609 28.0001 55.9609 Z"
  }));
}

var _default = RectangleExpandVertical;
exports["default"] = _default;