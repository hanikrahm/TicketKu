"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SpeakerZzzFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 24.9931 49.1122 C 26.5133 49.1122 27.6087 47.9945 27.6087 46.4967 L 27.6087 10.8401 C 27.6087 9.3423 26.5133 8.0904 24.9484 8.0904 C 23.8530 8.0904 23.1153 8.5822 21.9305 9.7000 L 12.0718 19.0221 C 11.9153 19.1562 11.7141 19.2233 11.4906 19.2233 L 4.8511 19.2233 C 1.6990 19.2233 0 20.9446 0 24.2979 L 0 32.9718 C 0 36.3250 1.6990 38.0464 4.8511 38.0464 L 11.4906 38.0464 C 11.7141 38.0464 11.9153 38.1134 12.0718 38.2476 L 21.9305 47.6591 C 23.0035 48.6651 23.8977 49.1122 24.9931 49.1122 Z M 54.7254 23.1355 L 49.2488 23.1355 L 49.2488 23.0013 L 54.8595 15.6017 C 55.3737 14.9534 55.5527 14.5510 55.5527 14.1039 C 55.5527 13.3439 54.9717 12.8967 54.1668 12.8967 L 46.4093 12.8967 C 45.6717 12.8967 45.1127 13.3662 45.1127 14.1263 C 45.1127 14.9311 45.6717 15.4006 46.4093 15.4006 L 51.5956 15.4006 L 51.5956 15.5123 L 45.8951 22.9119 C 45.3810 23.5602 45.2024 23.9402 45.2024 24.4544 C 45.2024 25.1474 45.7610 25.6616 46.5659 25.6616 L 54.7254 25.6616 C 55.4634 25.6616 56 25.1698 56 24.3874 C 56 23.6496 55.4634 23.1355 54.7254 23.1355 Z M 41.1336 32.3682 L 37.3109 32.3682 L 37.3109 32.2787 L 41.2902 27.0700 C 41.7371 26.4664 41.9385 26.0640 41.9385 25.6393 C 41.9385 24.9239 41.3571 24.4991 40.5971 24.4991 L 34.7176 24.4991 C 34.0023 24.4991 33.5105 24.9686 33.5105 25.6616 C 33.5105 26.4440 34.0023 26.8911 34.7176 26.8911 L 38.1604 26.8911 L 38.1604 26.9805 L 34.2035 32.1670 C 33.7787 32.7705 33.5775 33.1282 33.5775 33.6201 C 33.5775 34.2907 34.1141 34.7825 34.8518 34.7825 L 41.1336 34.7825 C 41.8488 34.7825 42.3629 34.3354 42.3629 33.5753 C 42.3629 32.8600 41.8488 32.3682 41.1336 32.3682 Z M 51.5512 40.8631 L 48.2873 40.8631 L 48.2873 40.7737 L 51.6405 36.2803 C 52.1102 35.6544 52.2888 35.3190 52.2888 34.9166 C 52.2888 34.2237 51.7522 33.7989 51.0371 33.7989 L 45.8507 33.7989 C 45.1800 33.7989 44.6883 34.2460 44.6883 34.9390 C 44.6883 35.6544 45.1800 36.0791 45.8507 36.0791 L 48.7122 36.0791 L 48.7122 36.1685 L 45.3810 40.6619 C 44.9566 41.2432 44.7551 41.5785 44.7551 42.0256 C 44.7551 42.6739 45.2693 43.1210 45.9624 43.1210 L 51.5512 43.1210 C 52.1995 43.1210 52.6912 42.6963 52.6912 41.9809 C 52.6912 41.3103 52.1995 40.8631 51.5512 40.8631 Z"
  }));
}

var _default = SpeakerZzzFill;
exports["default"] = _default;