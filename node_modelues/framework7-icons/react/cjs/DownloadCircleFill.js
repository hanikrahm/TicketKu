"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DownloadCircleFill(props) {
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
    d: "M24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 Z M25.7142857,9.42857143 C21.4538034,9.42857143 18,12.8823748 18,17.1428571 L18,17.1428571 L18,30.1592455 L14.8564884,27.0157339 C14.1850571,26.3443026 13.1027091,26.3380454 12.4285714,27.0121831 C11.7591012,27.6816533 11.7600889,28.7680666 12.4321223,29.4401 L12.4321223,29.4401 L18.4859358,35.4939135 C18.835317,35.8432948 19.295961,36.0125687 19.7524572,35.9995908 C19.8332693,35.9978566 19.912628,35.9906281 19.9901811,35.978268 C20.3383422,35.9241306 20.6734037,35.7626916 20.9421818,35.4939135 L20.9421818,35.4939135 L26.9959953,29.4401 C27.6674266,28.7686687 27.6736838,27.6863207 26.9995462,27.0121831 C26.3300759,26.3427128 25.2436626,26.3437005 24.5716292,27.0157339 L24.5716292,27.0157339 L21.4285714,30.1587917 L21.4285714,17.1428571 C21.4285714,14.7759225 23.3473511,12.8571429 25.7142857,12.8571429 C28.0812204,12.8571429 30,14.7759225 30,17.1428571 C30,19.5097918 28.0812204,21.4285714 25.7142857,21.4285714 C24.7675119,21.4285714 24,22.1960833 24,23.1428571 C24,24.089631 24.7675119,24.8571429 25.7142857,24.8571429 C29.9747681,24.8571429 33.4285714,21.4033395 33.4285714,17.1428571 C33.4285714,12.8823748 29.9747681,9.42857143 25.7142857,9.42857143 Z",
    transform: "translate(4 4)"
  }));
}

var _default = DownloadCircleFill;
exports["default"] = _default;