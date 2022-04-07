"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ListBullet(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 7.3398 16.7617 C 8.9804 16.7617 10.2929 15.4492 10.2929 13.8320 C 10.2929 12.1914 8.9804 10.8789 7.3398 10.8789 C 5.7226 10.8789 4.3867 12.1914 4.3867 13.8320 C 4.3867 15.4492 5.7226 16.7617 7.3398 16.7617 Z M 17.6992 15.7070 L 49.7149 15.7070 C 50.7930 15.7070 51.6133 14.8867 51.6133 13.8320 C 51.6133 12.7539 50.7930 11.9336 49.7149 11.9336 L 17.6992 11.9336 C 16.6445 11.9336 15.8242 12.7539 15.8242 13.8320 C 15.8242 14.8867 16.6445 15.7070 17.6992 15.7070 Z M 7.3398 30.9414 C 8.9804 30.9414 10.2929 29.6289 10.2929 27.9883 C 10.2929 26.3477 8.9804 25.0352 7.3398 25.0352 C 5.7226 25.0352 4.3867 26.3477 4.3867 27.9883 C 4.3867 29.6289 5.7226 30.9414 7.3398 30.9414 Z M 17.6992 29.8867 L 49.7149 29.8867 C 50.7930 29.8867 51.6133 29.0430 51.6133 27.9883 C 51.6133 26.9336 50.7930 26.1133 49.7149 26.1133 L 17.6992 26.1133 C 16.6445 26.1133 15.8242 26.9336 15.8242 27.9883 C 15.8242 29.0430 16.6445 29.8867 17.6992 29.8867 Z M 7.3398 45.1211 C 8.9804 45.1211 10.2929 43.7852 10.2929 42.1680 C 10.2929 40.5273 8.9804 39.2148 7.3398 39.2148 C 5.7226 39.2148 4.3867 40.5273 4.3867 42.1680 C 4.3867 43.7852 5.7226 45.1211 7.3398 45.1211 Z M 17.6992 44.0430 L 49.7149 44.0430 C 50.7930 44.0430 51.6133 43.2227 51.6133 42.1680 C 51.6133 41.0898 50.7930 40.2695 49.7149 40.2695 L 17.6992 40.2695 C 16.6445 40.2695 15.8242 41.0898 15.8242 42.1680 C 15.8242 43.2227 16.6445 44.0430 17.6992 44.0430 Z"
  }));
}

var _default = ListBullet;
exports["default"] = _default;