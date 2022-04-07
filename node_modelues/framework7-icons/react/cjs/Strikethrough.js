"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Strikethrough(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 9.6133 28.6445 L 23.2070 28.6445 C 23.8164 28.8320 24.4258 29.0195 25.1055 29.1602 L 29.4414 30.1914 C 34.2929 31.3633 36.3320 32.9570 36.3320 35.7695 C 36.3320 39.1445 32.8867 41.5586 27.9883 41.5586 C 23.6524 41.5586 20.4180 39.6133 19.1992 36.2851 C 18.7773 35.2773 18.2617 34.8320 17.2773 34.8320 C 16.0351 34.8320 15.2617 35.6055 15.2617 36.8242 C 15.2617 37.2461 15.3086 37.6914 15.4258 38.1367 C 16.6680 42.5664 21.5664 45.3320 28.0117 45.3320 C 35.7695 45.3320 40.7617 41.3711 40.7617 35.2539 C 40.7617 32.3242 39.6836 30.2148 37.3164 28.6445 L 46.3867 28.6445 C 46.9258 28.6445 47.3476 28.2226 47.3476 27.6836 C 47.3476 27.1445 46.9258 26.7226 46.3867 26.7226 L 32.9336 26.7226 C 32.2773 26.5117 31.5976 26.3242 30.8476 26.1602 L 27.0273 25.2461 C 22.2695 24.0977 20.2539 22.6445 20.2539 20.0429 C 20.2539 16.7617 23.4883 14.4414 27.9648 14.4414 C 31.9961 14.4414 34.8789 16.2695 36.0273 19.5039 C 36.4258 20.3945 36.9648 20.8164 37.9024 20.8164 C 39.1211 20.8164 39.8711 20.1133 39.8711 18.9414 C 39.8711 18.5898 39.8242 18.2148 39.7305 17.8633 C 38.6758 13.5977 33.9883 10.6680 27.9648 10.6680 C 20.9102 10.6680 15.8242 14.6758 15.8242 20.3477 C 15.8242 23.1133 16.8555 25.1758 19.0586 26.7226 L 9.6133 26.7226 C 9.0742 26.7226 8.6524 27.1445 8.6524 27.6836 C 8.6524 28.2226 9.0742 28.6445 9.6133 28.6445 Z"
  }));
}

var _default = Strikethrough;
exports["default"] = _default;