"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MusicMic(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 34.6563 7.8789 L 47.5705 20.7930 C 51.6952 16.6914 51.8593 11.4883 47.8984 7.5508 C 43.9610 3.6602 38.7579 3.7539 34.6563 7.8789 Z M 32.3126 10.2461 C 29.8282 12.6836 28.7969 15.4727 29.1485 18.1680 L 7.3750 41.6289 C 6.4844 42.5899 6.3438 43.9258 7.4453 45.0274 L 4.4453 48.8945 C 4.1407 49.2695 4.1407 49.8086 4.5626 50.2305 L 5.2422 50.9336 C 5.6407 51.3320 6.1797 51.3555 6.6016 51.0274 L 10.4688 48.0039 C 11.5235 49.1055 12.8828 48.9649 13.8204 48.0742 L 25.9610 36.8242 L 25.9610 50.2071 C 25.9610 51.4024 26.9219 52.3398 28.1172 52.3398 C 29.3126 52.3398 30.2500 51.4024 30.2500 50.2071 L 30.2500 36.3555 L 30.0860 33.0039 L 37.2344 26.3711 C 39.9297 26.7227 42.7657 25.6211 45.2032 23.1602 Z M 9.7657 43.5508 L 30.4375 21.6602 C 30.8360 22.3164 31.3282 22.9492 31.9141 23.5586 C 32.5000 24.1445 33.1094 24.6602 33.7422 25.0820 L 11.9453 45.7071 Z"
  }));
}

var _default = MusicMic;
exports["default"] = _default;