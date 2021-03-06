"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SquareArrowDownFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 26.1367 16.1641 C 26.2070 15.2500 27.0039 14.4297 28.0117 14.4297 C 28.9961 14.4297 29.7930 15.2500 29.8633 16.1641 L 29.8633 4.5156 C 29.8633 3.5313 29.0195 2.7109 28.0117 2.7109 C 27.0039 2.7109 26.1367 3.5313 26.1367 4.5156 Z M 29.9336 14.6875 L 29.9336 29.5469 L 29.7930 32.8985 L 31.2695 31.3516 L 34.8086 27.5547 C 35.1601 27.1797 35.6523 26.9687 36.1211 26.9687 C 37.1289 26.9687 37.9023 27.6953 37.9023 28.6797 C 37.9023 29.1953 37.6914 29.6172 37.3164 29.9687 L 29.4179 37.6094 C 28.9258 38.1016 28.5039 38.2656 28.0117 38.2656 C 27.5195 38.2656 27.0976 38.1016 26.6055 37.6094 L 18.6836 29.9687 C 18.3086 29.6172 18.0976 29.1953 18.0976 28.6797 C 18.0976 27.6953 18.8477 26.9687 19.8555 26.9687 C 20.3242 26.9687 20.8633 27.1797 21.1914 27.5547 L 24.7539 31.3516 L 26.2305 32.8985 L 26.0898 29.5469 L 26.0898 14.6875 L 14.5586 14.6875 C 9.6836 14.6875 7.1992 17.1016 7.1992 21.9531 L 7.1992 46.0234 C 7.1992 50.8750 9.6836 53.2891 14.5586 53.2891 L 41.4414 53.2891 C 46.3633 53.2891 48.8008 50.8516 48.8008 46.0234 L 48.8008 21.9531 C 48.8008 17.1250 46.3633 14.6875 41.4414 14.6875 Z"
  }));
}

var _default = SquareArrowDownFill;
exports["default"] = _default;