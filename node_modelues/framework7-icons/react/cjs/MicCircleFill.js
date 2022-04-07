"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MicCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 31.4922 C 25.5858 31.4922 23.9218 29.6406 23.9218 27.1563 L 23.9218 17.5 C 23.9218 15.0390 25.5858 13.1641 27.9999 13.1641 C 30.4140 13.1641 32.0780 15.0390 32.0780 17.5 L 32.0780 27.1563 C 32.0780 29.6406 30.4140 31.4922 27.9999 31.4922 Z M 21.7655 41.2656 C 21.1796 41.2656 20.6405 40.7500 20.6405 40.1875 C 20.6405 39.5781 21.1796 39.0859 21.7655 39.0859 L 26.9218 39.0859 L 26.9218 36.2031 C 22.0234 35.7344 18.7655 32.0781 18.7655 27.1328 L 18.7655 23.9688 C 18.7655 23.3828 19.2577 22.9141 19.7968 22.9141 C 20.3827 22.9141 20.8983 23.3828 20.8983 23.9688 L 20.8983 27.1328 C 20.8983 31.2578 23.7577 34.2109 27.9999 34.2109 C 32.2187 34.2109 35.1014 31.2578 35.1014 27.1328 L 35.1014 23.9688 C 35.1014 23.3828 35.6171 22.9141 36.2030 22.9141 C 36.7655 22.9141 37.2343 23.3828 37.2343 23.9688 L 37.2343 27.1328 C 37.2343 32.0547 33.9530 35.7109 29.0780 36.2031 L 29.0780 39.0859 L 34.2577 39.0859 C 34.8202 39.0859 35.3358 39.5781 35.3358 40.1875 C 35.3358 40.7500 34.8202 41.2656 34.2577 41.2656 Z"
  }));
}

var _default = MicCircleFill;
exports["default"] = _default;