"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TodayFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M4,0 L32,0 C34.209139,0 36,1.790861 36,4 L36,40 C36,42.209139 34.209139,44 32,44 L4,44 C1.790861,44 0,42.209139 0,40 L0,4 C0,1.790861 1.790861,0 4,0 Z M8,14 C6.8954305,14 6,14.8954305 6,16 L6,36 C6,37.1045695 6.8954305,38 8,38 L28,38 C29.1045695,38 30,37.1045695 30,36 L30,16 C30,14.8954305 29.1045695,14 28,14 L8,14 Z M8,6 C6.8954305,6 6,6.8954305 6,8 C6,9.1045695 6.8954305,10 8,10 L16,10 C17.1045695,10 18,9.1045695 18,8 C18,6.8954305 17.1045695,6 16,6 L8,6 Z",
    transform: "translate(10 6)"
  }));
}

var _default = TodayFill;
exports["default"] = _default;