"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DownloadCircle(props) {
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
    d: "M24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 Z M24,4 C12.954305,4 4,12.954305 4,24 C4,35.045695 12.954305,44 24,44 C35.045695,44 44,35.045695 44,24 C44,12.954305 35.045695,4 24,4 Z M25.7142857,9.42857143 C29.9747681,9.42857143 33.4285714,12.8823748 33.4285714,17.1428571 C33.4285714,21.4033395 29.9747681,24.8571429 25.7142857,24.8571429 C24.7675119,24.8571429 24,24.089631 24,23.1428571 C24,22.2459135 24.6888472,21.5098587 25.5663706,21.4348639 L25.7142857,21.4285714 C28.0812204,21.4285714 30,19.5097918 30,17.1428571 C30,14.7759225 28.0812204,12.8571429 25.7142857,12.8571429 C23.3473511,12.8571429 21.4285714,14.7759225 21.4285714,17.1428571 L21.4285714,30.1587917 L24.5716292,27.0157339 C25.2436626,26.3437005 26.3300759,26.3427128 26.9995462,27.0121831 C27.6736838,27.6863207 27.6674266,28.7686687 26.9959953,29.4401 L20.9421818,35.4939135 C20.6734037,35.7626916 20.3383422,35.9241306 19.9901811,35.978268 C19.912628,35.9906281 19.8332693,35.9978566 19.7524572,35.9995908 C19.295961,36.0125687 18.835317,35.8432948 18.4859358,35.4939135 L12.4321223,29.4401 C11.7600889,28.7680666 11.7591012,27.6816533 12.4285714,27.0121831 C13.1027091,26.3380454 14.1850571,26.3443026 14.8564884,27.0157339 L18,30.1592455 L18,17.1428571 C18,12.8823748 21.4538034,9.42857143 25.7142857,9.42857143 Z",
    transform: "translate(4 4)"
  }));
}

var _default = DownloadCircle;
exports["default"] = _default;