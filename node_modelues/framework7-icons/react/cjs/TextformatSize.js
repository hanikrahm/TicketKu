"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TextformatSize(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.5781 45.2969 C 28.7500 45.2969 29.3594 44.8281 29.8047 43.5391 L 32.8281 35.2422 L 46.6564 35.2422 L 49.6564 43.5391 C 50.1248 44.8281 50.7109 45.2969 51.8826 45.2969 C 53.1484 45.2969 53.9922 44.5469 53.9922 43.3750 C 53.9922 42.9766 53.8986 42.6250 53.7344 42.1094 L 42.7187 12.8594 C 42.1797 11.4063 41.2187 10.7031 39.7422 10.7031 C 38.2656 10.7031 37.3047 11.4063 36.7890 12.8359 L 25.7734 42.1328 C 25.5859 42.6484 25.5390 43.0000 25.5390 43.3984 C 25.5390 44.5703 26.3125 45.2969 27.5781 45.2969 Z M 33.9765 31.6563 L 39.6484 15.8828 L 39.7890 15.8828 L 45.4842 31.6563 Z M 4.0234 45.2969 C 4.9609 45.2969 5.6172 44.8281 6.0390 43.6094 L 7.9141 38.1953 L 16.4922 38.1953 L 18.3672 43.6094 C 18.7890 44.8516 19.4453 45.2969 20.4062 45.2969 C 21.5781 45.2969 22.3984 44.5469 22.3984 43.4453 C 22.3984 43.0469 22.3281 42.6250 22.0937 42.0391 L 15.1094 23.4766 C 14.6172 22.1172 13.6563 21.2500 12.1797 21.2500 C 10.7265 21.2500 9.7890 22.1172 9.2968 23.4766 L 2.2890 42.0391 C 2.0781 42.6250 2.0078 43.0469 2.0078 43.4453 C 2.0078 44.5469 2.8047 45.2969 4.0234 45.2969 Z M 8.9687 35.0078 L 12.0390 25.8672 L 12.3437 25.8672 L 15.4375 35.0078 Z"
  }));
}

var _default = TextformatSize;
exports["default"] = _default;