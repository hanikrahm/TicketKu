"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DecreaseQuotelevel(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 15.6133 7.9258 L 15.6133 48.0508 C 15.6133 49.0352 16.3867 49.8555 17.3945 49.8555 C 18.3789 49.8555 19.1523 49.0352 19.1523 48.0508 L 19.1523 7.9258 C 19.1523 6.9414 18.3789 6.1445 17.3945 6.1445 C 16.3867 6.1445 15.6133 6.9414 15.6133 7.9258 Z M 36.7070 35.1836 C 38.3945 36.3086 40.3867 35.6758 40.3867 33.5898 L 40.3867 22.4805 C 40.3867 20.3242 38.4883 19.6445 36.7070 20.8633 L 28.9492 26.1367 C 27.5898 27.0742 27.5430 29.0664 28.9492 30.0039 Z"
  }));
}

var _default = DecreaseQuotelevel;
exports["default"] = _default;