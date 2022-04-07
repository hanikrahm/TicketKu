"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MicSlashFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 33.7891 25.5859 L 33.7891 11.2656 C 33.7891 6.9297 30.8828 3.7187 26.7110 3.7187 C 22.6094 3.7187 19.6094 6.8125 19.6094 11.0078 L 19.6094 11.3828 Z M 46.3281 47.1484 C 47.0313 47.8516 48.1797 47.8516 48.8594 47.1484 C 49.5859 46.4687 49.5859 45.2969 48.8594 44.5937 L 9.6719 5.4062 C 8.9688 4.7031 7.7735 4.7031 7.0938 5.4062 C 6.4141 6.1094 6.4141 7.2813 7.0938 7.9609 Z M 15.7657 48.7422 C 14.8281 48.7422 13.9844 49.5859 13.9844 50.5234 C 13.9844 51.4609 14.8281 52.2813 15.7657 52.2813 L 37.6328 52.2813 C 38.5703 52.2813 39.4141 51.4609 39.4141 50.5234 C 39.4141 49.5859 38.5703 48.7422 37.6328 48.7422 L 28.4688 48.7422 L 28.4688 43.6094 C 31.4453 43.3516 34.0469 42.3906 36.1797 40.8906 L 33.6719 38.3828 C 31.7735 39.6484 29.4062 40.375 26.7110 40.375 C 19.3516 40.375 14.2188 35.125 14.2188 27.9766 L 14.2188 22.5391 C 14.2188 21.4375 13.5157 20.7578 12.4844 20.7578 C 11.4531 20.7578 10.7735 21.4375 10.7735 22.5391 L 10.7735 27.9766 C 10.7735 36.5547 16.3984 42.8594 24.9297 43.6094 L 24.9297 48.7422 Z M 42.6250 22.5391 C 42.6250 21.4375 41.9453 20.7578 40.9141 20.7578 C 39.8828 20.7578 39.1797 21.4375 39.1797 22.5391 L 39.1797 27.9766 C 39.1797 28.9140 39.0859 29.8047 38.8984 30.6953 L 41.7578 33.5313 C 42.3203 31.8203 42.6250 29.9687 42.6250 27.9766 Z M 29.9453 34.6562 L 19.6094 24.3203 L 19.6094 28.0000 C 19.6094 32.3125 22.5157 35.5469 26.7110 35.5469 C 27.9531 35.5469 29.0313 35.2187 29.9453 34.6562 Z"
  }));
}

var _default = MicSlashFill;
exports["default"] = _default;