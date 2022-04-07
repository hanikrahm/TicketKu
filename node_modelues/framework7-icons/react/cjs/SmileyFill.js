"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SmileyFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 20.6640 25.7734 C 19.2577 25.7734 18.0858 24.5312 18.0858 22.75 C 18.0858 20.9922 19.2577 19.75 20.6640 19.75 C 22.0936 19.75 23.2890 20.9922 23.2890 22.75 C 23.2890 24.5312 22.0936 25.7734 20.6640 25.7734 Z M 34.7733 25.7734 C 33.3436 25.7734 32.1718 24.5312 32.1718 22.75 C 32.1718 20.9922 33.3436 19.75 34.7733 19.75 C 36.1796 19.75 37.3749 20.9922 37.3749 22.75 C 37.3749 24.5312 36.1796 25.7734 34.7733 25.7734 Z M 27.6718 39.5781 C 21.8124 39.5781 18.1796 35.4297 18.1796 33.8828 C 18.1796 33.5547 18.3905 33.4375 18.6483 33.6250 C 20.3358 34.9844 23.4062 36.5312 27.6718 36.5312 C 31.9374 36.5312 34.9140 35.0547 36.6718 33.6016 C 36.9296 33.4141 37.1640 33.5547 37.1640 33.8828 C 37.1640 35.4297 33.5077 39.5781 27.6718 39.5781 Z"
  }));
}

var _default = SmileyFill;
exports["default"] = _default;