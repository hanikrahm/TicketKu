"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SquarePencilFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.11587829,6.14347211 L36.0470783,6.14347211 C36.1346476,6.14347211 36.2217996,6.14525876 36.3084998,6.14879759 L18.5719558,23.8853416 L15.4434606,29.6870807 C14.8987119,30.8445627 16.2607289,32.4108241 17.5544706,31.8660754 L23.8326833,29.0780844 L42.1306479,10.8003141 C42.2717925,11.3241648 42.3470783,11.8750265 42.3470783,12.4434721 L42.3470783,41.3746721 C42.3470783,44.854066 39.5264722,47.6746721 36.0470783,47.6746721 L7.11587829,47.6746721 C3.63648436,47.6746721 0.815878286,44.854066 0.815878286,41.3746721 L0.815878286,12.4434721 C0.815878286,8.96407818 3.63648436,6.14347211 7.11587829,6.14347211 Z M39.9564783,4.40907211 L43.1675783,7.57317211 L22.4720783,28.2450721 L17.9017783,30.2372721 C17.4843095,30.4130534 17.0461865,29.9502213 17.1475471,29.5634092 L17.1751783,29.4872721 L19.2845783,25.0809721 L39.9564783,4.40907211 Z M43.4018783,0.940372108 C44.1343835,0.229845793 45.2039027,0.108263521 45.9319204,0.715239582 L46.0499783,0.823172108 L46.5890783,1.38567211 C47.3464183,2.12040211 47.3842853,3.19365986 46.6828739,4.00245352 L46.5659783,4.12787211 L44.8782783,5.86227211 L41.6907783,2.62787211 L43.4018783,0.940372108 Z",
    transform: "translate(4 4)"
  }));
}

var _default = SquarePencilFill;
exports["default"] = _default;