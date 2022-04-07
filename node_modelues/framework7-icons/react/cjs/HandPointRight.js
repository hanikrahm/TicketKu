"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function HandPointRight(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 3.3437 30.8945 C 3.3437 40.8086 9.9999 47.4414 20.9687 47.4414 L 26.0780 47.4414 C 31.4921 47.4414 34.6327 44.8867 34.7030 40.5274 C 36.4140 39.9883 37.4687 38.5820 37.4687 36.6133 C 37.4687 35.9570 37.3280 35.2774 37.1171 34.5742 C 38.9921 33.9648 40.1640 32.4180 40.1640 30.3789 C 40.1640 29.8398 40.0936 29.2774 39.9062 28.7148 L 47.7109 28.7148 C 50.6874 28.7148 52.6563 26.7461 52.6563 23.9805 C 52.6563 21.1914 50.6874 19.2227 47.7109 19.2227 L 28.1640 19.2227 C 28.0468 19.2227 27.9530 19.1523 27.9530 19.0352 C 27.9530 18.9414 28.0233 18.8711 28.1171 18.8476 L 31.8671 17.2774 C 34.3046 16.2461 35.2421 14.1367 34.4218 11.9336 C 33.5077 9.4727 31.1171 8.5586 28.1874 9.5898 L 16.5858 13.7148 C 7.7968 16.8320 3.3437 22.6211 3.3437 30.8945 Z M 6.5780 31.0117 C 6.5780 24.4492 9.6014 19.4336 17.5936 16.5742 L 29.1718 12.4258 C 30.3905 11.9805 31.2812 12.3086 31.6562 13.2461 C 31.9843 14.1367 31.4687 14.9570 30.4609 15.4023 L 23.3358 18.5898 C 22.1640 19.1055 21.7890 19.8320 21.7890 20.6523 C 21.7890 21.6367 22.5624 22.3398 23.6405 22.3398 L 47.9216 22.3398 C 48.9296 22.3398 49.6328 23.0196 49.6328 23.9805 C 49.6328 24.9414 48.9296 25.5976 47.9216 25.5976 L 30.5780 25.5976 C 29.7577 25.5976 29.1483 26.3008 29.1483 27.1211 C 29.1483 27.9180 29.7577 28.5742 30.5780 28.5742 L 36.8124 28.5742 C 37.0233 28.9727 37.1405 29.5117 37.1405 29.9805 C 37.1405 31.1523 36.3671 31.8555 35.1483 31.8555 L 29.6874 31.8555 C 28.8202 31.8555 28.2577 32.5586 28.2577 33.3555 C 28.2577 34.1289 28.8202 34.8320 29.6874 34.8320 L 34.1171 34.8320 C 34.3280 35.2305 34.4452 35.7696 34.4452 36.2148 C 34.4452 37.4101 33.6718 38.0898 32.4530 38.0898 L 28.7968 38.0898 C 27.9296 38.0898 27.3436 38.8164 27.3436 39.6133 C 27.3436 40.3867 27.9296 41.0664 28.7968 41.0664 L 31.4921 41.0664 C 31.4921 43.1523 29.3358 44.3477 25.6093 44.3477 L 21.3436 44.3477 C 11.9218 44.3477 6.5780 39.2852 6.5780 31.0117 Z"
  }));
}

var _default = HandPointRight;
exports["default"] = _default;