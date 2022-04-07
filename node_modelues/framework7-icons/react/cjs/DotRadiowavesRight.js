"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DotRadiowavesRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 34.5859 50.2773 C 35.3125 51.0742 36.5781 51.1680 37.4687 50.2305 C 43.0469 44.3945 46.2578 36.5664 46.2578 28.0117 C 46.2578 19.4570 43.0938 11.5586 37.4687 5.7695 C 36.5781 4.8320 35.3125 4.9258 34.5859 5.7227 C 33.8594 6.5429 34.0234 7.6914 34.8672 8.5820 C 39.7656 13.6211 42.4375 20.4883 42.4375 28.0117 C 42.4375 35.5351 39.7187 42.3320 34.8672 47.4180 C 34.0234 48.3086 33.8594 49.4805 34.5859 50.2773 Z M 27.8125 44.0430 C 28.5625 44.9102 29.8750 44.9102 30.7656 43.9258 C 34.6562 39.7070 36.8594 34.0820 36.8594 28.0117 C 36.8594 21.9414 34.7031 16.2929 30.7656 12.0976 C 29.8750 11.0898 28.5625 11.0898 27.8125 11.9805 C 27.0625 12.8242 27.2969 13.9258 28.1406 14.8867 C 31.3047 18.3555 33.0391 22.9492 33.0391 28.0117 C 33.0391 33.0508 31.2812 37.6445 28.1406 41.1367 C 27.2969 42.0977 27.0625 43.1758 27.8125 44.0430 Z M 21.2500 37.3633 C 22.0234 38.2305 23.4297 38.2539 24.2500 37.1992 C 26.2891 34.6680 27.4609 31.4570 27.4609 28.0117 C 27.4609 24.5664 26.2891 21.3320 24.2500 18.8242 C 23.4297 17.7461 22.0234 17.7695 21.2500 18.6602 C 20.5000 19.5039 20.8281 20.5351 21.5547 21.5664 C 22.9375 23.3242 23.6406 25.5742 23.6406 28.0117 C 23.6406 30.4492 22.9609 32.6992 21.5547 34.4570 C 20.8047 35.4649 20.5000 36.5195 21.2500 37.3633 Z M 13.1875 31.3398 C 15.0391 31.3398 16.6094 29.7695 16.6094 27.9180 C 16.6094 26.0195 15.0859 24.4961 13.1875 24.4961 C 11.3125 24.4961 9.7422 26.1133 9.7422 27.9649 C 9.7422 29.7461 11.3594 31.3398 13.1875 31.3398 Z"
  }));
}

var _default = DotRadiowavesRight;
exports["default"] = _default;