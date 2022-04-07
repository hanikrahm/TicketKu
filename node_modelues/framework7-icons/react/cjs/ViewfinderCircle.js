"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ViewfinderCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 20.8046 16.4922 C 17.8983 16.4922 16.3749 17.9922 16.3749 20.8984 L 16.3749 23.9922 C 16.3749 25.0234 17.0546 25.7031 18.0624 25.7031 C 19.0702 25.7031 19.7499 25.0469 19.7499 23.9922 L 19.7499 21.4609 C 19.7499 20.3594 20.2421 19.8672 21.3202 19.8672 L 23.9218 19.8672 C 24.9530 19.8672 25.6327 19.1875 25.6327 18.1797 C 25.6327 17.1719 24.9530 16.4922 23.9218 16.4922 Z M 35.0077 16.4922 L 31.8905 16.4922 C 30.8827 16.4922 30.1796 17.1719 30.1796 18.1797 C 30.1796 19.1875 30.8827 19.8672 31.8905 19.8672 L 34.5155 19.8672 C 35.5702 19.8672 36.0858 20.3594 36.0858 21.4609 L 36.0858 23.9922 C 36.0858 25.0469 36.7421 25.7031 37.7499 25.7031 C 38.7812 25.7031 39.4609 25.0234 39.4609 23.9922 L 39.4609 20.8984 C 39.4609 17.9922 37.9140 16.4922 35.0077 16.4922 Z M 20.8046 39.5781 L 23.9218 39.5781 C 24.9530 39.5781 25.6327 38.8984 25.6327 37.8906 C 25.6327 36.8828 24.9530 36.2031 23.9218 36.2031 L 21.3202 36.2031 C 20.2421 36.2031 19.7499 35.7109 19.7499 34.6094 L 19.7499 32.0781 C 19.7499 31.0234 19.0702 30.3672 18.0624 30.3672 C 17.0546 30.3672 16.3749 31.0469 16.3749 32.0781 L 16.3749 35.1719 C 16.3749 38.0781 17.8983 39.5781 20.8046 39.5781 Z M 35.0077 39.5781 C 37.9140 39.5781 39.4609 38.0781 39.4609 35.1719 L 39.4609 32.0781 C 39.4609 31.0469 38.7812 30.3672 37.7499 30.3672 C 36.7421 30.3672 36.0858 31.0234 36.0858 32.0781 L 36.0858 34.6094 C 36.0858 35.7109 35.5702 36.2031 34.5155 36.2031 L 31.8905 36.2031 C 30.8827 36.2031 30.1796 36.8828 30.1796 37.8906 C 30.1796 38.8984 30.8827 39.5781 31.8905 39.5781 Z"
  }));
}

var _default = ViewfinderCircle;
exports["default"] = _default;