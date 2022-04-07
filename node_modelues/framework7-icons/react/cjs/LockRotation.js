"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LockRotation(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 1.5977 28 C 1.5977 41.0547 12.4258 51.9063 25.5039 51.9063 C 33.3789 51.9063 40.4570 47.9219 44.8398 41.8984 C 45.6366 40.8672 45.3789 39.5781 44.4180 38.9922 C 43.4336 38.4063 42.3320 38.7110 41.6289 39.6484 C 38.0430 44.6406 32.1836 47.8984 25.5039 47.9219 C 14.4414 47.9453 5.5820 39.0391 5.5820 28 C 5.5820 16.9375 14.4414 8.1016 25.5039 8.1016 C 34.9961 8.1016 42.8945 14.6172 44.9102 23.4766 L 41.5352 23.4766 C 39.8711 23.4766 39.4258 24.6250 40.3398 25.8906 L 45.5900 33.3672 C 46.3398 34.4453 47.4649 34.4688 48.2147 33.3672 L 53.4649 25.9141 C 54.4023 24.6250 53.9569 23.4766 52.2697 23.4766 L 48.9649 23.4766 C 46.8323 12.5078 37.0352 4.0937 25.5039 4.0937 C 12.4258 4.0937 1.5977 14.9219 1.5977 28 Z M 19.4102 39.2969 L 31.5976 39.2969 C 33.2149 39.2969 33.9883 38.5 33.9883 36.7422 L 33.9883 27.3672 C 33.9883 25.8203 33.4023 25.0235 32.1602 24.8359 L 32.1602 22.0469 C 32.1602 17.4766 29.3945 14.5235 25.5039 14.5235 C 21.6133 14.5235 18.8476 17.4766 18.8476 22.0469 L 18.8476 24.8594 C 17.6054 25.0469 16.9961 25.8437 16.9961 27.3672 L 16.9961 36.7422 C 16.9961 38.5 17.7695 39.2969 19.4102 39.2969 Z M 21.2852 21.7891 C 21.2852 18.8359 22.9727 16.8906 25.5039 16.8906 C 28.0352 16.8906 29.7227 18.8359 29.7227 21.7891 L 29.7227 24.8125 L 21.2852 24.8125 Z"
  }));
}

var _default = LockRotation;
exports["default"] = _default;