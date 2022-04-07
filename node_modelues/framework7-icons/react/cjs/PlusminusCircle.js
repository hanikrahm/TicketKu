"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PlusminusCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 27.9999 31.8437 C 29.0546 31.8437 29.9687 31.0937 29.9687 29.9688 L 29.9687 25.5156 L 34.5624 25.5156 C 35.5702 25.5156 36.3905 24.6484 36.3905 23.7344 C 36.3905 22.7734 35.5702 21.9063 34.5624 21.9063 L 29.9687 21.9063 L 29.9687 17.4531 C 29.9687 16.3281 29.0546 15.6016 27.9999 15.6016 C 26.9452 15.6016 26.0077 16.3281 26.0077 17.4531 L 26.0077 21.9063 L 21.4374 21.9063 C 20.4296 21.9063 19.6093 22.7734 19.6093 23.7344 C 19.6093 24.6484 20.4296 25.5156 21.4374 25.5156 L 26.0077 25.5156 L 26.0077 29.9688 C 26.0077 31.0937 26.9452 31.8437 27.9999 31.8437 Z M 21.4374 39.3203 L 34.5624 39.3203 C 35.5702 39.3203 36.3905 38.4063 36.3905 37.4922 C 36.3905 36.5312 35.5702 35.6875 34.5624 35.6875 L 21.4374 35.6875 C 20.4296 35.6875 19.6093 36.5312 19.6093 37.4922 C 19.6093 38.4063 20.4296 39.3203 21.4374 39.3203 Z"
  }));
}

var _default = PlusminusCircle;
exports["default"] = _default;