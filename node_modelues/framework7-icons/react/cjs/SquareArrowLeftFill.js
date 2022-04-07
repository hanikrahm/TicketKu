"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SquareArrowLeftFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18.3397,20.9883 C18.3397,21.9961 17.5194,22.8633 16.535,22.8633 L9.1991,22.8633 L5.6835,22.6992 L7.371,24.293 L11.1444,27.8555 C11.5194,28.1836 11.7069,28.6758 11.7069,29.1445 C11.7069,30.1289 11.0038,30.8321 10.0663,30.8321 C9.5507,30.8321 9.1757,30.6211 8.8241,30.2695 L1.1835,22.3477 C0.7146,21.8789 0.5509,21.4805 0.5509,20.9883 C0.5509,20.5195 0.7146,20.0977 1.1835,19.6289 L8.8241,11.707 C9.1757,11.3555 9.5507,11.168 10.0663,11.168 C11.0038,11.168 11.7069,11.8945 11.7069,12.8789 C11.7069,13.3242 11.5194,13.8164 11.1444,14.1445 L7.371,17.6836 L5.7069,19.2774 L9.1991,19.1367 L16.535,19.1367 C17.5194,19.1367 18.3397,19.9805 18.3397,20.9883 Z M53.4491,34.4414 C53.4491,39.3164 51.035,41.8008 46.1835,41.8008 L23.7772,41.8008 C18.9257,41.8008 16.5116,39.3164 16.5116,34.4414 L16.5116,23.3789 L33.2694,23.3789 C34.5585,23.3789 35.6366,22.3008 35.6366,20.9883 C35.6366,19.6992 34.5585,18.5977 33.2694,18.5977 L16.5116,18.5977 L16.5116,7.5586 C16.5116,2.6367 18.9491,0.1992 23.7772,0.1992 L46.1835,0.1992 C51.0116,0.1992 53.4491,2.6367 53.4491,7.5586 L53.4491,34.4414 Z",
    transform: "translate(1 7)"
  }));
}

var _default = SquareArrowLeftFill;
exports["default"] = _default;