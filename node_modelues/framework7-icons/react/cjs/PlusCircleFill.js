"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PlusCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9296 39.6719 C 26.6171 39.6719 25.9140 38.7109 25.9140 37.3516 L 25.9140 30.0625 L 18.2265 30.0625 C 16.8436 30.0625 15.8827 29.3359 15.8827 28.0469 C 15.8827 26.7109 16.7733 25.9609 18.2265 25.9609 L 25.9140 25.9609 L 25.9140 18.2031 C 25.9140 16.8437 26.6171 15.8828 27.9296 15.8828 C 29.2421 15.8828 30.0390 16.7968 30.0390 18.2031 L 30.0390 25.9609 L 37.7499 25.9609 C 39.1796 25.9609 40.0702 26.7109 40.0702 28.0469 C 40.0702 29.3359 39.1327 30.0625 37.7499 30.0625 L 30.0390 30.0625 L 30.0390 37.3516 C 30.0390 38.7578 29.2421 39.6719 27.9296 39.6719 Z"
  }));
}

var _default = PlusCircleFill;
exports["default"] = _default;