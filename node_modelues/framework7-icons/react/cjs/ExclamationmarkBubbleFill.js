"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ExclamationmarkBubbleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 16.0938 52.3164 C 17.0313 52.3164 17.6876 51.8476 18.7891 50.8164 L 27.2735 43.0820 L 43.0938 43.1055 C 50.0783 43.1289 53.8280 39.2383 53.8280 32.3711 L 53.8280 14.4180 C 53.8280 7.5508 50.0783 3.6836 43.0938 3.6836 L 12.9064 3.6836 C 5.9454 3.6836 2.1720 7.5273 2.1720 14.4180 L 2.1720 32.3711 C 2.1720 39.2617 5.9454 43.1055 12.9064 43.0820 L 14.0079 43.0820 L 14.0079 49.9024 C 14.0079 51.3555 14.7813 52.3164 16.0938 52.3164 Z M 28.1642 27.4258 C 26.9454 27.4258 26.2423 26.6992 26.1954 25.4570 L 25.8907 13.8789 C 25.8438 12.5898 26.8048 11.6758 28.1407 11.6758 C 29.4532 11.6758 30.4844 12.6133 30.4376 13.9024 L 30.0860 25.4570 C 30.0391 26.7227 29.3595 27.4258 28.1642 27.4258 Z M 28.1642 36.0508 C 26.8282 36.0508 25.5391 34.9727 25.5391 33.5195 C 25.5391 32.0664 26.8048 30.9883 28.1642 30.9883 C 29.5469 30.9883 30.7891 32.0429 30.7891 33.5195 C 30.7891 34.9961 29.5235 36.0508 28.1642 36.0508 Z"
  }));
}

var _default = ExclamationmarkBubbleFill;
exports["default"] = _default;