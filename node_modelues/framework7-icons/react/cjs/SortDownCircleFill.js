"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SortDownCircleFill(props) {
  var children = props.children,
      attrs = _objectWithoutPropertiesLoose(props, ["children"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 56 56"
  }, attrs), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M24,48 C10.745166,48 -3.19744231e-14,37.254834 -3.19744231e-14,24 C-3.19744231e-14,10.745166 10.745166,-3.55271368e-15 24,-3.55271368e-15 C37.254834,-3.55271368e-15 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 Z M23.7813,17.3047 L39.3516,17.3047 C40.3828,17.3047 41.1094,16.6484 41.1094,15.6641 C41.1094,14.6563 40.3828,14 39.3516,14 L23.7813,14 C22.75,14 22,14.6563 22,15.6641 C22,16.6484 22.75,17.3047 23.7813,17.3047 Z M26.7188,25.0625 L39.3516,25.0625 C40.3829,25.0625 41.1094,24.4063 41.1094,23.4219 C41.1094,22.4141 40.3829,21.7578 39.3516,21.7578 L26.7188,21.7578 C25.6876,21.7578 24.961,22.4141 24.961,23.4219 C24.961,24.4063 25.6876,25.0625 26.7188,25.0625 Z M29.9609,32.8202 L39.3281,32.8202 C40.3594,32.8202 41.1094,32.164 41.1094,31.1796 C41.1094,30.1718 40.3594,29.5156 39.3281,29.5156 L29.9609,29.5156 C28.9297,29.5156 28.1797,30.1718 28.1797,31.1796 C28.1797,32.164 28.9297,32.8202 29.9609,32.8202 Z M16.197284,38.1406 C16.712884,38.1406 17.087884,37.9531 17.556684,37.4843 L25.525384,29.5625 C25.830084,29.2578 25.970684,28.8359 25.970684,28.3437 C25.970684,27.3828 25.244184,26.6562 24.283184,26.6562 C23.790984,26.6562 23.345784,26.8437 23.040984,27.1718 L20.134784,30.1015 L17.767584,32.914 L17.955084,27.9687 L17.955084,12.7578 C17.955084,11.7265 17.228484,11 16.197284,11 C15.189484,11 14.439484,11.7265 14.439484,12.7578 L14.439484,27.9687 L14.626984,32.9374 L12.259784,30.1015 L9.353584,27.1718 C9.048884,26.8203 8.626984,26.6562 8.111384,26.6562 C7.150384,26.6562 6.400384,27.3828 6.400384,28.3437 C6.400384,28.8359 6.564484,29.2578 6.892584,29.5625 L14.814484,37.4843 C15.283184,37.9296 15.681684,38.1406 16.197284,38.1406 Z",
    transform: "translate(4 4)"
  }));
}

var _default = SortDownCircleFill;
exports["default"] = _default;