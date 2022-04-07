"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ListNumberRtl(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 48.1679 19.0117 C 49.0818 19.0117 49.6914 18.4961 49.6914 17.4414 L 49.6914 9.8711 C 49.6914 8.8867 48.9882 8.2539 47.9802 8.2539 C 47.1368 8.2539 46.6208 8.5351 46.0351 8.9336 L 44.3945 10.0820 C 43.9023 10.4102 43.6679 10.7148 43.6679 11.2070 C 43.6679 11.8164 44.1367 12.2383 44.6757 12.2383 C 44.9570 12.2383 45.1211 12.1914 45.5195 11.9102 L 46.5978 11.1836 L 46.6208 11.1836 L 46.6208 17.4414 C 46.6208 18.4961 47.2540 19.0117 48.1679 19.0117 Z M 6.2851 16.1758 L 37.6211 16.1758 C 38.6757 16.1758 39.4960 15.3555 39.4960 14.3008 C 39.4960 13.2226 38.6757 12.4024 37.6211 12.4024 L 6.2851 12.4024 C 5.2070 12.4024 4.3867 13.2226 4.3867 14.3008 C 4.3867 15.3555 5.2070 16.1758 6.2851 16.1758 Z M 44.3945 33.1445 L 50.4181 33.1445 C 51.0743 33.1445 51.5663 32.6992 51.5663 32.0430 C 51.5663 31.3398 51.0743 30.8945 50.4181 30.8945 L 47.0898 30.8945 L 47.0898 30.8242 L 48.9882 29.2773 C 50.6053 27.9648 51.2384 27.2148 51.2384 25.8320 C 51.2384 23.9570 49.6444 22.6914 47.1368 22.6914 C 44.8867 22.6914 43.2460 23.8633 43.2460 25.3633 C 43.2460 26.1133 43.7382 26.5117 44.5351 26.5117 C 45.0742 26.5117 45.4492 26.3477 45.7539 25.8086 C 46.0820 25.2461 46.5272 24.9414 47.1834 24.9414 C 47.8631 24.9414 48.3320 25.3867 48.3320 26.0430 C 48.3320 26.6055 48.0508 27.0977 46.8556 28.0586 L 43.7617 30.5898 C 43.3164 30.9648 43.1289 31.3867 43.1289 31.9024 C 43.1289 32.6289 43.6211 33.1445 44.3945 33.1445 Z M 6.2851 30.3555 L 37.6211 30.3555 C 38.6757 30.3555 39.4960 29.5117 39.4960 28.4570 C 39.4960 27.4024 38.6757 26.5820 37.6211 26.5820 L 6.2851 26.5820 C 5.2070 26.5820 4.3867 27.4024 4.3867 28.4570 C 4.3867 29.5117 5.2070 30.3555 6.2851 30.3555 Z M 47.1834 47.7461 C 49.9727 47.7461 51.6133 46.5039 51.6133 44.5352 C 51.6133 43.2461 50.6994 42.3555 49.0818 42.2148 L 49.0818 42.1445 C 50.2775 41.9336 51.2149 41.1367 51.2149 39.7773 C 51.2149 37.9961 49.4572 37.0117 47.1599 37.0117 C 45.3086 37.0117 43.3164 37.8789 43.3164 39.4258 C 43.3164 40.0820 43.7851 40.5508 44.5117 40.5508 C 45.0273 40.5508 45.2617 40.3398 45.5898 39.9883 C 46.1289 39.4024 46.5743 39.2148 47.1599 39.2148 C 47.8631 39.2148 48.4021 39.5664 48.4021 40.2695 C 48.4021 40.9258 47.8631 41.2539 46.9021 41.2539 L 46.6208 41.2539 C 45.9648 41.2539 45.5429 41.5820 45.5429 42.2617 C 45.5429 42.8945 45.9413 43.2695 46.6208 43.2695 L 46.9256 43.2695 C 47.9802 43.2695 48.5428 43.6211 48.5428 44.3477 C 48.5428 44.9805 47.9572 45.4492 47.1834 45.4492 C 46.3398 45.4492 45.7539 44.9805 45.3086 44.5352 C 45.0273 44.2773 44.7929 44.0898 44.3711 44.0898 C 43.5976 44.0898 43.0586 44.5352 43.0586 45.2617 C 43.0586 46.8789 45.2617 47.7461 47.1834 47.7461 Z M 6.2851 44.5117 L 37.6211 44.5117 C 38.6757 44.5117 39.4960 43.6914 39.4960 42.6367 C 39.4960 41.5586 38.6757 40.7383 37.6211 40.7383 L 6.2851 40.7383 C 5.2070 40.7383 4.3867 41.5586 4.3867 42.6367 C 4.3867 43.6914 5.2070 44.5117 6.2851 44.5117 Z"
  }));
}

var _default = ListNumberRtl;
exports["default"] = _default;