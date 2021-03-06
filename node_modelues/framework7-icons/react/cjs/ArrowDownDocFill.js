"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowDownDocFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 15.5547 53.125 L 40.4453 53.125 C 45.2969 53.125 47.7109 50.6640 47.7109 45.7890 L 47.7109 24.5078 L 30.7422 24.5078 C 27.7422 24.5078 26.3359 23.0781 26.3359 20.0781 L 26.3359 2.8750 L 15.5547 2.8750 C 10.7266 2.8750 8.2891 5.3594 8.2891 10.2344 L 8.2891 45.7890 C 8.2891 50.6875 10.7266 53.125 15.5547 53.125 Z M 30.8125 21.2969 L 47.4531 21.2969 C 47.2891 20.3359 46.6094 19.3984 45.5078 18.2500 L 32.5703 5.1015 C 31.4922 3.9766 30.5078 3.2969 29.5234 3.1328 L 29.5234 20.0313 C 29.5234 20.875 29.9687 21.2969 30.8125 21.2969 Z M 28.0000 47.1719 C 27.5547 47.1719 27.1797 47.0078 26.6875 46.5859 L 20.1953 40.5859 C 19.8203 40.2578 19.6094 39.8594 19.6094 39.3203 C 19.6094 38.4062 20.3125 37.7266 21.2734 37.7266 C 21.7187 37.7266 22.1875 37.9140 22.5391 38.2422 L 24.5078 40.2578 L 26.3828 42.1562 L 26.2187 38.6172 L 26.2187 30.7187 C 26.2187 29.7813 27.0391 28.9844 28.0000 28.9844 C 28.9844 28.9844 29.8047 29.7813 29.8047 30.7187 L 29.8047 38.6172 L 29.6406 42.1562 L 31.4922 40.2578 L 33.4844 38.2422 C 33.8125 37.9140 34.2813 37.7266 34.7266 37.7266 C 35.6875 37.7266 36.3906 38.4062 36.3906 39.3203 C 36.3906 39.8594 36.2031 40.2344 35.8047 40.5859 L 29.3125 46.5859 C 28.8437 47.0078 28.4453 47.1719 28.0000 47.1719 Z"
  }));
}

var _default = ArrowDownDocFill;
exports["default"] = _default;