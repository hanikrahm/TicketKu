"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ChartBarCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 Z M14,18 C12.8954305,18 12,18.8954305 12,20 L12,34 C12,35.1045695 12.8954305,36 14,36 L16,36 C17.1045695,36 18,35.1045695 18,34 L18,20 C18,18.8954305 17.1045695,18 16,18 L14,18 Z M23,12 C21.8954305,12 21,12.8954305 21,14 L21,34 C21,35.1045695 21.8954305,36 23,36 L25,36 C26.1045695,36 27,35.1045695 27,34 L27,14 C27,12.8954305 26.1045695,12 25,12 L23,12 Z M32,24 C30.8954305,24 30,24.8954305 30,26 L30,34 C30,35.1045695 30.8954305,36 32,36 L34,36 C35.1045695,36 36,35.1045695 36,34 L36,26 C36,24.8954305 35.1045695,24 34,24 L32,24 Z",
    transform: "translate(4 4)"
  }));
}

var _default = ChartBarCircleFill;
exports["default"] = _default;