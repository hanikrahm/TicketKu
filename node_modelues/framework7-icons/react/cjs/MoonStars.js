"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MoonStars(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 31.3163 14.8867 C 31.5975 14.8867 31.7616 14.6992 31.8085 14.4414 C 32.5351 10.5508 32.5116 10.4570 36.5663 9.6602 C 36.8475 9.6133 37.0116 9.4727 37.0116 9.1914 C 37.0116 8.8867 36.8475 8.7461 36.5663 8.6992 C 32.5116 7.8789 32.5351 7.8086 31.8085 3.9180 C 31.7616 3.6602 31.5975 3.4727 31.3163 3.4727 C 31.0351 3.4727 30.8944 3.6602 30.8475 3.9180 C 30.0975 7.8086 30.1444 7.8789 26.0663 8.6992 C 25.8085 8.7461 25.6210 8.8867 25.6210 9.1914 C 25.6210 9.4727 25.8085 9.6133 26.0663 9.6602 C 30.1679 10.4570 30.0975 10.5508 30.8475 14.4414 C 30.8944 14.6992 31.0351 14.8867 31.3163 14.8867 Z M 42.5429 30.7305 C 42.9648 30.7305 43.2694 30.4258 43.3163 29.9805 C 44.0897 23.6758 44.3475 23.5820 50.7462 22.5273 C 51.2617 22.4336 51.5665 22.1992 51.5665 21.7305 C 51.5665 21.2851 51.2617 21.0039 50.8398 20.9336 C 44.3475 19.8320 44.0897 19.7851 43.3163 13.4805 C 43.2694 13.0351 42.9648 12.7305 42.5429 12.7305 C 42.0975 12.7305 41.7929 13.0351 41.7460 13.4570 C 40.9257 19.7617 40.7382 19.8320 34.2226 20.9336 C 33.8007 21.0039 33.4960 21.2851 33.4960 21.7305 C 33.4960 22.1758 33.8007 22.4336 34.2226 22.5273 C 40.7382 23.5820 40.9726 23.6758 41.7460 30.0273 C 41.7929 30.4258 42.0975 30.7305 42.5429 30.7305 Z M 24.9179 52.5273 C 33.4960 52.5273 40.4335 48.2148 43.5975 40.8789 C 44.0194 39.8711 43.8788 39.0976 43.4335 38.6289 C 43.0116 38.2305 42.3085 38.1367 41.4648 38.4649 C 39.7070 39.1680 37.5507 39.5664 34.8554 39.5664 C 24.3788 39.5664 17.6288 33.0273 17.6288 22.7383 C 17.6288 19.9023 18.1679 17.0898 18.8944 15.6133 C 19.3632 14.6758 19.3163 13.8789 18.9179 13.3867 C 18.4726 12.8711 17.6757 12.7070 16.5741 13.1523 C 9.3788 16.0820 4.4335 23.5820 4.4335 32.3476 C 4.4335 43.7617 12.8241 52.5273 24.9179 52.5273 Z M 24.9648 48.9648 C 14.9570 48.9648 7.9960 41.6758 7.9960 32.0664 C 7.9960 26.1602 10.7382 20.9570 15.0975 17.6289 C 14.5351 19.1523 14.2070 21.4961 14.2070 23.7461 C 14.2070 35.2773 22.1757 43.0117 33.9648 43.0117 C 36.0741 43.0117 37.9960 42.7539 38.9804 42.4023 C 36.0507 46.4570 30.8241 48.9648 24.9648 48.9648 Z"
  }));
}

var _default = MoonStars;
exports["default"] = _default;