"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MicSlash(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 26.7110 6.8828 C 29.3594 6.8828 31.1172 9.0860 31.1172 11.8750 L 31.1172 23.1484 L 34.7031 26.7344 L 34.7031 11.9687 C 34.7031 7.0938 31.3984 3.4844 26.7110 3.4844 C 22.5157 3.4844 19.4453 6.3203 18.8594 10.1875 C 18.8359 10.3984 18.8125 10.7266 18.8125 10.8672 L 22.2813 14.2891 L 22.2813 11.8750 C 22.2813 9.0860 24.0625 6.8828 26.7110 6.8828 Z M 46.3281 47.3828 C 47.0313 48.0859 48.1797 48.0859 48.8594 47.3828 C 49.5859 46.7031 49.5859 45.5313 48.8594 44.8281 L 9.6719 5.6406 C 8.9688 4.9375 7.7735 4.9375 7.0938 5.6406 C 6.4141 6.3438 6.4141 7.5156 7.0938 8.1953 Z M 15.7657 48.9766 C 14.8281 48.9766 13.9844 49.8203 13.9844 50.7578 C 13.9844 51.6953 14.8281 52.5156 15.7657 52.5156 L 37.6328 52.5156 C 38.5703 52.5156 39.4141 51.6953 39.4141 50.7578 C 39.4141 49.8203 38.5703 48.9766 37.6328 48.9766 L 28.4688 48.9766 L 28.4688 43.8438 C 31.4453 43.5859 34.0469 42.625 36.1797 41.125 L 33.6719 38.6172 C 31.7735 39.8828 29.4062 40.6094 26.7110 40.6094 C 19.3516 40.6094 14.2188 35.3594 14.2188 28.2109 L 14.2188 22.7031 C 14.2188 21.7891 13.4219 20.9922 12.4844 20.9922 C 11.5703 20.9922 10.7735 21.7891 10.7735 22.7031 L 10.7735 28.2109 C 10.7735 36.7891 16.3984 43.0938 24.9297 43.8438 L 24.9297 48.9766 Z M 42.6250 22.7031 C 42.6250 21.7891 41.8281 20.9922 40.9141 20.9922 C 40.0000 20.9922 39.1797 21.7891 39.1797 22.7031 L 39.1797 28.2109 C 39.1797 29.1484 39.0859 30.0391 38.8984 30.9297 L 41.7578 33.7656 C 42.3203 32.0547 42.6250 30.2031 42.6250 28.2109 Z M 26.2422 36.2500 C 28.0703 36.2500 29.2891 35.8984 30.3438 35.2891 L 27.4610 32.4062 C 27.2266 32.6641 26.8750 32.8281 26.3125 32.8281 C 23.8516 32.8281 22.3281 31.1641 22.3281 28.7031 L 22.3281 27.2734 L 18.6953 23.6406 L 18.6953 28.2344 C 18.6953 33.6484 22.0000 36.2500 26.2422 36.2500 Z"
  }));
}

var _default = MicSlash;
exports["default"] = _default;