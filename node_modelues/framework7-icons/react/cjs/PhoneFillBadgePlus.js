"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PhoneFillBadgePlus(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 42.2616 47.9218 C 45.1679 47.9218 47.6757 46.7969 49.7381 44.6172 C 50.1600 44.1484 50.6054 43.7031 50.9568 43.2812 C 51.7771 42.2969 52.2696 41.2422 52.2696 40.2344 C 52.2696 39.0625 51.6365 37.9375 50.2070 36.9062 C 47.8163 35.2187 45.4257 33.5078 43.0116 31.8203 C 41.9335 31.0937 41.0194 30.7422 40.1757 30.7422 C 39.0976 30.7422 38.1132 31.3281 37.0585 32.3593 L 35.4179 33.9766 C 35.1835 34.2109 34.8554 34.3281 34.5273 34.3281 C 34.1992 34.3281 33.8242 34.2109 33.5663 34.0703 C 32.0898 33.2734 29.6523 31.2109 27.3554 28.9140 C 25.0351 26.6172 22.9023 24.1328 22.1523 22.6797 C 22.0351 22.4218 21.8945 22.0937 21.8945 21.7422 C 21.8945 21.4375 21.9882 21.1328 22.2460 20.875 L 23.9101 19.1640 C 24.9414 18.0859 25.5742 17.1484 25.5742 16.0469 C 25.5742 15.2031 25.1992 14.2891 24.4257 13.2109 C 22.7382 10.8672 21.0507 8.4766 19.3867 6.1093 C 18.3085 4.6093 17.1367 3.7891 15.8945 3.7891 C 14.8867 3.7891 13.8789 4.2813 12.8710 5.2891 L 11.6054 6.5547 C 9.4492 8.7109 8.4648 11.3593 8.4648 14.3125 C 8.4648 17.7109 9.7538 21.5781 12.0273 25.6093 C 13.1757 25.3515 14.4179 25.1875 15.6367 25.1875 C 23.9570 25.1875 30.7773 32.0078 30.7773 40.3047 C 30.7773 41.6172 30.6132 42.8594 30.2851 44.0547 C 34.5976 46.5390 38.6757 47.9218 42.2616 47.9218 Z M 15.6367 52.2109 C 22.1054 52.2109 27.5429 46.8203 27.5429 40.3047 C 27.5429 33.7891 22.1757 28.3984 15.6367 28.3984 C 9.1210 28.3984 3.7304 33.7891 3.7304 40.3047 C 3.7304 46.8672 9.1210 52.2109 15.6367 52.2109 Z M 15.6601 48.0391 C 14.8398 48.0391 14.1132 47.4766 14.1132 46.6094 L 14.1132 41.7344 L 9.6367 41.7344 C 8.8398 41.7344 8.1835 41.0781 8.1835 40.3047 C 8.1835 39.5312 8.8398 38.8750 9.6367 38.8750 L 14.1132 38.8750 L 14.1132 34.0234 C 14.1132 33.1328 14.8398 32.5703 15.6601 32.5703 C 16.4570 32.5703 17.1835 33.1328 17.1835 34.0234 L 17.1835 38.8750 L 21.6601 38.8750 C 22.4570 38.8750 23.0898 39.5312 23.0898 40.3047 C 23.0898 41.0781 22.4570 41.7344 21.6601 41.7344 L 17.1835 41.7344 L 17.1835 46.6094 C 17.1835 47.4766 16.4570 48.0391 15.6601 48.0391 Z"
  }));
}

var _default = PhoneFillBadgePlus;
exports["default"] = _default;