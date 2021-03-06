"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function HandPointLeft(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 52.6562 30.8945 C 52.6562 22.6211 48.2032 16.8320 39.4141 13.7148 L 27.8126 9.5898 C 24.8595 8.5586 22.4688 9.4727 21.5548 11.9336 C 20.7579 14.1367 21.6954 16.2461 24.1329 17.2774 L 27.8829 18.8476 C 27.9766 18.8711 28.0470 18.9414 28.0470 19.0352 C 28.0470 19.1523 27.9532 19.2227 27.8360 19.2227 L 8.2657 19.2227 C 5.3126 19.2227 3.3438 21.1914 3.3438 23.9805 C 3.3438 26.7461 5.3126 28.7148 8.2657 28.7148 L 16.0704 28.7148 C 15.9063 29.2774 15.8360 29.8398 15.8360 30.3789 C 15.8360 32.4180 16.9844 33.9648 18.8829 34.5742 C 18.6485 35.2774 18.5313 35.9570 18.5313 36.6133 C 18.5313 38.5820 19.5860 39.9883 21.2970 40.5274 C 21.3438 44.8867 24.5079 47.4414 29.9219 47.4414 L 35.0313 47.4414 C 46.0001 47.4414 52.6562 40.8086 52.6562 30.8945 Z M 49.4219 31.0117 C 49.4219 39.2852 44.0782 44.3477 34.6563 44.3477 L 30.3907 44.3477 C 26.6641 44.3477 24.5079 43.1523 24.5079 41.0664 L 27.2032 41.0664 C 28.0704 41.0664 28.6329 40.3867 28.6329 39.6133 C 28.6329 38.8164 28.0704 38.0898 27.2032 38.0898 L 23.5470 38.0898 C 22.3282 38.0898 21.5548 37.4101 21.5548 36.2148 C 21.5548 35.7696 21.6719 35.2305 21.8595 34.8320 L 26.2892 34.8320 C 27.1563 34.8320 27.7423 34.1289 27.7423 33.3555 C 27.7423 32.5586 27.1563 31.8555 26.2892 31.8555 L 20.8516 31.8555 C 19.6095 31.8555 18.8595 31.1523 18.8595 29.9805 C 18.8595 29.5117 18.9766 28.9727 19.1641 28.5742 L 25.3985 28.5742 C 26.2188 28.5742 26.8516 27.9180 26.8516 27.1211 C 26.8516 26.3008 26.2188 25.5976 25.3985 25.5976 L 8.0548 25.5976 C 7.0704 25.5976 6.3673 24.9414 6.3673 23.9805 C 6.3673 23.0196 7.0704 22.3398 8.0548 22.3398 L 32.3595 22.3398 C 33.4376 22.3398 34.2110 21.6367 34.2110 20.6523 C 34.2110 19.8320 33.8360 19.1055 32.6641 18.5898 L 25.5392 15.4023 C 24.5313 14.9570 23.9923 14.1367 24.3438 13.2461 C 24.6954 12.3086 25.6095 11.9805 26.8282 12.4258 L 38.4063 16.5742 C 46.3985 19.4336 49.4219 24.4492 49.4219 31.0117 Z"
  }));
}

var _default = HandPointLeft;
exports["default"] = _default;