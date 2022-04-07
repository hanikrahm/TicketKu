"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function HandRaisedSlash(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 30.3085 2.2070 C 28.0351 2.2070 26.4413 3.7305 26.1132 6.0274 C 25.5038 5.4414 24.6835 5.1367 23.8163 5.1367 C 21.3788 5.1367 19.7616 6.8242 19.7616 9.4258 L 19.7616 12.0274 C 19.1288 11.3711 18.1913 11.0195 17.1835 11.0195 C 16.0351 11.0195 15.0741 11.4883 14.5351 12.3320 L 17.0663 14.8633 L 17.0663 14.6758 C 17.1367 14.3242 17.3710 14.0899 17.7694 14.0899 C 18.7304 14.0899 19.4335 14.7930 19.4335 15.7774 L 19.4335 17.2539 L 22.4101 20.2539 L 22.4101 9.8477 C 22.4101 8.8399 23.0429 8.1601 24.0272 8.1601 C 24.9882 8.1601 25.6913 8.8399 25.6913 9.8477 L 25.6913 23.4883 L 28.6679 26.4648 L 28.6679 6.9414 C 28.6679 5.9570 29.3476 5.2305 30.3085 5.2305 C 31.2460 5.2305 31.9491 5.9570 31.9491 6.9414 L 31.9491 26.5586 C 31.9491 27.3789 32.6054 28.0117 33.4023 28.0117 C 34.2226 28.0117 34.9257 27.3789 34.9257 26.5586 L 34.9257 9.8477 C 34.9257 8.8399 35.5820 8.1601 36.5663 8.1601 C 37.5272 8.1601 38.1835 8.8399 38.1835 9.8477 L 38.1835 32.9101 C 38.1835 33.9883 38.8867 34.7617 39.8476 34.7617 C 40.6913 34.7617 41.3945 34.3867 41.9335 33.2148 L 45.1210 26.0899 C 45.5663 25.0821 46.3867 24.5664 47.2772 24.8945 C 48.2147 25.2695 48.5195 26.1601 48.0740 27.3789 L 43.9257 38.9570 C 43.6679 39.6601 43.4101 40.3164 43.1288 40.9258 L 45.4257 43.2227 C 45.9179 42.2148 46.3867 41.1133 46.7851 39.9648 L 50.9334 28.3633 C 51.9649 25.4336 51.0275 23.0195 48.5896 22.1289 C 46.3867 21.3320 44.2304 22.2695 43.2226 24.6836 L 41.6757 28.4336 C 41.6288 28.5274 41.5820 28.5977 41.4882 28.5977 C 41.3710 28.5977 41.3007 28.5039 41.3007 28.3867 L 41.3007 9.5899 C 41.3007 6.8477 39.5898 5.1367 36.9648 5.1367 C 36.0272 5.1367 35.1367 5.4648 34.5038 6.0742 C 34.1757 3.6836 32.6523 2.2070 30.3085 2.2070 Z M 46.3632 53.0899 C 47.0429 53.7930 48.2382 53.7930 48.9179 53.0899 C 49.6211 52.4102 49.6211 51.2617 48.9179 50.5352 L 7.2929 8.9336 C 6.5898 8.2305 5.4179 8.2305 4.7148 8.9336 C 4.0351 9.6367 4.0351 10.8086 4.7148 11.4883 Z M 39.6132 50.2070 L 37.2929 47.9102 C 35.0663 49.3164 32.4413 49.9727 29.5116 49.9727 C 21.2148 49.9727 16.1757 44.6523 16.1757 35.2070 L 16.1757 26.8164 L 13.0820 23.7226 L 13.0820 35.5821 C 13.0820 46.5508 19.7148 53.2305 29.6288 53.2305 C 33.5194 53.2305 36.8710 52.2227 39.6132 50.2070 Z"
  }));
}

var _default = HandRaisedSlash;
exports["default"] = _default;