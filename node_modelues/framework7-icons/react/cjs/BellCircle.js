"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BellCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 17.4765 36.1328 L 38.5234 36.1328 C 39.7187 36.1328 40.4452 35.5234 40.4452 34.5859 C 40.4452 33.25 39.1093 32.0781 37.9609 30.9063 C 37.0468 29.9453 36.8593 28.0469 36.7655 26.5 C 36.6718 21.4609 35.2890 17.9922 31.8202 16.7266 C 31.2812 15.0156 29.9218 13.6563 27.9999 13.6563 C 26.0780 13.6563 24.6952 15.0156 24.1796 16.7266 C 20.6874 17.9922 19.3280 21.4609 19.2109 26.5 C 19.1171 28.0469 18.9062 29.9453 18.0390 30.9063 C 16.8905 32.1016 15.5546 33.25 15.5546 34.5859 C 15.5546 35.5234 16.2577 36.1328 17.4765 36.1328 Z M 27.9999 41.5469 C 30.2265 41.5469 31.8671 39.9531 32.0312 38.0312 L 23.9687 38.0312 C 24.1327 39.9531 25.7499 41.5469 27.9999 41.5469 Z"
  }));
}

var _default = BellCircle;
exports["default"] = _default;