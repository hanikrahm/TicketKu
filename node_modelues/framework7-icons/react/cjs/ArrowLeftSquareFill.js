"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowLeftSquareFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 14.9335 27.9414 C 14.9335 27.3789 15.1210 26.9102 15.6601 26.3711 L 24.6366 17.3945 C 25.0117 17.0430 25.4804 16.8555 26.0429 16.8555 C 27.1444 16.8555 28.0117 17.6992 28.0117 18.8008 C 28.0117 19.3633 27.7304 19.8789 27.4023 20.2071 L 24.0976 23.4883 L 20.9101 26.1602 L 26.5585 25.9258 L 40.2929 25.9258 C 41.4648 25.9258 42.2617 26.7696 42.2851 27.9414 C 42.2851 29.1133 41.4882 29.9571 40.2929 29.9571 L 26.5585 29.9571 L 20.9101 29.7461 L 24.0976 32.4414 L 27.4023 35.6758 C 27.7539 36.0274 28.0117 36.5196 28.0117 37.1055 C 28.0117 38.2071 27.1444 39.0508 26.0429 39.0508 C 25.4804 39.0508 25.0117 38.8164 24.6366 38.4883 L 15.6601 29.5352 C 15.1444 29.0196 14.9335 28.5508 14.9335 27.9414 Z"
  }));
}

var _default = ArrowLeftSquareFill;
exports["default"] = _default;