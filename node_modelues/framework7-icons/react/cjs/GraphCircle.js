"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function GraphCircle(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M42.4336854,14.858325 L36.6296004,34.7508872 C35.9411309,37.1105051 33.3945467,37.4179508 32.1571643,35.3016971 L25.8068903,24.4410369 L20.2606697,33.0166452 C19.0741466,34.8512561 16.7140957,34.8624545 15.5154905,33.0329946 L12.983159,29.1678365 L11.823742,30.3568079 C10.6045979,31.6070289 8.53385452,31.8657134 7.04134358,30.9577146 L4.08009524,29.1561801 C6.3683742,38.0220164 14.4193385,44.5714286 24,44.5714286 C35.3612863,44.5714286 44.5714286,35.3612863 44.5714286,24 C44.5714286,20.7162608 43.8020348,17.6122231 42.4336854,14.858325 L42.4336854,14.858325 Z M39.976313,11.0397323 C36.2045518,6.39593129 30.4488079,3.42857143 24,3.42857143 C12.6387137,3.42857143 3.42857143,12.6387137 3.42857143,24 C3.42857143,24.2527154 3.43312838,24.5043664 3.4421646,24.7548754 L8.82332265,28.0286102 C8.95303229,28.1075217 9.26644868,28.0683686 9.36905969,27.9631419 L10.8235234,26.4716029 C12.2496618,25.0091111 14.5003332,25.2272951 15.6200847,26.9363985 L17.8795178,30.3850253 L23.5086106,21.6812792 C24.7171005,19.812703 27.1027349,19.8647137 28.2266173,21.786852 L33.9730815,31.6148368 L39.976313,11.0397323 L39.976313,11.0397323 Z M24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 Z",
    transform: "translate(4 4)"
  }));
}

var _default = GraphCircle;
exports["default"] = _default;