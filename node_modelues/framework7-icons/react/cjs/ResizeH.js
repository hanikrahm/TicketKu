"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ResizeH(props) {
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
    d: "M43.1715729,12.013961 L6.82842712,12.013961 L10.5857864,15.7713203 C11.366835,16.5523689 11.366835,17.8186989 10.5857864,18.5997475 C9.80473785,19.3807961 8.5384079,19.3807961 7.75735931,18.5997475 L0.686291501,11.5286797 C0.669415981,11.5118041 0.652905077,11.4947021 0.63675879,11.4773833 C0.2449921,11.1122752 -1.38000722e-13,10.5917286 -1.38000722e-13,10.013961 C-1.38000722e-13,9.52080842 0.178487773,9.06934385 0.474386909,8.72064375 C0.537125874,8.63328775 0.607760738,8.54985111 0.686291501,8.47132034 L7.75735931,1.40025253 C8.5384079,0.619203948 9.80473785,0.619203948 10.5857864,1.40025253 C11.366835,2.18130112 11.366835,3.44763107 10.5857864,4.22867966 L6.80050506,8.01396103 L43.1994949,8.01396103 L39.4142136,4.22867966 C38.633165,3.44763107 38.633165,2.18130112 39.4142136,1.40025253 C40.1952621,0.619203948 41.4615921,0.619203948 42.2426407,1.40025253 L49.3137085,8.47132034 C49.3922393,8.54985111 49.4628741,8.63328775 49.5256131,8.72064375 C49.8215122,9.06934385 50,9.52080842 50,10.013961 C50,10.5917286 49.7550079,11.1122752 49.3632412,11.4773833 C49.3470949,11.4947021 49.330584,11.5118041 49.3137085,11.5286797 L42.2426407,18.5997475 C41.4615921,19.3807961 40.1952621,19.3807961 39.4142136,18.5997475 C38.633165,17.8186989 38.633165,16.5523689 39.4142136,15.7713203 L43.1715729,12.013961 Z",
    transform: "translate(3 18)"
  }));
}

var _default = ResizeH;
exports["default"] = _default;