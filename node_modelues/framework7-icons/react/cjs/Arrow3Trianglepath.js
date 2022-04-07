"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Arrow3Trianglepath(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 39.2147 23.1367 C 40.0116 23.3476 40.6210 23.3476 41.2304 22.9726 C 41.8398 22.5976 42.1678 22.1055 42.3788 21.3086 L 44.3476 13.5039 C 44.6054 12.5195 44.0663 11.5820 43.0819 11.3476 C 42.1210 11.0898 41.1132 11.6289 40.9022 12.6367 L 39.9178 16.8320 L 33.5663 5.5117 C 32.3710 3.3555 30.2147 2.2539 28.0116 2.2539 C 25.8319 2.2539 23.6522 3.3789 22.4335 5.5117 L 15.9647 17.0664 C 15.3788 18.1211 15.7069 19.1289 16.5976 19.6680 C 17.5351 20.1836 18.6366 19.8555 19.1757 18.9180 L 25.6444 7.3164 C 26.1835 6.3789 27.0976 5.9805 28.0116 5.9805 C 28.9257 5.9805 29.8163 6.3789 30.3319 7.3164 L 36.7772 18.8242 L 32.4413 17.5351 C 31.4569 17.2305 30.4960 17.7929 30.2382 18.7773 C 29.9569 19.7148 30.4725 20.6758 31.4804 20.9570 Z M 9.9647 47.4180 L 22.5272 47.4180 C 23.6288 47.4180 24.4491 46.6445 24.4491 45.5898 C 24.4491 44.5351 23.6288 43.7383 22.5272 43.7383 L 9.9882 43.7383 C 8.3710 43.7383 7.2929 42.4023 7.2929 40.9492 C 7.2929 40.5273 7.3632 40.0117 7.6210 39.5664 L 13.6210 28.8320 L 14.6054 33.0273 C 14.8163 34.0351 15.8241 34.5742 16.7851 34.3164 C 17.7694 34.0820 18.3319 33.1445 18.0507 32.1602 L 16.0819 24.3555 C 15.8710 23.5820 15.5429 23.0429 14.9335 22.6914 C 14.3241 22.3164 13.7382 22.2929 12.9413 22.5273 L 5.2069 24.7070 C 4.1757 24.9883 3.6600 25.9492 3.9413 26.8867 C 4.1991 27.8711 5.1600 28.4570 6.1444 28.1289 L 10.4804 26.8398 L 4.3866 37.7617 C 3.8007 38.7930 3.4960 39.8945 3.4960 40.9492 C 3.4960 44.5820 5.9804 47.4180 9.9647 47.4180 Z M 34.5038 52.9961 C 35.2304 53.7461 36.3319 53.6992 37.0351 52.9961 C 37.7382 52.3164 37.7382 51.1914 36.9882 50.4648 L 33.7772 47.4180 L 46.0351 47.4180 C 50.0195 47.4180 52.5040 44.5820 52.5040 40.9492 C 52.5040 39.8945 52.2227 38.8164 51.6367 37.7617 L 45.4491 26.6758 C 44.8866 25.6680 43.8085 25.4336 42.8944 25.9726 C 41.9804 26.5117 41.6757 27.6133 42.1913 28.5508 L 48.3789 39.5664 C 48.6131 40.0117 48.7303 40.5273 48.7303 40.9492 C 48.7303 42.4023 47.6051 43.7383 45.9882 43.7383 L 33.7772 43.7383 L 36.9882 40.7148 C 37.7382 39.9883 37.7382 38.8633 37.0351 38.1836 C 36.3319 37.4570 35.2304 37.4336 34.5038 38.1836 L 28.7616 43.7617 C 28.1757 44.3242 27.8944 44.8867 27.8944 45.5898 C 27.8944 46.2930 28.1757 46.8320 28.7616 47.3945 Z"
  }));
}

var _default = Arrow3Trianglepath;
exports["default"] = _default;