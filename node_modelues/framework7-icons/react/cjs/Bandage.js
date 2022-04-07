"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Bandage(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.3047 48.6953 C 12.2735 53.6406 19.3047 53.5937 24.7187 48.1797 L 31.8906 40.9844 L 41.0078 31.8906 L 48.1797 24.7187 C 53.5936 19.3047 53.6406 12.2734 48.6952 7.3047 C 43.7266 2.3594 36.6953 2.3828 31.2813 7.7968 L 24.1094 14.9922 L 14.9922 24.1094 L 7.8203 31.2578 C 2.4063 36.6953 2.3594 43.7266 7.3047 48.6953 Z M 41.0313 23.6875 L 32.2891 14.9687 C 31.7735 14.4531 31.2578 14.0312 30.7422 13.7031 L 33.9063 10.5156 C 37.6797 6.7422 42.6250 6.2266 46.2109 9.7656 C 49.8203 13.3281 49.2577 18.3203 45.4844 22.0703 L 42.2969 25.2578 C 41.9687 24.7422 41.5469 24.2266 41.0313 23.6875 Z M 30.1328 17.8047 L 38.1953 25.8672 C 39.5313 27.2031 39.3906 28.1875 37.9844 29.5703 L 29.5703 37.9844 C 28.1875 39.3906 27.2031 39.5312 25.8672 38.1953 L 17.8047 30.1328 C 16.4687 28.7968 16.6094 27.7890 18.0156 26.4063 L 26.4297 18.0156 C 27.8125 16.6094 28.7969 16.4687 30.1328 17.8047 Z M 27.9766 25.3750 C 29.1250 25.3750 29.9687 24.4844 29.9687 23.4063 C 30.0156 22.3281 29.1016 21.4141 28.0000 21.4141 C 26.8984 21.4141 26.0313 22.3281 26.0313 23.4531 C 26.0313 24.4609 26.9453 25.3750 27.9766 25.3750 Z M 23.4766 29.9687 C 24.5313 29.9687 25.4219 29.0312 25.4219 28.0234 C 25.4219 26.8984 24.5313 26.0078 23.4531 26.0078 C 22.3282 26.0078 21.4609 26.8984 21.4609 28 C 21.4609 29.0781 22.3047 29.9687 23.4766 29.9687 Z M 32.5469 29.9687 C 33.6484 29.9687 34.5625 29.0547 34.5391 27.9766 C 34.5391 26.8984 33.6719 26.0078 32.5235 26.0078 C 31.4922 26.0078 30.5782 26.9219 30.5782 27.9297 C 30.5782 29.0547 31.4453 29.9687 32.5469 29.9687 Z M 28.0000 34.5390 C 29.1016 34.5390 29.9687 33.6484 29.9687 32.5234 C 29.9687 31.5156 29.1016 30.5781 28.0235 30.5781 C 26.8750 30.5781 26.0078 31.4687 26.0078 32.5468 C 26.0078 33.6484 26.8750 34.5390 28.0000 34.5390 Z M 9.7891 46.2109 C 6.1797 42.6484 6.7422 37.6797 10.5156 33.9063 L 13.7031 30.7187 C 14.0313 31.2578 14.4531 31.7734 14.9687 32.2890 L 23.7109 41.0312 C 24.2266 41.5469 24.7422 41.9687 25.2578 42.2969 L 22.0938 45.4844 C 18.3203 49.2344 13.3750 49.7734 9.7891 46.2109 Z"
  }));
}

var _default = Bandage;
exports["default"] = _default;