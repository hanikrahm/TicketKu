"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function HeartSlashFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 45.1563 49.0117 C 45.8594 49.7148 47.0315 49.7148 47.7112 49.0117 C 48.4139 48.3086 48.4139 47.1601 47.7112 46.4570 L 6.7188 5.4883 C 6.0157 4.7852 4.8438 4.7852 4.1407 5.4883 C 3.4610 6.1679 3.4610 7.3633 4.1407 8.0430 Z M 44.6407 39.4258 C 49.6796 33.9648 52.5390 28.1758 52.5390 22.3398 C 52.5390 14.0430 46.8673 8.1836 39.2501 8.1836 C 34.9141 8.1836 31.3985 10.2461 29.2657 13.4101 C 27.1797 10.2695 23.6407 8.1836 19.2813 8.1836 C 17.5001 8.1836 15.8360 8.5117 14.3360 9.1445 Z M 29.2657 51.2148 C 29.7579 51.2148 30.4610 50.8867 30.9766 50.5820 C 33.4376 48.9883 35.7579 47.3711 37.8672 45.6836 L 7.5626 15.4258 C 6.5548 17.4179 5.9923 19.7617 5.9923 22.3398 C 5.9923 32.3242 14.3594 42.1445 27.5782 50.5820 C 28.0704 50.8867 28.7969 51.2148 29.2657 51.2148 Z"
  }));
}

var _default = HeartSlashFill;
exports["default"] = _default;