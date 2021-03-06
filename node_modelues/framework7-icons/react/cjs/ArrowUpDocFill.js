"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowUpDocFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 15.5547 53.125 L 40.4453 53.125 C 45.2969 53.125 47.7109 50.6640 47.7109 45.7890 L 47.7109 24.5078 L 30.7422 24.5078 C 27.7422 24.5078 26.3359 23.0781 26.3359 20.0781 L 26.3359 2.8750 L 15.5547 2.8750 C 10.7266 2.8750 8.2891 5.3594 8.2891 10.2344 L 8.2891 45.7890 C 8.2891 50.6875 10.7266 53.125 15.5547 53.125 Z M 30.8125 21.2969 L 47.4531 21.2969 C 47.2891 20.3359 46.6094 19.3984 45.5078 18.2500 L 32.5703 5.1015 C 31.4922 3.9766 30.5078 3.2969 29.5234 3.1328 L 29.5234 20.0313 C 29.5234 20.875 29.9687 21.2969 30.8125 21.2969 Z M 28.0000 46.9375 C 27.0391 46.9375 26.2187 46.1406 26.2187 45.2031 L 26.2187 37.3047 L 26.3828 33.7656 L 24.5078 35.6640 L 22.5391 37.6797 C 22.1875 38.0313 21.7187 38.2187 21.2734 38.2187 C 20.3125 38.2187 19.6094 37.5391 19.6094 36.6015 C 19.6094 36.0859 19.8203 35.6875 20.1953 35.3594 L 26.6875 29.3594 C 27.1797 28.9140 27.5547 28.7500 28.0000 28.7500 C 28.4453 28.7500 28.8437 28.9140 29.3125 29.3594 L 35.8047 35.3594 C 36.1797 35.6640 36.3906 36.0625 36.3906 36.6015 C 36.3906 37.5391 35.6875 38.2187 34.7266 38.2187 C 34.2813 38.2187 33.8125 38.0313 33.4844 37.6797 L 31.4922 35.6640 L 29.6406 33.7656 L 29.8047 37.3047 L 29.8047 45.2031 C 29.8047 46.1406 28.9844 46.9375 28.0000 46.9375 Z"
  }));
}

var _default = ArrowUpDocFill;
exports["default"] = _default;