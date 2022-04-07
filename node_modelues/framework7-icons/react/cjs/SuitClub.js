"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SuitClub(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 5.6525 32.3008 C 5.6525 38.3711 9.7071 42.4258 15.7540 42.4258 C 18.3790 42.4258 20.9806 41.5586 22.6681 40.1758 C 21.7071 42.7305 19.9728 44.6289 18.9650 45.8242 C 17.5118 47.6289 18.1915 50.0195 20.7462 50.0195 L 35.2306 50.0195 C 37.7853 50.0195 38.4650 47.6289 37.0118 45.8242 C 36.0040 44.6289 34.2697 42.7305 33.3321 40.1758 C 34.9962 41.5586 37.5978 42.4258 40.2228 42.4258 C 46.2697 42.4258 50.3475 38.3711 50.3475 32.3008 C 50.3475 26.6992 45.7775 22.1523 40.2228 22.1523 C 38.5353 22.1523 36.8009 22.5977 35.2306 23.3711 C 37.2697 21.1914 38.1134 18.4961 38.1134 16.1289 C 38.1134 10.5274 33.5665 5.9805 27.9884 5.9805 C 22.4337 5.9805 17.8868 10.5274 17.8868 16.1289 C 17.8868 18.5195 18.7071 21.1679 20.7697 23.3711 C 19.1993 22.5977 17.4650 22.1523 15.7540 22.1523 C 10.1993 22.1523 5.6525 26.6992 5.6525 32.3008 Z M 8.9806 32.3711 C 8.9806 28.5977 12.0275 25.5742 15.7540 25.5742 C 18.6134 25.5742 20.6056 26.5117 22.2228 27.1445 C 22.9259 27.3789 23.5353 27.5664 24.1212 27.5664 C 24.9650 27.5664 25.7853 27.0039 25.7853 25.9258 C 25.7853 25.3164 25.5509 24.7070 25.1290 24.2148 C 23.0197 21.7774 21.2150 19.8555 21.2150 16.1992 C 21.2150 12.4258 24.2384 9.4023 27.9884 9.4023 C 31.7384 9.4023 34.7853 12.4258 34.7853 16.1992 C 34.7853 19.8555 32.9571 21.7774 30.8478 24.2148 C 30.4493 24.7070 30.1915 25.3164 30.1915 25.9258 C 30.1915 27.0039 31.0353 27.5664 31.8556 27.5664 C 32.4650 27.5664 33.0275 27.3789 33.7306 27.1445 C 35.3478 26.5352 37.3400 25.5742 40.2228 25.5742 C 43.9493 25.5742 47.0197 28.5977 47.0197 32.3711 C 47.0197 36.4258 44.3009 39.0977 40.2228 39.0977 C 37.3868 39.0977 34.6681 37.9726 33.1212 36.5664 C 31.7150 35.3242 29.6759 35.9101 29.7697 38.0430 C 30.0275 40.4570 31.6446 44.0664 33.3087 46.0586 C 33.6368 46.4570 33.4493 46.7852 33.0978 46.7852 L 22.9024 46.7852 C 22.5275 46.7852 22.3400 46.4570 22.6681 46.0586 C 24.3321 44.0664 25.9493 40.4570 26.2071 38.0430 C 26.3009 35.9101 24.2618 35.3242 22.8556 36.5664 C 21.3087 37.9726 18.5900 39.0977 15.7540 39.0977 C 11.6759 39.0977 8.9806 36.4258 8.9806 32.3711 Z"
  }));
}

var _default = SuitClub;
exports["default"] = _default;