"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ExclamationmarkShieldFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9883 51.2969 C 28.3633 51.2969 28.9492 51.1562 29.5586 50.8516 C 42.6602 43.4688 47.1836 40.3750 47.1836 31.9609 L 47.1836 14.2891 C 47.1836 11.8750 46.1289 11.1016 44.1836 10.2813 C 41.4414 9.1562 32.6524 5.9922 29.9336 5.0313 C 29.3008 4.8438 28.6680 4.7031 27.9883 4.7031 C 27.3320 4.7031 26.6992 4.8438 26.0664 5.0313 C 23.3476 6.0156 14.5586 9.1797 11.8164 10.2813 C 9.8711 11.0781 8.8164 11.8750 8.8164 14.2891 L 8.8164 31.9609 C 8.8164 40.3750 13.3633 43.4453 26.4414 50.8516 C 27.0508 51.1562 27.6133 51.2969 27.9883 51.2969 Z M 27.9883 30.8828 C 26.7695 30.8828 26.0664 30.1562 26.0195 28.9141 L 25.7148 17.3360 C 25.6680 16.0469 26.6289 15.1328 27.9649 15.1328 C 29.3008 15.1328 30.3086 16.0703 30.2617 17.3594 L 29.9102 28.9141 C 29.8633 30.1797 29.1836 30.8828 27.9883 30.8828 Z M 27.9883 39.5078 C 26.6524 39.5078 25.3633 38.4297 25.3633 36.9766 C 25.3633 35.5234 26.6289 34.4453 27.9883 34.4453 C 29.3711 34.4453 30.6367 35.5000 30.6367 36.9766 C 30.6367 38.4531 29.3476 39.5078 27.9883 39.5078 Z"
  }));
}

var _default = ExclamationmarkShieldFill;
exports["default"] = _default;