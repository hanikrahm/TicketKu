"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function GridCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 13.3749 32.8281 C 13.3749 31.7968 14.0546 31.1406 15.1796 31.1406 L 21.1562 31.1406 L 21.1562 24.9766 L 15.1796 24.9766 C 14.0546 24.9766 13.3749 24.3203 13.3749 23.2890 C 13.3749 22.2109 14.0546 21.5781 15.1796 21.5781 L 21.1562 21.5781 L 21.1562 15.4141 C 21.1562 14.2656 21.8124 13.6094 22.8671 13.6094 C 23.8983 13.6094 24.5546 14.2656 24.5546 15.4141 L 24.5546 21.5781 L 31.3514 21.5781 L 31.3514 15.4141 C 31.3514 14.2656 31.9843 13.6094 33.0624 13.6094 C 34.0936 13.6094 34.7499 14.2656 34.7499 15.4141 L 34.7499 21.5781 L 40.8202 21.5781 C 41.9218 21.5781 42.6249 22.2109 42.6249 23.2890 C 42.6249 24.3203 41.9218 24.9766 40.8202 24.9766 L 34.7499 24.9766 L 34.7499 31.1406 L 40.8202 31.1406 C 41.9218 31.1406 42.6249 31.7968 42.6249 32.8281 C 42.6249 33.8828 41.9218 34.5390 40.8202 34.5390 L 34.7499 34.5390 L 34.7499 40.5391 C 34.7499 41.6641 34.0936 42.3437 33.0624 42.3437 C 31.9843 42.3437 31.3514 41.6641 31.3514 40.5391 L 31.3514 34.5390 L 24.5546 34.5390 L 24.5546 40.5391 C 24.5546 41.6641 23.8983 42.3437 22.8671 42.3437 C 21.8124 42.3437 21.1562 41.6641 21.1562 40.5391 L 21.1562 34.5390 L 15.1796 34.5390 C 14.0546 34.5390 13.3749 33.8828 13.3749 32.8281 Z M 24.6014 31.1406 L 31.3749 31.1406 L 31.3749 24.9766 L 24.6014 24.9766 Z"
  }));
}

var _default = GridCircleFill;
exports["default"] = _default;