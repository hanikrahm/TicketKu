"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Escape(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 28.0469 51.2969 C 40.8672 51.2969 51.2968 40.8672 51.2968 28.0469 C 51.2968 15.8594 41.5704 5.6875 29.6641 4.8203 C 28.3047 4.7031 27.2735 5.5469 27.2735 6.7422 C 27.2735 7.7969 28.0235 8.6641 29.3829 8.7813 C 39.6250 9.5078 47.3126 18.0625 47.3126 28.0469 C 47.3126 38.8516 38.8282 47.3359 28.0469 47.3359 C 18.0391 47.3359 9.4845 39.6484 8.7579 29.3828 C 8.6407 28.0469 7.7735 27.2734 6.7188 27.2734 C 5.5235 27.2734 4.7032 28.3282 4.8204 29.6641 C 5.6876 41.5938 15.8360 51.2969 28.0469 51.2969 Z M 26.3126 28.9141 C 27.5313 28.9141 28.3985 28.0234 28.3985 26.8516 C 28.3985 26.3125 28.1407 25.7500 27.7188 25.3282 L 15.5079 13.1172 L 11.0079 9.1094 C 13.6094 9.4375 16.8907 9.4141 18.0391 9.4141 C 19.0938 9.4141 19.9376 8.5469 19.9376 7.4922 C 19.9376 6.4375 19.0938 5.5938 18.0391 5.5938 L 7.4923 5.5938 C 5.9688 5.5938 5.1251 6.4141 5.1251 7.9609 L 5.1251 18.4844 C 5.1251 19.5391 5.9688 20.3828 7.0001 20.3828 C 8.0313 20.3828 8.8985 19.5391 8.8985 18.4844 C 8.8985 17.3828 8.8985 13.8672 8.6641 11.4531 L 12.6250 15.9766 L 24.8594 28.2344 C 25.3047 28.6797 25.7969 28.9141 26.3126 28.9141 Z"
  }));
}

var _default = Escape;
exports["default"] = _default;