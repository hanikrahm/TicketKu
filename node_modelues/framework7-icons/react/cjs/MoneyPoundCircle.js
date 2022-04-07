"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MoneyPoundCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 Z M24,4 C12.954305,4 4,12.954305 4,24 C4,35.045695 12.954305,44 24,44 C35.045695,44 44,35.045695 44,24 C44,12.954305 35.045695,4 24,4 Z M26.640904,12.8571429 C28.7561384,12.8571429 30.6328125,13.2547433 31.4757254,13.6523438 L31.4757254,16.578683 C30.4896763,16.1492746 28.9151786,15.8311942 27.0703125,15.8311942 C23.921317,15.8311942 22.0287388,17.5647321 22.0287388,20.1570871 C22.0287388,21.3180804 22.2195871,22.2564174 22.4422433,23.1470424 L29.9807478,23.1470424 L29.9807478,25.437221 L22.9988839,25.437221 C23.1102121,26.0415737 23.1897321,26.6936384 23.1897321,27.4252232 C23.1897321,29.922154 22.171875,31.8783482 20.5019531,32.6258371 L20.5019531,32.7053571 L32.5890067,32.7053571 L32.5890067,35.6476004 L15.4762835,35.6476004 L15.4762835,32.8166853 C18.3390067,32.3872768 19.7385603,30.1289063 19.7385603,27.5683594 C19.7385603,26.9162946 19.6113281,26.2006138 19.4363839,25.437221 L15.4285714,25.437221 L15.4285714,23.1470424 L18.8797433,23.1470424 C18.6570871,22.1450893 18.4662388,21.1272321 18.4662388,20.125279 C18.4662388,15.688058 21.6311384,12.8571429 26.640904,12.8571429 Z",
    transform: "translate(4 4)"
  }));
}

var _default = MoneyPoundCircle;
exports["default"] = _default;