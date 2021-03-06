"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function RadiowavesLeft(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 22.7500 51.0273 C 23.6641 50.3945 23.8047 49.2227 23.1250 48.2617 C 19.2578 42.8008 17.0078 35.5820 17.0078 28.0117 C 17.0078 20.4414 19.3515 13.3164 23.1015 7.7617 C 23.7812 6.7773 23.6406 5.6055 22.7500 4.9961 C 21.8828 4.3867 20.7344 4.6211 20.0547 5.5820 C 15.7890 11.7227 13.2812 19.6445 13.2812 28.0117 C 13.2812 36.3789 15.7656 44.2773 20.0547 50.4180 C 20.7344 51.3789 21.8828 51.6133 22.7500 51.0273 Z M 32.2188 44.6289 C 33.0859 44.0195 33.2266 42.8711 32.5469 41.8633 C 29.9219 38.1602 28.3984 33.1914 28.3984 28.0117 C 28.3984 22.8320 29.9688 17.9102 32.5234 14.1602 C 33.2266 13.1524 33.0859 12.0039 32.2188 11.3945 C 31.3047 10.7851 30.2031 11.0195 29.5234 11.9336 C 26.3828 16.2461 24.6250 21.9883 24.6250 28.0117 C 24.6250 34.0117 26.4062 39.7539 29.5234 44.0664 C 30.1797 45.0039 31.3047 45.2383 32.2188 44.6289 Z M 41.5703 38.3008 C 42.5547 37.5976 42.6953 36.4492 41.9688 35.4414 C 40.6328 33.5898 39.7890 30.8008 39.7890 28.0117 C 39.7890 25.2227 40.6094 22.4336 41.9453 20.6055 C 42.7188 19.5742 42.5781 18.3789 41.5703 17.6992 C 40.7500 17.1367 39.6250 17.3242 38.9453 18.2383 C 37.1172 20.7461 36.0156 24.3320 36.0156 28.0117 C 36.0156 31.6914 37.0937 35.3008 38.9453 37.7617 C 39.6250 38.6758 40.7500 38.8633 41.5703 38.3008 Z"
  }));
}

var _default = RadiowavesLeft;
exports["default"] = _default;