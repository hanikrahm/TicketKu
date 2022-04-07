"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ArrowRightCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 41.6874 27.9766 C 41.6874 28.5859 41.4530 29.0547 40.9374 29.5703 L 31.9609 38.5234 C 31.6093 38.8516 31.1405 39.0859 30.5780 39.0859 C 29.4765 39.0859 28.6093 38.2422 28.6093 37.1406 C 28.6093 36.5547 28.8436 36.0625 29.2187 35.7109 L 32.5234 32.4766 L 35.7109 29.7812 L 30.0624 29.9922 L 16.3280 29.9922 C 15.1327 29.9922 14.3358 29.1484 14.3358 27.9766 C 14.3358 26.8047 15.1327 25.9609 16.3280 25.9609 L 30.0624 25.9609 L 35.6874 26.1953 L 32.5234 23.5234 L 29.2187 20.2422 C 28.8671 19.9141 28.6093 19.3984 28.6093 18.8359 C 28.6093 17.7344 29.4765 16.8906 30.5780 16.8906 C 31.1405 16.8906 31.6093 17.0781 31.9609 17.4297 L 40.9374 26.4063 C 41.4765 26.9453 41.6874 27.4141 41.6874 27.9766 Z"
  }));
}

var _default = ArrowRightCircleFill;
exports["default"] = _default;